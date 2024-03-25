import axios from 'axios';
import { useEffect } from 'react';

export const savePersonalInfo = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('/applicationform', formData);
    console.log('Response from server:', response.data);
    // Dispatch success action if needed
  } catch (error) {
    console.error('Error saving personal information:', error);
    // Dispatch error action if needed
  }
};
