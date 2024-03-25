import React, { useState } from 'react'
import './ApplicationForm.css'

const Page3 = () => {

  const [rows, setRows] = useState([{
    organization: '',
    fromDate: '',
    toDate: '',
    duration: '',
    designation: '',
    responsibilities: '',
    separationReason: ''
  }]);

  const addRow = () => {
    setRows([...rows, {
      organization: '',
      fromDate: '',
      toDate: '',
      duration: '',
      designation: '',
      responsibilities: '',
      separationReason: ''
    }]);
  };

  const languages = [
    { name: 'English', foreign: false },
    { name: 'Spanish', foreign: true },
    { name: 'French', foreign: true },
    { name: 'German', foreign: true },
    { name: 'Chinese', foreign: true },
  ];

  const [languageData, setLanguageData] = useState(Array(languages.length).fill({}));
  const handleInputChange = (index, key, value) => {
    const updatedData = [...languageData];
    updatedData[index] = { ...updatedData[index], [key]: value };
    setLanguageData(updatedData);
  };

  // const handleInputChange = (e, index, fieldName) => {
  //   const updatedRows = [...rows];
  //   updatedRows[index][fieldName] = e.target.value;
  //   setRows(updatedRows);
  // };

  const handleDateChange = (e, index, key) => {
    const { value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][key] = value;
    const fromDate = new Date(updatedRows[index].fromDate);
    const toDate = new Date(updatedRows[index].toDate);
    const diffTime = Math.abs(toDate - fromDate);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    updatedRows[index].duration = diffMonths.toString();
    setRows(updatedRows);
  };

  const handleWorkExoInputChange = (e, index, key) => {
    const { value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][key] = value;
    setRows(updatedRows);
  };

  const [data, setData] = useState([
    { id: 1, manager: '', company: '', email: '', tel: '' },
    { id: 2, manager: '', company: '', email: '', tel: '' },
    { id: 3, manager: '', company: '', email: '', tel: '' },
  ]);

  const handlecomapyRefChange = (e, id, field) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, [field]: e.target.value } : item
    );
    setData(updatedData);
  };

  const [familyData, setFamilyData] = useState([
    { id: 1, name: '', relationship: '', designation: '' },
    { id: 2, name: '', relationship: '', designation: '' },
  ]);

  const handleFamilyDataChange = (e, id, field) => {
    const updatedFamilyData = familyData.map((item) =>
      item.id === id ? { ...item, [field]: e.target.value } : item
    );
    setFamilyData(updatedFamilyData);
  };

  const [emergencyContacts, setEmergencyContacts] = useState([
    { name: '', telNo: '', relationship: '' },
    { name: '', telNo: '', relationship: '' },
    { name: '', telNo: '', relationship: '' },
  ]);

  const handleemergencyContactsChange = (index, key, value) => {
    const updatedContacts = [...emergencyContacts];
    updatedContacts[index][key] = value;
    setEmergencyContacts(updatedContacts);
  };

  return (
    <div className='border p-2 m-2 res-remove-margin '>
      <h3 className='text-heading  mt-3'>LANGUAGES</h3>
      <div className="form-container border p-3 m-3 res-remove-margin">
        <div className="form-left-datails pass-span-container mr-2 col-sm-d-none">
          <span>L</span>
          <span>A</span>
          <span>N</span>
          <span>G</span>
          <span>U</span>
          <span>A</span>
          <span>G</span>
          <span>E</span>
          <span>S</span>
        </div>
        <div className="form-fill res-border-none res-font-size" style={{ overflowX: 'auto' }}>
          <div className='border d-flex'>
            <div className='border d-flex flex-wrap w-50 p-2'>
              <h3>MOTHER TONGUE</h3>
              <input type="text" className='form-control w-50' />
            </div>
            <h3 className='text-center w-50 mt-3'>PROFICIENCY</h3>
          </div>
          <div className='d-flex justify-content-around text-center'>
            <h3>LANGUAGE (please highlight foreign languages)</h3>
            <h3>CAN <br />UNDERSTAND</h3>
            <h3>CAN <br />SPEAK</h3>
            <h3>CAN <br />READ</h3>
            <h3>CAN <br />WRITE</h3>
          </div>

          {languages.map((language, index) => (
            <div key={index} className='d-flex justify-content-around p-2'>
              <input
                type="text"
                className='form-control w-25'
                value={languageData[index]?.language || ''}
                onChange={(e) => handleInputChange(index, 'language', e.target.value)}
              />
              <td><input type="checkbox" className='mt-3 ml-5' checked={languageData[index]?.understand} onChange={(e) => handleInputChange(index, 'understand', e.target.checked)} /></td>
              <td><input type="checkbox" className='mt-3 ml-5' checked={languageData[index]?.speak} onChange={(e) => handleInputChange(index, 'speak', e.target.checked)} /></td>
              <td><input type="checkbox" className='mt-3' checked={languageData[index]?.read} onChange={(e) => handleInputChange(index, 'read', e.target.checked)} /></td>
              <td><input type="checkbox" className='mt-3' checked={languageData[index]?.write} onChange={(e) => handleInputChange(index, 'write', e.target.checked)} /></td>
            </div>
          ))}
        </div>

      </div>

      {/* WORK EXPERIENCE */}

      <h3 className='text-heading mt-3 mb-2'>WORK EXPERIENCE</h3>
      <div className='m-3'>
        <div className="form-fill border p-2  res-remove-margin">
          <div className='d-flex justify-contact-between'>
            <div className=''>
              <p className="fw-bold">PLEASE WRITE ‘NA’ IF NOT APPLICABLE.</p>
              <p className='font-sm'>Specify clearly in case of part time/ contract work experience</p>
            </div>
            <button onClick={addRow} className='d-block ms-auto'>Add</button>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className='family-particulars' >
              <thead>
                <tr>
                  <th >ORGANIZATION</th>
                  <tr >
                    <th className='border w-25' colspan="3">PERIOD(MM/YYYY)</th>
                  </tr>
                  <tr className='d-flex form-control-none'>
                    <th colspan="1" className=' w-100  ' style={{ maxWidth: '163px' }} >FROM</th>
                    <th colspan="1" className=' w-100 ' style={{ maxWidth: '163px' }}>TO</th>
                    <th colspan="1" className=' w-100 ' style={{ maxWidp: '163px' }}>DURATION <br />
                      (in months)</th>
                  </tr>
                  <th>DESIGNATION, CTC</th>
                  <th>MAJOR RESPONSIBILITIES</th>
                  <th>REASON FOR SEPARATION</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td ><input type="text" className='form-control' value={row.organization} onChange={(e) => handleWorkExoInputChange(e, index, 'organization')} /></td>
                    <tr className='d-flex '>
                      <td className='form-control max-width'   ><input className=' max-width' style={{ outline: 'none', border: 'none', borderRadius: 'none' }} value={row.fromDate} type="date" onChange={(e) => handleDateChange(e, index, 'fromDate')} />
                      </td>
                      <td className='form-control max-width'><input className=' max-width' style={{ outline: 'none', border: 'none', borderRadius: 'none' }} value={row.toDate} type="date" onChange={(e) => handleDateChange(e, index, 'toDate')} />
                      </td>
                      <td className='form-control max-width'> <input className=' max-width' style={{ outline: 'none', border: 'none', borderRadius: 'none' }} value={row.duration} type="text" readOnly /></td>

                    </tr>
                    <td><input type="text" value={row.designation} className='form-control' onChange={(e) => handleWorkExoInputChange(e, index, 'designation')} /></td>
                    <td><input type="text" value={row.responsibilities} className='form-control' onChange={(e) => handleWorkExoInputChange(e, index, 'responsibilities')} /></td>
                    <td><input type="text" value={row.separationReason} className='form-control' onChange={(e) => handleWorkExoInputChange(e, index, 'separationReason')} /></td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div>
      </div>

      <div>
        <div className="form-container border p-3 m-3 res-remove-margin">
          <div className="form-left-datails pass-span-container col-sm-d-none mr-2">
            <span>T</span>
            <span>E</span>
            <span>C</span>
            <span>H</span>
            <span>N</span>
            <span>I</span>
            <span>C</span>
            <span>A</span>
            <span>L</span>
            <br />
            <span>S</span>
            <span>K</span>
            <span>I</span>
            <span>L</span>
            <span>L</span>
            <span>S</span>
          </div>
          <div className="p-3 w-100 res-remove-margin">
            <div className="border p-3 ">
              <p>HARDWARE PLATFORMS WORKED ON: </p>
              <textarea className="form-control border"></textarea>
            </div>
            <div className="border p-3">
              <p>OPERATING SYSTEMS / DATABASES USED </p>
              <textarea className="form-control border"></textarea>
            </div>
            <div className="border p-3">
              <p>LANGUAGES & TOOLS FAMILIAR WITH: </p>
              <textarea className="form-control border"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="form-container  border p-3 m-3 res-remove-margin">
        <div className="form-left-datails pass-span-container col-sm-d-none mr-2">
          <span>R</span>
          <span>E</span>
          <span>F</span>
          <span>E</span>
          <span>R</span>
          <span>E</span>
          <span>N</span>
          <span>C</span>
          <span>E</span>
        </div>
        <div className="form-fill res-border-none p-3">
          <p className='fw-bold'>LIST THREE PROFESSIONAL REFERENCES (out of which one should be your latest company reporting manager)</p>
          <div style={{ overflowX: 'auto' }}>
            <table className="family-particulars">
              <thead>
                <tr>
                  <td>S. NO.</td>
                  <td>REPORTING MANAGER NAME & ADDRESS</td>
                  <td>COMPANY NAME & DESIGNATION</td>
                  <td>E-MAIL</td>
                  <td>TEL. No.</td>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>
                      <input
                        type="text"
                        className="form-control w-100-force"
                        value={row.manager}
                        onChange={(e) => handlecomapyRefChange(e, row.id, 'manager')}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control w-100-force"
                        value={row.company}
                        onChange={(e) => handlecomapyRefChange(e, row.id, 'company')}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control w-100-force"
                        value={row.email}
                        onChange={(e) => handlecomapyRefChange(e, row.id, 'email')}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control w-100-force"
                        value={row.tel}
                        onChange={(e) => handlecomapyRefChange(e, row.id, 'tel')}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-wrap  border p-3" >
            <p className='me-5 res-m-0'>DO YOU KNOW ANYONE WORKING AT INFOSWAN PRESENTLY?</p>
            <p>YES</p><input type="checkbox" className='me-5' />
            <p>NO</p><input type="checkbox" />
            <p className='ms-5 res-m-0'>IF YES, PLEASE LIST THEM BELOW</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
      <table className="family-particulars">
        <thead>
          <tr>
            <td>NAME</td>
            <td>RELATIONSHIP</td>
            <td>DESIGNATION</td>
          </tr>
        </thead>
        <tbody>
          {familyData.map((member) => (
            <tr key={member.id}>
              <td>
                <input
                  type="text"
                  className="form-control w-100-force"
                  value={member.name}
                  onChange={(e) => handleFamilyDataChange(e, member.id, 'name')}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control w-100-force"
                  value={member.relationship}
                  onChange={(e) => handleFamilyDataChange(e, member.id, 'relationship')}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control w-100-force"
                  value={member.designation}
                  onChange={(e) => handleFamilyDataChange(e, member.id, 'designation')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          <div className="d-flex border p-3 res-p-0" >
            <p className='me-5'>CONTACT PERSON IN CASE OF EMERGENCY</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
      <table className='family-particulars'>
        <thead>
          <tr>
            <td>NAME & ADDRESS</td>
            <td>TEL. NO. (EVEN P. P.)</td>
            <td>RELATIONSHIP</td>
          </tr>
        </thead>
        <tbody>
          {emergencyContacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  className='form-control w-100-force'
                  value={contact.name}
                  onChange={(e) => handleemergencyContactsChange(index, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className='form-control w-100-force'
                  value={contact.telNo}
                  onChange={(e) => handleemergencyContactsChange(index, 'telNo', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className='form-control w-100-force'
                  value={contact.relationship}
                  onChange={(e) => handleemergencyContactsChange(index, 'relationship', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
      </div>
      <button className='d-flex ms-auto btn btn-primary mt-2' >Save</button>
    </div>
  )
}

export default Page3