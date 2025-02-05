import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./axiosConfig";

// Fetch Services
export const fetchServices = createAsyncThunk("services/fetch", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("auth_token");
    if (!token) throw new Error("No token found in localStorage!");
    const response = await axios.get("/services", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});

// Edit Service
export const editService = createAsyncThunk("services/edit", async (serviceId, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("auth_token");
    if (!token) throw new Error("Token not found. Please log in again.");
    const response = await axios.get(`/services/${serviceId}/edit`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});

// Update Service
export const updateService = createAsyncThunk("services/update", async ({ serviceId, updatedData }, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("auth_token");
    if (!token) throw new Error("Token not found. Please log in again.");
    const response = await axios.post(`/services/${serviceId}/update/`, updatedData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});

// Create Store Service
export const createStoreService = createAsyncThunk("services/create", async (serviceData, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("auth_token");
    if (!token) throw new Error("Token not found. Please log in again.");
    const response = await axios.post("/services/store", serviceData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});

// Delete Service
export const deleteService = createAsyncThunk("services/delete", async (serviceId, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("auth_token");
    if (!token) throw new Error("Token not found. Please log in again.");
    await axios.delete(`/services/${serviceId}/delete/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return serviceId;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});