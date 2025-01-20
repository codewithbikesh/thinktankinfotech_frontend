// Login and Logout Actions
import axios from './axiosConfig'; // Use the centralized Axios configuration

// Function to fetch services
export const fetchServices = () => async (dispatch) => {
  dispatch({ type: 'FETCH_SERVICES_REQUEST' });

  // Get the token from localStorage (or wherever you store it)
  const token = localStorage.getItem('auth_token');

  if (!token) {
    console.error('No token found in localStorage!');
  }

  try {
    const response = await axios.get('/services', {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to headers
      },
    });

    dispatch({
      type: 'FETCH_SERVICES_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_SERVICES_FAILURE',
      error: error.message,
    });
  }
};





// Function to create store service
// Function to create store service
export const createStoreService = (serviceData) => async (dispatch) => {
  // Dispatch the request action to indicate the API call is starting
  dispatch({ type: "CREATE_STORE_SERVICE_REQUEST" });

  try {
    // Get the token from localStorage (or wherever it's stored)
    const token = localStorage.getItem("auth_token"); // Use 'auth_token' or the appropriate key

    // Check if token is missing
    if (!token) {
      console.error("Token not found in localStorage. Please log in again.");
      dispatch({
        type: "CREATE_STORE_SERVICE_FAILURE",
        payload: "Token not found. Please log in again.",
      });
      return;
    }

    // Make the API request to create the service
    const response = await axios.post(
      "/services/store", // Replace with your actual API URL
      serviceData,
      {
        headers: {
          "Content-Type": "application/json", // Ensure correct content type
          Authorization: `Bearer ${token}`, // Add token to headers for authentication
        },
      }
    );

    // Dispatch the success action with the response data as the payload
    dispatch({
      type: "CREATE_STORE_SERVICE_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    // Dispatch the failure action with the error message
    dispatch({
      type: "CREATE_STORE_SERVICE_FAILURE",
      payload: error.response?.data?.message || error.message, // Better error handling
    });
  }
};



// Function to delete a service
// Function to delete a service
export const deleteService = (serviceId) => async (dispatch) => {
  // Dispatch the request action to indicate the API call is starting
  dispatch({ type: "DELETE_SERVICE_REQUEST" });

  try {
    // Get the token from localStorage (or wherever it's stored)
    const token = localStorage.getItem("auth_token"); // Use 'auth_token' or the appropriate key

    // Check if token is missing
    if (!token) {
      console.error("Token not found in localStorage. Please log in again.");
      dispatch({
        type: "DELETE_SERVICE_FAILURE",
        payload: "Token not found. Please log in again.",
      });
      return;
    }

    // Make the API request to delete the service
    const response = await axios.delete(
      `/services/${serviceId}/delete/`, // Fixed string interpolation for serviceId
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add token to headers for authentication
        },
      }
    );

    // Assuming your API returns a success message or status upon deletion
    const responseData = response.data;

    // Dispatch the success action with the response data as the payload
    dispatch({
      type: "DELETE_SERVICE_SUCCESS",
      payload: {
        deletedServiceId: serviceId, // Pass serviceId to the reducer to filter out the deleted service
        token: responseData.token,  // If your response contains a new token, update it
      },
    });
  } catch (error) {
    // Dispatch the failure action with the error message
    dispatch({
      type: "DELETE_SERVICE_FAILURE",
      payload: error.response?.data?.message || error.message, // Better error handling
    });
  }
};
