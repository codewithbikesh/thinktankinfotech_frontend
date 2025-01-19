const initialState = {
  services: [],
  storeServices: [],
  loading: false,
  error: null,
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch services data
    case 'FETCH_SERVICES_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_SERVICES_SUCCESS':
      console.log('Payload:', action.payload);
      return {
        ...state,
        loading: false,
        // Ensure that the payload is in the correct format
        services: Array.isArray(action.payload.data) ? action.payload.data : [],
      };
    case 'FETCH_SERVICES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    // Create store services
    case 'CREATE_STORE_SERVICE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'CREATE_STORE_SERVICE_SUCCESS':  // Corrected action type
      return {
        ...state,
        loading: false,
        storeServices: Array.isArray(action.payload.data) ? action.payload.data : [],
      };
    case 'CREATE_STORE_SERVICE_FAILURE':  // Corrected action type
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default servicesReducer;
