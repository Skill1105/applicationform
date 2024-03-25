
// import React, { useState, useEffect } from 'react';
// import Page1 from './Page-1';
// import Page2 from './Page-2';
// import Page3 from './Page-3';
// import Page4 from './Page-4';
// import { useDispatch, useSelector } from 'react-redux';

// const ApplicationForm = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [formData, setFormData] = useState({});
//   const totalPages = 4;
//   const dispatch = useDispatch();
//   const loading = useSelector(state => state.loading);
//   const success = useSelector(state => state.success);
//   const error = useSelector(state => state.error);
//   const [savedFormData, setSavedFormData] = useState();

//   useEffect(() => {
//     if (success) {
//       setTimeout(() => {
//         dispatch({ type: 'RESET_SUCCESS' });
//       }, 3000);
//     }
//   }, [success, dispatch]);

//   const goToPage = page => {
//     setCurrentPage(page);
//   };

//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const saveForm = () => {
//     setSavedFormData(formData);
//     setCurrentPage(totalPages);
//   };

//   const renderFormPage = () => {
//     switch (currentPage) {
//       case 1:
//         return <Page1 formData={formData} setFormData={setFormData} nextPage={nextPage} />;
//       case 2:
//         return <Page2 formData={formData} setFormData={setFormData} nextPage={nextPage} />;
//       case 3:
//         return <Page3 formData={formData} setFormData={setFormData} nextPage={nextPage} />;
//       case 4:
//         return <Page4 savedFormData={savedFormData} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       {renderFormPage()}

//       <div style={{ marginTop: '10px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', bottom: '0px' }}>
       
//           <>
//             <button className='btn btn-secondary mr-2' onClick={prevPage} type='button' disabled={currentPage === 1}>Previous</button>
//             <p>{currentPage} of {totalPages}</p>
//             <button className='btn btn-secondary ml-2' type='button' onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
//           </>

//       </div>
//     </div>
//   );
// };

// export default ApplicationForm;

import React, { useState, useEffect } from 'react';
import Page1 from './Page-1';
import Page2 from './Page-2';
import Page3 from './Page-3';
import Page4 from './Page-4';
import { useDispatch, useSelector } from 'react-redux';

const ApplicationForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState(() => {
    const storedFormData = localStorage.getItem('formData');
    return storedFormData ? JSON.parse(storedFormData) : {};
  });
  
  const totalPages = 4;
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const success = useSelector(state => state.success);
  const error = useSelector(state => state.error);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (success) {
      dispatch({ type: 'RESET_SUCCESS' });
    }
  }, [success, dispatch]);

  const savePageData = (pageData) => {
    localStorage.setItem(`formDataPage${currentPage}`, JSON.stringify(pageData));
  };

  const goToPage = page => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const saveForm = () => {
    setCurrentPage(totalPages);
  };

  const renderFormPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 formData={formData} setFormData={setFormData} savePageData={savePageData} nextPage={nextPage} />;
      case 2:
        return <Page2 formData={formData} setFormData={setFormData} savePageData={savePageData} nextPage={nextPage} />;
      case 3:
        return <Page3 formData={formData} setFormData={setFormData} savePageData={savePageData} nextPage={nextPage} />;
      case 4:
        return <Page4 formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderFormPage()}

      <div style={{ marginTop: '10px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', bottom: '0px' }}>
        <>
          <button className='btn btn-secondary mr-2' onClick={prevPage} type='button' disabled={currentPage === 1}>Previous</button>
          <p>{currentPage} of {totalPages}</p>
          {currentPage !== totalPages && <button className='btn btn-secondary ml-2' type='button' onClick={nextPage}>Next</button>}
          {currentPage === totalPages && <button className='btn btn-primary ml-2' type='button' onClick={saveForm}>Submit</button>}
        </>
      </div>
    </div>
  );
};

export default ApplicationForm;

