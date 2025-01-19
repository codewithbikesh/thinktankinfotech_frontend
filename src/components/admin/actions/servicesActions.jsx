import axios from 'axios';

// Function to fetch services
export const fetchServices = () => async (dispatch) => {
  dispatch({ type: 'FETCH_SERVICES_REQUEST' });

  // Get the token from localStorage (or wherever you store it)
  const token = localStorage.getItem('auth_token');

  try {
    const response = await axios.get('https://api.thinktankinfotech.com/api/services', {
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

export const createStoreService = (serviceData) => async (dispatch) => {
  // Dispatch the request action to indicate the API call is starting
  dispatch({ type: "CREATE_STORE_SERVICE_REQUEST" });

  try {
    // Get the token from localStorage (or wherever it's stored)
    const token = localStorage.getItem("auth_token"); // Use 'auth_token' or the appropriate key
    console.log("Token:", token); // Ensure the token is present

    // If the token exists, include it in the request headers
    const response = await axios.post(
      "https://api.thinktankinfotech.com/api/services/store", // Replace with your actual API URL
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

    // Log the error for debugging purposes
    console.error("Error creating service:", error);
  }
};