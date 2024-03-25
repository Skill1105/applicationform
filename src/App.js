import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './App.css';
import ApplicationContainer from './ApplicationFrom';
import history from './utils/history';
import store from './Redux/Store'
function App() {
  return (
    ReactDOM.render(
      <Provider store={store}>
        <Router>
            <ApplicationContainer history={history} />
        </Router>
      </Provider>,
      document.getElementById('root')
    )
  
  );
}

export default App;