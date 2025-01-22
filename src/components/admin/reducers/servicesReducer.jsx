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
      return {
        ...state,
        loading: false,
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
    case 'CREATE_STORE_SERVICE_SUCCESS':
      return {
        ...state,
        loading: false,
        storeServices: Array.isArray(action.payload.data) ? action.payload.data : [],
        token: action.payload.token,
      };
    case 'CREATE_STORE_SERVICE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    // Update service
    case 'UPDATE_SERVICE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'UPDATE_SERVICE_SUCCESS':
      return {
        ...state,
        loading: false,
        services: state.services.map((service) =>
          service.id === action.payload.id ? { ...service, ...action.payload } : service
        ),
        error: null,
      };
    case 'UPDATE_SERVICE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // Edit service
    case 'EDIT_SERVICE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'EDIT_SERVICE_SUCCESS':
      return {
        ...state,
        loading: false,
        services: state.services.map((service) =>
          service.id === action.payload.id ? { ...service, ...action.payload } : service
        ),
        error: null,
      };
    case 'EDIT_SERVICE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      
    // Delete service
    // Delete service
    case 'DELETE_SERVICE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_SERVICE_SUCCESS':
      const updatedServices = state.services.filter(
        (service) => service.id !== action.payload.deletedServiceId
      );
      return {
        ...state,
        loading: false,
        services: updatedServices,
        token: action.payload.token,
        error: null,
      };
    case 'DELETE_SERVICE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default servicesReducer;
