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
      // console.log('Payload:', action.payload);
      return {
        ...state,
        loading: false,
        // Ensure that the payload is in the correct format
        services: Array.isArray(action.payload.data) ? action.payload.data : [],
        token: action.payload.token,
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
        token: action.payload.token,
      };
    case 'CREATE_STORE_SERVICE_FAILURE':  // Corrected action type
      return {
        ...state,
        loading: false,
        error: action.error,
      };


     // Delete service
     // Delete service
case 'DELETE_SERVICE_REQUEST':
  return {
    ...state,
    loading: true,
  };

case 'DELETE_SERVICE_SUCCESS':
  // Filter out the deleted service from the state
  const updatedServices = state.services.filter(service => service.id !== action.payload.deletedServiceId);
  return {
    ...state,
    loading: false,
    services: updatedServices,
    token: action.payload.token,  // If token is updated after deletion, keep it.
    error: null,  // Reset any previous errors
  };

case 'DELETE_SERVICE_FAILURE':
  return {
    ...state,
    loading: false,
    error: action.payload.error,  // Assuming the error is passed as payload
  };


    default:
      return state;
  }
};

export default servicesReducer;
