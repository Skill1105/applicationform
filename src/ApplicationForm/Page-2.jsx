import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './ApplicationForm.css'
import { connect } from 'react-redux';
import { TheaterComedySharp } from '@mui/icons-material';


const tableData = [
  { label: 'LEVEL', fields: ['LEVEL', 'XSTD', 'XII STD/DIP/EQUIV', 'GRADUATION', 'POST GRADUATION', 'OTHERS'] },
  { label: 'BOARD/UNIVERSITY', fields: ['', '', '', '', ''] },
  { label: 'SCHOOL/COLLEGE', fields: ['', '', '', '', ''] },
  { label: 'AREA OF SPECIALIZATION', fields: ['', '', '', '', ''] },
  { label: 'YEAR AND MONTH OF FINAL EXAMINATION', fields: ['', '', '', '', ''] },
  { label: 'TOTAL AGGREGATE MARKS SCORED FOR ALL SUBJECTS / SEMESTERS / YEARS', fields: ['', '', '', '', ''] },
  { label: 'MAX. MARKS FOR ALL SUBJECTS / SEMESTERS / YEARS', fields: ['', '', '', '', ''] },
  { label: 'SIMPLE AVERAGE PERCENTAGE/ CGPA/ GRADE FOR ALL YOUR SUBJECTS/ SEMESTERS', fields: ['', '', '', '', ''] },
  { label: 'POSITION / RANK IN THE CLASS', fields: ['', '', '', '', ''] },
  { label: 'CHOOSE CERTIFICATE', fields: ['file', 'file', 'file', 'file', 'file'] },
];


const formData = []

const Page2 = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    hasPassport: false,
    passportNo: '',
    dateOfIssue: '',
    validUpto: '',
    issuedBy: '',
    place: '',
    passportPincode: '',
    addressInPassport: {
      passportHouseNo: '',
      passportStreetName: '',
      passportVillageName: '',
      passportCityName: '',
      passportCountry: '',
      passportState: '',
      passportPincode: '',
    },
    emigrationCheckRegd: false,
    dateOfApplication: '',
    toWhom: '',

    educationDetails: [
      {
        label: "BOARD/UNIVERSITY",
        XClass: "",
        XIIStd: "",
        graduation: "",
        postGraduation: '',
        others: '',
      },
      {
        label: "SCHOOL/COLLEGE",
        XClass: "",
        XIIStd: "",
        graduation: "",
        postGraduation: '',
        others: '',
      },
      {
        label: "AREA OF SPECIALIZATION",
        XClass: "",
        XIIStd: "",
        graduation: "",
        postGraduation: '',
        others: '',
      },
      {
        label: "YEAR AND MONTH OF FINAL EXAMINATION",
        XClass: "",
        XIIStd: "",
        graduation: "",
        postGraduation: '',
        others: '',
      },
      {
        label: "TOTAL AGGREGATE MARKS SCORED FOR ALL SUBJECTS / SEMESTERS / YEARS",
        XClass: "",
        XIIStd: "",
        graduation: "",
        postGraduation: '',
        others: '',
      },
      {
        label: "MAX. MARKS FOR ALL SUBJECTS / SEMESTERS / YEARS",
        XClass: "",
        XIIStd: "",
        graduation: "",
        postGraduation: '',
        others: '',
      },
      {
        label: "SIMPLE AVERAGE PERCENTAGE/ CGPA/ GRADE FOR ALL YOUR SUBJECTS/ SEMESTERS",
        XClass: "",
        XIIStd: "",
        graduation: "",
        postGraduation: '',
        others: '',
      },
      {
        label: "POSITION / RANK IN THE CLASS",
        XClass: "",
        XIIStd: "",
        graduation: "",
        postGraduation: '',
        others: '',
      },
      {
        label: "CHOOSE CERTIFICATE",
        XClass: "File",
        XIIStd: "File",
        graduation: "File",
        postGraduation: 'File',
        others: 'File',
      },
    ],
    gapsinEducation: '',
    achievements: '',
    circularACtivities: '',
  });



  const loading = useSelector(state => state.loading);
  const success = useSelector(state => state.success);
  const error = useSelector(state => state.error);

  const handleEmigrationCheckChange = value => {
    setFormData(prevData => ({ ...prevData, emigrationCheckRegd: value }));
  };

  const handleCheckboxChange = value => {
    setFormData(prevData => ({ ...prevData, hasPassport: value }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handlepassportDetails = event => {
    const { name, value } = event.target;
    if (formData.hasPassport) {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleaddressInPassport = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      addressInPassport: {
        ...prevState.addressInPassport,
        [name]: value,
      },
    }));
  };


  const handleSave = e => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));

  };

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);


  const handleEducationChange = (index, e, name) => {
    const { value } = e.target;
    const updatedEducation = [...formData.educationDetails];
    updatedEducation[index][name] = value;
    setFormData({ ...formData, educationDetails: updatedEducation });
  };








  return (
    <form onSubmit={handleSave} className='border p-2 m-2 res-remove-margin'>
      {/* PASSPORT INFORMATION */}
      <h2 className='text-heading mb-2'>PASSPORT DETAILS : </h2>
      <div className="form-container border p-3 m-3 res-remove-margin">
        <div className="form-left-datails pass-span-container mr-2 col-sm-d-none">
          <span>P</span>
          <span>A</span>
          <span>S</span>
          <span>S</span>
          <span>P</span>
          <span>O</span>
          <span>R</span>
          <span>T</span>
          <br />
          <span>D</span>
          <span>E</span>
          <span>T</span>
          <span>A</span>
          <span>I</span>
          <span>L</span>
          <span>S</span>
        </div>
        <div className='w-100'>
          <div className='d-flex felx-column res-display-felx-column p-2'>
            <h3 className='res-m-0' style={{ marginRight: '235px' }}>DO YOU HAVE A PASSPORT?</h3>
            <div className='res-display-felx-row'>
              <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">NO
                <input
                  type="checkbox"
                  checked={formData.hasPassport === false}
                  onChange={() => handleCheckboxChange(false)}
                />
              </label>
              <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">YES
                <input
                  type="checkbox"
                  checked={formData.hasPassport === true}
                  onChange={() => handleCheckboxChange(true)}
                />
              </label>
            </div>
          </div>
          <p className='ms-5 res-m-0'>IF YES, PLEASE FILL IN THE PARTICULARS</p>

          {/* Passport Details */}
          <>
            <div className="d-flex justify-content-around border  passport">
              <div className=' p-2'>
                <p>PASSPORT NO:</p>
                <input
                  type="text"
                  name="passportNo"
                  value={formData.passportNo}
                  onChange={handlepassportDetails}
                  placeholder="Passport Number"
                  className='form-control w-100'
                  readOnly={formData.hasPassport === false}
                />
              </div>
              <div className=' p-2'>
                <p>DATE OF ISSUE:</p>
                <input
                  type="date"
                  name="dateOfIssue"
                  value={formData.dateOfIssue}
                  onChange={handlepassportDetails}
                  className='form-control'
                  readOnly={formData.hasPassport === false}
                />
              </div>
              <div className=' p-2'>
                <p>VALID UPTO:</p>
                <input
                  type="date"
                  name="validUpto"
                  value={formData.validUpto}
                  onChange={handlepassportDetails}
                  className='form-control'
                  readOnly={formData.hasPassport === false}
                />
              </div>
              <div className=' p-2'>
                <p>ISSUED BY:</p>
                <input
                  type="text"
                  name="issuedBy"
                  value={formData.issuedBy}
                  onChange={handlepassportDetails}
                  className='form-control'
                  readOnly={formData.hasPassport === false}
                />
              </div>
              <div className=' p-2'>
                <p>PLACE:</p>
                <input
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handlepassportDetails}
                  className='form-control'
                  readOnly={formData.hasPassport === false}
                />
              </div>
            </div>
          </>
          {/* Adrees Details in Passport */}

          <div className='border m-0  row'>
            <div className="border res-border-none p-3 col-md-6">
              <p>ADDRESS IN PASSPORT:</p>
              <input
                type="text"
                className="form-control w-100"
                placeholder="House No / Flat No"
                name="passportHouseNo"
                value={formData.addressInPassport.passportHouseNo}
                onChange={handleaddressInPassport}
                readOnly={formData.hasPassport === false}
              />

              <input
                type="text"
                name="passportStreetName"
                value={formData.addressInPassport.passportStreetName} // Specify the property to display
                onChange={handleaddressInPassport}
                placeholder="Street Name"
                className='form-control w-100'
                readOnly={formData.hasPassport === false}
              />
              <input
                type="text"
                name="passportVillageName"
                value={formData.addressInPassport.passportVillageName} // Specify the property to display
                onChange={handleaddressInPassport}
                placeholder="Village Name"
                className='form-control w-100'
                readOnly={formData.hasPassport === false}
              />
              <input
                type="text"
                name="passportCityName"
                value={formData.addressInPassport.passportCityName} // Specify the property to display
                onChange={handleaddressInPassport}
                placeholder="City Name"
                className='form-control w-100'
                readOnly={formData.hasPassport === false}
              />

              <input
                type="text"
                name="passportState"
                value={formData.addressInPassport.passportState} // Specify the property to display
                onChange={handleaddressInPassport}
                placeholder="State"
                className='form-control w-100'
                readOnly={formData.hasPassport === false}
              />
              <input
                type="text"
                name="passportPincode"
                value={formData.addressInPassport.passportPincode} // Specify the property to display
                onChange={handleaddressInPassport}
                placeholder="Pincode"
                className='form-control w-100'
                readOnly={formData.hasPassport === false}
              />
              <input
                type="text"
                name="passportCountry"
                value={formData.addressInPassport.passportCountry}
                onChange={handleaddressInPassport}
                className='form-control w-100'
                placeholder='Passport Country'
                readOnly={formData.hasPassport === false}
              />
            </div>

            <div className='col-md-6 mt-5'>
              <div className='d-flex res-display-felx-column justify-content-around mt-2'>
                <h3 className='res-m-0' style={{ marginRight: '100px' }}>EMIGRATION CHECK REGD:</h3>

                <div className='res-display-felx-row mb-2 '>
                  <label className='ml-5 res-m-0 res-ml-2' htmlFor="noEmigration">NO
                    <input
                      type="checkbox"
                      id="noEmigration"
                      checked={formData.emigrationCheckRegd === false}
                      onChange={() => handleEmigrationCheckChange(false)}
                      className='res-ml-2'
                    />
                  </label>
                  <label className='ml-5 res-m-0 res-ml-2' htmlFor="yesEmigration">YES
                    <input
                      type="checkbox"
                      id="yesEmigration"
                      checked={formData.emigrationCheckRegd === true}
                      onChange={() => handleEmigrationCheckChange(true)}
                      className='res-ml-2'
                    />
                  </label>
                </div>
              </div>

              <div className='p-3 res-p-0'>
                <h3 className=' res-text-left'>IN CASE YOU HAVE ONLY APPLIED FOR PASSPORT,</h3>
                <div className='d-flex justify-content-center mt-3 res-display-felx-column'>
                  <p>DATE OF APPLICATION:</p>
                  <input
                    type="date"
                    className='form-control w-100'
                    value={formData.dateOfApplication}
                    onChange={(e) => setFormData({ ...formData, dateOfApplication: e.target.value })}
                    readOnly={formData.emigrationCheckRegd === false}
                  />
                </div>
                <div className='d-flex justify-content-center mt-3 res-display-felx-column'>
                  <p>TO WHOM:</p>
                  <input
                    type="text"
                    className='form-control w-100'
                    value={formData.toWhom}
                    onChange={(e) => setFormData({ ...formData, toWhom: e.target.value })}
                    readOnly={formData.emigrationCheckRegd === false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* EDUCATIONAL DETAILS */}
      <h2 className='text-heading mt-3 mb-2'>EDUCATIONAL INFORMATION :</h2>
      {/* responsive 1 */}
      <div className="form-container border p-3 m-3 res-remove-margin">
        <div className="form-left-datails pass-span-container mr-2 col-sm-d-none">
          <span>E</span>
          <span>D</span>
          <span>U</span>
          <span>C</span>
          <span>A</span>
          <span>T</span>
          <span>I</span>
          <span>O</span>
          <span>N</span>
          <span><br /></span>
          <span>D</span>
          <span>E</span>
          <span>T</span>
          <span>A</span>
          <span>I</span>
          <span>L</span>
          <span>S</span>

        </div>
        <div style={{ overflowX: 'auto' }}>
          <div>
            {/* <table className='family-particulars education-1-tbl'>
              <thead>
                <tr>
                  {tableData[0].fields.map((header, index) => (
                    <th key={index} className='p-2'>{header}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {tableData.slice(1).map((rowData, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{rowData.label}</td>
                    {rowData.fields.map((field, fieldIndex) => (
                      <td key={fieldIndex}>
                        {field === 'file' ? (
                          <input type="file" className='form-control' />
                        ) : (
                          <input
                            type="text"
                            className='form-control'
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              <thead>
              </thead>
            </table> */}

            {/* <table className='family-particulars education-1-tbl'>
              <thead>
                <tr>
                  <th>LEVEL</th>
                  <th>X STD</th>
                  <th>XII STD/ DIP/ EQUIV</th>
                  <th>GRADUATION</th>
                  <th>POST GRADUATION</th>
                  <th>OTHERS</th>
                </tr>
              </thead>
              {formData.educationDetails.map((education, index) => (
                <div key={index}>
                  <tbody>
                    <tr>
                      <td>{education.label}</td>
                      <td><input className='form-control' value={education.XClass} onChange={(e) => handleEducationChange(index, e, 'XClass')} /></td>
                      <td><input className='form-control' value={education.XClass} onChange={(e) => handleEducationChange(index, e, 'XClass')} /></td>
                      <td><input className='form-control' value={education.XClass} onChange={(e) => handleEducationChange(index, e, 'XClass')} /></td>
                      <td><input className='form-control' value={education.XClass} onChange={(e) => handleEducationChange(index, e, 'XClass')} /></td>
                      <td><input className='form-control' value={education.XClass} onChange={(e) => handleEducationChange(index, e, 'XClass')} /></td>
                    </tr>
                  </tbody>
                </div>
              ))}
            </table> */}


            <table className='family-particulars education-1-tbl'>
              <thead>
             
                  <td>LEVEL</td>
                  <td>X STD</td>
                  <td>XII STD/ DIP/ EQUIV</td>
                  <td>GRADUATION</td>
                  <td>POST GRADUATION</td>
                  <td>OTHERS</td>
             
              </thead>
             
              <tbody>
                {formData.educationDetails.map((education, index) => (
                  <tr key={index}>
                    <td>{education.label}</td>
                    <td><input className='form-control p-2' value={education.boardUniversity} onChange={(e) => handleEducationChange(index, e, 'XClass')} /></td>
                    <td> <input className='form-control p-2' value={education.schoolCollege} onChange={(e) => handleEducationChange(index, e, 'XClass')} /></td>
                    <td> <input className='form-control p-2' value={education.specialization} onChange={(e) => handleEducationChange(index, e, 'XClass')} /></td>
                    <td> <input className='form-control p-2' value={education. totalMarks} onChange={(e) => handleEducationChange(index, e, 'XClass')} /></td>
                    <td> <input className='form-control p-2' value={education.maxMarks} onChange={(e) => handleEducationChange(index, e, 'XClass')} /></td>
                     </tr>
                 
                ))}
       </tbody>
            </table>


          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="form-container border ml-3 mr-3 res-remove-margin">
        <div className='w-100'>
          <div>
            <p className='border pl-1'>ALL PERCENTAGES / CGPA SHOULD BE SIMPLE AVERAGE FOR ALL YOUR SUBJECTS / SEMESTERS / YEARS</p>
            <div className='border p-3'>
              <p>GAPS IN EDUCATION (If Any):</p>
              <textarea
                className='form-control border'
                value={formData.gapsinEducation}
                onChange={(e) => setFormData({ ...formData, gapsinEducation: e.target.value })}
              ></textarea>
            </div>
            <div className='border p-3'>
              <p>SCHOLASTIC ACHIEVEMENTS (Ranks, Merit Scholarships, Prizes, etc.,): </p>
              <textarea
                className='form-control border'
                value={formData.achievements}
                onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
              ></textarea>
            </div>
            <div className='border p-3'>
              <p>EXTRA CURRICULAR ACTIVITIES:</p>
              <textarea
                className='form-control border'
                value={formData.circularACtivities}
                onChange={(e) => setFormData({ ...formData, circularACtivities: e.target.value })}
              ></textarea>
            </div>
          </div>

        </div>

        <div>
        </div>

      </div>

      <button className='d-flex ms-auto btn btn-primary mt-2' type="submit">{loading ? 'Saving...' : 'Save'}</button>
      {success && <p>Application saved successfully.</p>}
      {loading && <p>Loading...</p>}
      {error && <p className='text-danger'>{error}</p>}
    </form>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  success: state.success,
  error: state.error,
});

export default connect(mapStateToProps,)(Page2);
