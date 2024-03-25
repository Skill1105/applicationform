import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ApplicationForm.css'
import { connect } from 'react-redux';


const Page1 = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.loading);
  const success = useSelector(state => state.success);
  const error = useSelector(state => state.error);
  const applicationNumber = useSelector(state => state.applicationNumber);


  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };


  const [isSameAddress, setIsSameAddress] = useState(false);



  const handlePresentAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      presentAddress: {
        ...prevFormData.presentAddress,
        [name]: value,
      },
    }));
  };



  const handleCheckboxChange = () => {
    setIsSameAddress(!isSameAddress);
    if (!isSameAddress) {
      // Copy present address to permanent address if checked
      setFormData((prevFormData) => ({
        ...prevFormData,
        permanentAddress: { ...prevFormData.presentAddress },
      }));
    } else {
      // Clear permanent address fields if unchecked
      setFormData((prevFormData) => ({
        ...prevFormData,
        permanentAddress: {
          ...prevFormData.permanentAddress, // Copy existing permanent address fields if needed
          houseNo: '',
          streetName: '',
          cityName: '',
          villageName: '',
          landmark: '',
          state: '',
          pincode: '',
          daytimeContactNo: '',
          mobileNo: '',
          email: '',
        },
      }));
    }
  };


  const handlePermanentAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      permanentAddress: {
        ...prevFormData.permanentAddress,
        [name]: value,
      },
    }));
  };


  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    presentAddress: {
      houseNo: '',
      streetName: '',
      landmark: '',
      villageName: '',
      cityName: '',
      state: '',
      pincode: '',
    },
    permanentAddress: {
      houseNo: '',
      streetName: '',
      landmark: '',
      villageName: '',
      cityName: '',
      state: '',
      pincode: '',
      mobileNo: '',
      email: '',
    },
    dob: '',
    placeOfBirth: '',
    city: '',
    country: '',
    gender: '',
    citizenship: '',
    surgeries: '',
    familyDetails: [
      { relationship: 'Mother', relName: '', reloccupation: '', relAddress: '' },
      { relationship: 'Father', relName: '', reloccupation: '', relAddress: '' },
      { relationship: 'Spouse', relName: '', reloccupation: '', relAddress: '' },
    ],
    visionRight: '',
    visionLeft: '',
    majorIllness: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Check if the name is 'dob' and the value is a valid date
    if (name === 'dob' && !isNaN(new Date(value).getTime())) {
      // Update the state with the valid date
      setFormData({
        ...formData,
        [name]: value,
        // Calculate age based on valid DOB
        age: calculateAge(value),
      });
    } else {
      // Handle other input changes
      setFormData({
        ...formData,
        [name]: value,
      });
    }

  };
  
  // Function to calculate age based on DOB
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  

  
  const handleSave = (e) => {
    // Prevent default form submission
    e.preventDefault();

    // Save form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    console.log('Form data saved to local storage:', formData);
  };

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));

    if (savedFormData) {
      // Set the form data with the saved data from localStorage
      setFormData(savedFormData);
    }
  }, []);

 

  const handleFamilyInputChange = (e, index, fieldName) => {
    const { value } = e.target;
    const updatedFamilyDetails = [...formData.familyDetails];
    updatedFamilyDetails[index][fieldName] = value;
    setFormData({ ...formData, familyDetails: updatedFamilyDetails });
  };

  return (
    <form className='border p-2 m-2 res-remove-margin' onSubmit={handleSave}>
       {success && (
        <p>Application Number: {applicationNumber}</p>
      )}
      <div className='application-con m-3 '>
        <div className='form-details row '>
          <div className=' mt-3 col-md-9 text-center'>
            <h2 className='form-heading text-center '>Infoswan Private Limited</h2>
            <p className=''>#402, Plot No:14, Green Hamlet, Silpa Park, Kondapur, Hyderabad-89. Telangana, India.</p>
            <p className=''>Tel: +91-40-35843505, Mob: +91-9014183086</p>
            <h1 className='form-heading'>Employee Personal Information</h1>
            <p >Please answer each column fully and neatly in your own handwriting</p>
          </div>

          <div className='col-md-3 mt-3 res-remove-margin'>
            <div className='avator-uploader d-flex justify-content-start'>
              <label htmlFor="imageInput">
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  {image ? (
                    <img
                      src={image}
                      alt="Selected Avatar"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#ddd',
                        color: '#666',
                      }}
                    >
                      <span className='text-center p-3'>Please Choose
                        Your Passport
                        Photo Here</span>
                    </div>
                  )}
                </div>
              </label>
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>


        <p className='ml-5 mt-3'>Please √ in the <span>
          <input type='checkbox' />
        </span> wherever applicable</p>

      </div>
      <div>

        {/* PERSONAL INFORMATION */}
        <h2 className='text-heading mb-2'>PERSONAL INFORMATION : </h2>
        <div className="form-container border p-3 m-3 res-remove-margin">

          <div className="form-left-datails mr-2 col-sm-d-none">
            <span>P</span>
            <span>E</span>
            <span>R</span>
            <span>S</span>
            <span>O</span>
            <span>N</span>
            <span>A</span>
            <span>L</span>
            <span> <br /> </span>
            <span>D</span>
            <span>E</span>
            <span>T</span>
            <span>A</span>
            <span>I</span>
            <span>L</span>
            <span>S</span>
          </div>

          <div className="form-fill">
            <div className="row container mb-2 p-3 ">
              <h3>NAME IN FULL :</h3>
              <p>(in block letters)</p>
              <div className="d-flex justify-content-between  res-display-felx-column">
                <input type="text" placeholder='FIRST' className='form-control mr-2' name="firstName" value={formData.firstName} onChange={handleChange} />
                <input type="text" placeholder='MIDDLE' className='form-control' name="middleName" value={formData.middleName} onChange={handleChange} />
                <input type="text" placeholder='SURNAME' className='form-control ml-2' name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>
            <div>

              <div className='tbl-personal-details border ml-0 p-3'>
                <div className='row border res-border-none'>
                  <div className="col-md-6 p-3 border res-border-none">
                    <h3 className='text-center fw-bold'>PRESENT ADDRESS</h3>
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="House No / Flat No"
                      name="houseNo"
                      value={formData.presentAddress.houseNo}
                      onChange={handlePresentAddressChange}
                    />
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="StreetName"
                      name="streetName"
                      value={formData.presentAddress.streetName}
                      onChange={handlePresentAddressChange}
                    />
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Land Mark"
                      name="landmark"
                      value={formData.presentAddress.landmark}
                      onChange={handlePresentAddressChange}
                    />
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Village Name"
                      name="villageName"
                      value={formData.presentAddress.villageName}
                      onChange={handlePresentAddressChange}
                    />
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="City Name"
                      name="cityName"
                      value={formData.presentAddress.cityName}
                      onChange={handlePresentAddressChange}
                    />
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="State"
                      name="state"
                      value={formData.presentAddress.state}
                      onChange={handlePresentAddressChange}
                    />
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Pincode"
                      name="pincode"
                      value={formData.presentAddress.pincode}
                      onChange={handlePresentAddressChange}
                    />
                    <div className='d-flex h-25 mt-3'>
                      <p className='mt-2'>Tel No. (specify area code):</p> <input type="text" className='form-control w-25' value={formData.presentAddress.telNo} onChange={handlePermanentAddressChange} />
                    </div>
                  </div>


                  <div className="col-md-6 p-3 border">
                    <h3 className='text-center fw-bold'>PERMANENT ADDRESS</h3>
                    <div className='d-flex justify-content-center'>
                      <h3 className='text-center fw-bold mr-2'>IS SAME AS PRESENT ADDRESS</h3>
                      <input type='checkbox' checked={isSameAddress} onChange={handleCheckboxChange} />
                    </div>

                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="House No/Flat No"
                      name="houseNo"
                      value={isSameAddress ? formData.presentAddress.houseNo : formData.permanentAddress.houseNo}
                      onChange={handlePermanentAddressChange}
                      disabled={isSameAddress}
                    />

                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Street Name"
                      name="streetName"
                      value={isSameAddress ? formData.presentAddress.streetName : formData.permanentAddress.streetName}
                      onChange={handlePermanentAddressChange}
                      disabled={isSameAddress}
                    />

                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder='Land Mark'
                      name='landmark'
                      value={isSameAddress ? formData.presentAddress.landmark : formData.permanentAddress.landmark}
                      onChange={handlePermanentAddressChange}
                      disabled={isSameAddress}
                    />

                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder='Village Name'
                      name='villageName'
                      value={isSameAddress ? formData.presentAddress.villageName : formData.permanentAddress.villageName}
                      onChange={handlePermanentAddressChange}
                      disabled={isSameAddress}
                    />

                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder='City Name'
                      name='cityName'
                      value={isSameAddress ? formData.presentAddress.cityName : formData.permanentAddress.cityName}
                      onChange={handlePermanentAddressChange}
                      disabled={isSameAddress}
                    />

                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder='State'
                      name='state'
                      value={isSameAddress ? formData.presentAddress.state : formData.permanentAddress.state}
                      onChange={handlePermanentAddressChange}
                      disabled={isSameAddress}
                    />

                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder='Pincode'
                      name='pincode'
                      value={isSameAddress ? formData.presentAddress.pincode : formData.permanentAddress.pincode}
                      onChange={handlePermanentAddressChange}
                      disabled={isSameAddress}
                    />

                    <input
                      type="text"
                      placeholder='Day time contact No. (optional)'
                      className='form-control w-100'
                      name='daytimeContactNo'
                      value={formData.permanentAddress.daytimeContactNo}
                      onChange={handlePermanentAddressChange}
                    />
                    <div className='h-25 mt-3'>
                      <div className="d-flex">
                        <p className='mt-2'>Mobile No.:</p> <input type="text" className='form-control w-50' name='mobileNo' value={formData.permanentAddress.mobileNo} onChange={handlePermanentAddressChange} />
                      </div>
                      <div className="d-flex">
                        <p className='mt-2'>Email:</p> <input type="text" className='form-control w-50' name='email' value={formData.permanentAddress.email} onChange={handlePermanentAddressChange} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* responsive 1 */}
                <div className='row border'>
                  <div className='col-md-3 border p-2'>
                    <h3 className='text-center mt-5'>DATE OF BIRTH:</h3>
                    <center>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        className='form-control'
                        value={formData.dob}
                        onChange={handleChange}
                      />
                    </center>
                  </div>
                  <div className='col-md-3 border p-2 d-flex text-center align-items-center'>
                    <label >AGE:</label>
                    <center>
                    <input
                      type="text"
                      id="age"
                      name="age"
                      className='form-control'
                      value={formData.age}
                      readOnly // Age will be automatically calculated, so set it as readOnly
                    />
                    </center>
                  
                  </div>
                  <div className='col-md-3 border p-3'>
                    <h3>PLACE OF BIRTH:</h3>
                    <input
                      type="text"
                      className='form-control w-75'
                      value={formData.placeOfBirth}
                      onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                    />                    <div className="d-flex mt-3">
                      <p>CITY:</p>
                      <input
                        type="text"
                        className='form-control w-75'
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />                            </div>
                    <div className="d-flex mt-3">
                      <p>COUNTRY:</p>
                      <input
                        type="text"
                        className='form-control w-75'
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className='col-md-3 border p-3'>
                    <h3 className='text-center'>DOMICILE OF(STATE IN INDIA)</h3>
                    <center><input type="text" className='form-control w-75' value={formData.stateInIndia} onChange={(e) => console.log(e.target.value)} /></center>
                  </div>
                </div>
              </div>

              <div className="row res-border-none p-3">
                <div className='col-md-6'>
                  <h3>CITIZENSHIP(S)</h3>

                  <input
                    type="text"
                    className='form-control w-75'
                    value={formData.citizenship}
                    onChange={(e) => setFormData({ ...formData, citizenship: e.target.value })}
                  />
                </div>
                <div className="col-md-6 ">
                  <div className=" d-flex gender res-display-felx-column " style={{ marginTop: '20px', marginLeft: '50px' }}>
                    <p className="ms-5 mr-2">GENDER: </p>
                    <div className='res-display-felx-row d-flex'>
                      <label> &nbsp; MALE<input type="radio" id="maleRadio" name="gender" value="MALE" className='me-3 ml-2' onChange={handleChange} checked={formData.gender === 'MALE'} /></label>
                      <label> &nbsp; FEMALE<input type="radio" id="femaleRadio" name="gender" value="FEMALE" className='me-3 ml-2' onChange={handleChange} checked={formData.gender === 'FEMALE'} /></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAMILY INFORMATION */}
        <h2 className='text-heading mt-3 mb-2'>FAMILY INFORMATION : </h2>
        <div className="form-container border p-3 m-3 res-remove-margin">
          <div className="form-left-datails relationship-sec-span mr-2 col-sm-d-none">
            <span>F</span>
            <span>A</span>
            <span>M</span>
            <span>I</span>
            <span>L</span>
            <span>Y</span>
            <span> <br /> </span>
            <span>P</span>
            <span>A</span>
            <span>R</span>
            <span>T</span>
            <span>I</span>
            <span>C</span>
            <span>U</span>
            <span>L</span>
            <span>A</span>
            <span>R</span>
            <span>S</span>
          </div>
          <div className="form-fill relationship-sec w-100" style={{ overflowY: 'auto' }}>
            <table className='family-particulars' style={{ overflowX: 'auto' }}>
              <thead>
                <tr>
                  <th>RELATIONSHIP</th>
                  <th>NAME</th>
                  <th>OCCUPATION</th>
                  <th>ADDRESS</th>
                </tr>
              </thead>
              <tbody>
                
                {formData.familyDetails.map((family, index) => (
                  <tr key={index}>
                    <td>{family.relationship}</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={family.relName}
                        onChange={(e) => handleFamilyInputChange(e, index, 'relName')}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={family.reloccupation}
                        onChange={(e) => handleFamilyInputChange(e, index, 'reloccupation')}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={family.relAddress}
                        onChange={(e) => handleFamilyInputChange(e, index, 'relAddress')}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        {/* HEALTH INFORMATION*/}
        <h2 className='text-heading mb-2 mt-3'>HEALTH INFORMATION : </h2>
        <div className="form-container border p-3 m-3 res-remove-margin ">
          <div className="form-left-datails col-sm-d-none mr-2 ">
            <span>H</span>
            <span>E</span>
            <span>A</span>
            <span>L</span>
            <span>T</span>
            <span>H</span>
          </div>
          <div className="p-2 w-100">
            <div className='row'>
              <div className="col-6 border res-font-size ">
                <p>BLOOD GROUP:</p>
                <input
                  type='text'
                  className='form-control'
                  name='bloodGroup'
                  value={formData.bloodGroup}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 border res-font-size  ">
                <p>ALLERGIES, IF ANY:</p>
                <input
                  type='text'
                  className='form-control'
                  name='allergies'
                  value={formData.allergies}
                  onChange={handleChange}
                />
              </div>
            </div>

            <section className='row'>
              <div className="col-md-6  border p-3 ">
                <div className='vision-inputs res-display-felx-column '>
                  <p className='mt-3 mr-5'>VISION: </p>
                  <div className='d-flex res-display-felx-column mt-3 '>
                    <div className='d-flex align-items-center res-remove-margin'>
                      <h3 className='mr-3 res-remove-margin'>LEFT:</h3>
                      <input
                        type='number'
                        className='inputs-vision w-50'
                        name='visionLeft'
                        value={formData.visionLeft}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='d-flex align-items-center mt-2 '>
                      <h3 className='mr-3 ml-5 res-remove-margin'>RIGHT:</h3>
                      <input
                        type='number'
                        className='inputs-vision w-50'
                        name='visionRight'
                        value={formData.visionRight}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                </div>
                {/* wtrwerwtwewe */}
              </div>
              <div className="col-md-6  border p-3 ">
                <h3>LAST MAJOR ILLNESS / SURGERY (specify date)</h3>
                <textarea
                  name='surgeries'
                  className='form-control border'
                  value={formData.surgeries}
                  onChange={handleChange}
                ></textarea>
              </div>
            </section>
          </div>
        </div>
        <button className='d-flex ms-auto btn btn-primary mt-2 ' type="submit" >{loading ? 'Saving...' : 'Save'}</button>
        {success && (
        <p>Application saved successfully.</p>
      )}

        {loading && <p>Loading...</p>}
        {error && <p className='text-danger'>{error}</p>}
      </div>
    </form>


  )
}

// const mapStateToProps = (state) => ({
//   loading: state.loading,
//   success: state.success,
//   error: state.error,
//   applicationNumber: state.applicationNumber,
// });

export default Page1;