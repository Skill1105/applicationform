import React, { useState } from 'react'
import './ApplicationForm.css'
const Page4 = () => {

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

  return (
    <div className='border m-3 p-3 res-remove-margin'>
      <div className='form-container border p-3 m-3 res-remove-margin'>
        <div className="form-left-datails pass-span-container col-sm-d-none mr-2 ">
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>P</span>
          <span>E</span>
          <span>N</span>
          <span>S</span>
          <span>A</span>
          <span>T</span>
          <span>I</span>
          <span>O</span>
          <span>N</span>
        </div>
        <div className='border m-1 row w-100 res-remove-margin'>
          <div className='border res-border-none col-md-6'>
            <h3 className='text-center'>COMPENSATION</h3>
            <div className='border res-border-none p-2'>
              <div className='d-flex  mb-4'>
                <h3>Basic</h3>
                <input type='text' className='form-control ' />
              </div>
              <div className='d-flex mb-4'>
                <h3>HRA</h3>
                <input type='text' className='form-control' />
              </div>
              <div className='d-flex mb-4'>
                <h3>Dearness Allowance</h3>
                <input type='text' className='form-control' />
              </div>
              <div className='d-flex mb-4'>
                <h3>Conveyance <br /> Allowance / Reimbursement</h3>
                <input type='text' className='form-control' />
              </div>
              <div className='d-flex mb-4'>
                <h3>Professional Journals</h3>
                <input type='text' className='form-control' />
              </div>
              <div className='d-flex mb-4'>
                <h3>Education Allowance</h3>
                <input type='text' className='form-control' />
              </div>
              <div className='d-flex mb-4'>
                <h3>Other Monthly Allowance</h3>
                <input type='text' className='form-control' />
              </div>

            </div>
            <div className='border res-border-none d-flex p-2'>
              <h3>TOTAL</h3>
              <input type='text' className='form-control ml-3' />
            </div>
          </div>
          <div className='border col-md-6'>
            <h3 className='text-center'>PREVIOUS</h3>
            <div className='border res-border-none p-2'>
              <div className='d-flex mb-4'>
                <h3>Basic</h3>
                <input type='text' className='form-control ' />
              </div>
              <div className='d-flex mb-4'>
                <h3>HRA</h3>
                <input type='text' className='form-control' />
              </div>
              <div className='d-flex mb-4'>
                <h3>Dearness Allowance</h3>
                <input type='text' className='form-control' />
              </div>
              <div className='d-flex mb-4'>
                <h3>Conveyance <br /> Allowance / Reimbursement</h3>
                <input type='text' className='form-control' />
              </div>
              <div className='d-flex mb-4'>
                <h3>Professional Journals</h3>
                <input type='text' className='form-control' />
              </div>
              <div className='d-flex mb-4'>
                <h3>Education Allowance</h3>
                <input type='text' className='form-control' />
              </div>
              <div className='d-flex mb-4'>
                <h3>Other Monthly Allowance</h3>
                <input type='text' className='form-control' />
              </div>

            </div>
            <div className='border res-border-none d-flex p-2'>
              <h3>TOTAL</h3>
              <input type='text' className='form-control ml-3' />
            </div>
          </div>
        </div>


      </div>

      {/* MISCELLANEOUS */}
      <h3 className='text-heading mb-2 mt-3'>MISCELLANEOUS </h3>
      <div className='form-container res-border-none res-remove-margin mr-3  '>
        <div className="form-left-datails pass-span-container col-sm-d-none mr-1 ">
          <span>M</span>
          <span>I</span>
          <span>S</span>
          <span>C</span>
          <span>E</span>
          <span>L</span>
          <span>L</span>
          <span>A</span>
          <span>N</span>
          <span>E</span>
          <span>O</span>
          <span>U</span>
          <span>S</span>
        </div>

        <div className=' w-100 res-remove-margin'>

          <div className='border col-md-'>
            <div className='d-flex flex-wrap  p-2'>
              <div className='res-j-c-start'>
                <div className='d-flex flex-wrap justify-content-around res-ml mb-2 '>
                  <h3>HAVE YOU APPLIED TO INFOSWAN PREVIOUSLY?</h3>
                  <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">NO <input type="checkbox" className='res-ml-2' /> </label>
                  <label className='ml-5 res-m-0 res-ml-2 ' htmlFor="applied">YES <input type="checkbox" className='res-ml-2' /> </label>
                </div>
                <h3>IF YES,</h3>
                <div className='d-flex flex-wrap justify-content-around mt-3 mb-2  '>
                  <h3 className='res-m-0' style={{ marginRight: '115px' }}>WERE YOU - CALLED FOR A TEST?</h3>
                  <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">NO <input type="checkbox" className='res-ml-2' /> </label>
                  <label className='ml-5 res-m-0 res-ml-2 ' htmlFor="applied">YES <input type="checkbox" className='res-ml-2' /> </label>
                </div>

                <div className='d-flex flex-wrap justify-content-around mb-2'>
                  <h3 className='res-m-0' style={{ marginRight: '155px' }}>SELECTED FOR INTERVIEW?</h3>
                  <div className='res-display-felx-row'>
                    <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">NO <input type="checkbox" className='res-ml-2' /> </label>
                    <label className='ml-5 res-m-0 res-ml-2 ' htmlFor="applied">YES <input type="checkbox" className='res-ml-2' /> </label>
                  </div>
                </div>

                <div className='d-flex res-display-felx-column justify-content-around mb-2 '>
                  <h3 className='res-m-0' style={{ marginRight: '235px' }}>MADE AN OFFER?</h3>
                  <div className='res-display-felx-row'>
                    <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">NO <input type="checkbox" className='res-ml-2' /> </label>
                    <label className='ml-5 res-m-0 res-ml-2 ' htmlFor="applied">YES <input type="checkbox" className='res-ml-2' /> </label>
                  </div>
                </div>
              </div>



              <div className='mt-4 res-m-0' style={{ marginLeft: '200px' }}>
                <h3>MENTION RELEVANT DATES</h3>
                <input type='date' className='form-control mt-2' />
                <input type='date' className='form-control mt-2' />
                <input type='date' className='form-control mt-2 mb-3' />
              </div>
            </div>
          </div>

          <div className='border p-3 '>
            <h3>ARE YOU EMPLOYED AS:</h3>
            <div className='d-flex mt-3 res-display-felx-column'>
              <h3 className='res-m-0' style={{ marginRight: '235px' }}>A. A DIRECTOR IN ANY OTHER COMPANY?</h3>
              <div className='res-display-felx-row'>
                <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">NO <input type="checkbox" className='res-ml-2' /> </label>
                <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">YES <input type="checkbox" className='res-ml-2' /> </label>
              </div>

            </div>


            <div className='d-flex mt-3 res-display-felx-column mb-2'>
              <h3 className='res-m-0' style={{ marginRight: '340px' }}>B. A PARTNER IN ANY FIRM?</h3>
              <div className='res-display-felx-row'>
                <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">NO <input type="checkbox" className='res-ml-2' /> </label>
                <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">YES <input type="checkbox" className='res-ml-2' /> </label>
              </div>

            </div>
            <h3 className='mb-2'>IF YES, PLEASE MENTION DETAILS OF THE SAME</h3>
            <textarea name="" id="details" className='w-100 application-page-1' rows="3"></textarea>
          </div>


          <div className='border p-3 '>
            <div className='d-flex mt-3 res-display-felx-column'>
              <h3 className='res-m-0' style={{ marginRight: '50px' }}>ARE YOU UNDER ANY LEGAL OBLIGATION TO YOUR CURRENT EMPLOYER?</h3>
              <div className='res-display-felx-row'>
                <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">NO <input type="checkbox" className='res-ml-2' /> </label>
                <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">YES <input type="checkbox" className='res-ml-2' /> </label>
              </div>

            </div>



            <h3 className='mb-3'>IF YES, PLEASE CLARIFY</h3>
            <textarea name="" id="details" className='w-100 application-page-1' rows="3"></textarea>
          </div>

          <div className='border p-3 '>
            <div className='d-flex res-display-felx-column mt-3 '>
              <h3 className='res-m-0' >Have you at any time been convicted by a court of India for any criminal offence and sentenced to imprisonment, <br/> or any criminal proceedings are
                pending against you before a court in India, or an order prohibiting your <br/>departure from India has been issued by a court,</h3>
                <div className='res-display-felx-row mt-3 d-flex'>
                <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">NO <input type="checkbox" className='res-ml-2' /> </label>
                <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">YES <input type="checkbox" className='res-ml-2' /> </label>
              </div>
              </div>
            <h3 className='mb-3 mt-3'>IF YES, PLEASRE GIVE DETAILS OF THE SAME</h3>
            <textarea name="" id="details" className='w-100 application-page-1' rows="3"></textarea>
          </div>

          <div className='border p-3 '>
            <h3 className='res-m-0' style={{ marginRight: '50px' }}>I certify that the above statements made by me are true, complete and correct. All the academic marks / percentages / CGPA are simple average for all
              subjects / semesters / years. I agree that in case the company finds at any time that the information given by me in this form is not correct, true or
              complete, the company will have the right to withdraw my letter of appointment or to terminate my appointment at any time without notice or
              compensation.</h3>

            <div className='d-flex res-display-felx-column mt-3 w-100'>
              <label>PLACE</label>
              <input type="text" className='form-control w-25 remove-w-25' />
            </div>

            <div className='d-flex justify-content-between res-display-felx-column mt-3 w-100'>
              <div className='d-flex res-display-felx-column mb-3 mt-3 w-100 '>
                <label>DATE</label>
                <input type="date" className='form-control w-25 remove-w-25' />

              </div>

              <div className='text-center res-m-0 '>
                <div className='avator-uploader'>
                  <div>
                    <label htmlFor="imageInput">
                      <div
                        style={{
                          width: '150px',
                          height: '50px',
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
                            <span className='text-center'> Choose
                              Your Signature </span>
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
                  <label className='text-center'>Signature:</label>
                </div>

              </div>
            </div>
          </div>
        </div>


      </div>

      <h3 className='text-heading mb-2 mt-3'>FOR OFFICE USE ONLY</h3>
      <div className='form-container mr-3'>
        <div className="form-left-datails  pass-span-container col-sm-d-none mr-2">
          <span>F</span>
          <span>O</span>
          <span>R</span>
          <span><br /></span>
          <span>O</span>
          <span>F</span>
          <span>F</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
          <span><br /></span>
          <span>U</span>
          <span>S</span>
          <span>E</span>
          <span><br /></span>
          <span>O</span>
          <span>N</span>
          <span>L</span>
          <span>Y</span>
        </div>

        <div className='border p-3 w-100'>
          <div className='row justify-content-between w-100'>
            <div className='col-md-6'>
              <div className='d-flex flex-wrap mb-3'>
                <h3>Date of test:</h3>
                <input type="date" className='form-control ' />
              </div>
              <div className='d-flex flex-wrap mb-3'>
                <h3>Date of Interview:</h3>
                <input type="date" className='form-control' />
              </div>
              <div className='d-flex flex-wrap mb-3'>
                <h3>Score: </h3>
                <input type="text" className='form-control ml-5 res-m-0' />
              </div>
              <div className='d-flex flex-wrap mb-3'>
                <h3>Written Test Ref. No:</h3>
                <input type="text" className='form-control' />
              </div>
              <div className='d-flex flex-wrap mb-3'>
                <h3>Panel & Employee No.:</h3>
                <input type="text" className='form-control' />

              </div>
            </div>
            <div className='col-md-6'>
              <h3>LOCATION PREFERENCE</h3>
              <input type="text" className='form-control' />
              <input type="text" className='form-control' />
              <input type="text" className='form-control' />
              <input type="text" className='form-control' />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4  mb-3'>
              <h3>Role:</h3>
              <input type="text" className='form-control res-m-0' />
            </div>
            <div className='col-md-4  mb-3'>
              <h3>Personal Band (if any):</h3>
              <input type="text" className='form-control' />
            </div>

            <div className='col-md-4  mb-3'>
              <h3>Job Band:</h3>
              <input type="text" className='form-control' />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4 mb-3'>
              <h3>Proposed Basic:</h3>
              <input type="text" className='form-control res-m-0' />
            </div>
            <div className='col-md-4 mb-3'>
              <h3>Likely Joining Date:</h3>
              <input type="date" className='form-control' />
            </div>

            <div className='col-md-4 mb-3 mt-4 d-flex res-display-felx-column'>
              <h3 className='mb-2'>Training Requirement:</h3>
              <div className='res-display-felx-row'>
                    <label className='ml-5 res-m-0 res-ml-2' htmlFor="applied">NO <input type="checkbox" className='res-ml-2' /> </label>
                    <label className='ml-5 res-m-0 res-ml-2 ' htmlFor="applied">YES <input type="checkbox" className='res-ml-2' /> </label>
                  </div>
                </div>
   
            
          </div>

          <div>
            <div className='d-flex flex-wrap mb-3'>
              <h3>Duration Of Training:</h3>
              <input type="text" className='form-control ml-5 w-25 res-m-0 remove-w-25' />
            </div>
            <h3 className='mb-3'>Reason for selection / Rejection :</h3>
            <textarea name="" id="details" className='w-100 application-page-1' rows="3"></textarea>
          </div>
        </div>

      </div>
      <button className='d-block ms-auto btn btn-primary mt-3'>SUBMIT</button>
    </div>
  )
}

export default Page4
