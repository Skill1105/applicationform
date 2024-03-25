

const initialState = {
    personalInfo: {},
    loading: false,
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_PERSONAL_INFO_REQUEST':
        return { ...state, loading: true, error: null };
      case 'SAVE_PERSONAL_INFO_SUCCESS':
        return { ...state, loading: false, personalInfo: action.payload };
      case 'SAVE_PERSONAL_INFO_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
  