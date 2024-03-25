import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ApplicationForm from './ApplicationForm/MainForm'


const ApplicationContainer = (props) => {
  // const { history } = props;
  return (
    <div>
      <Routes>
        <Route path='/' element={<ApplicationForm />}></Route>
      </Routes>
    </div>
  )
}
export default ApplicationContainer;