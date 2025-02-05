import { createSlice } from '@reduxjs/toolkit';
import { fetchServices, createStoreService, updateService, deleteService } from '../actions/servicesActions';

const initialState = {
  services: [],
  storeServices: [],
  loading: false,
  error: null,
};

// Slice

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = Array.isArray(action.payload.data) ? action.payload.data : [];
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(createStoreService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStoreService.fulfilled, (state, action) => {
        state.loading = false;
        state.storeServices.push(action.payload);
      })
      .addCase(createStoreService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(updateService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateService.fulfilled, (state, action) => {
        state.loading = false;
        state.services = state.services.map(service => 
          service.id === action.payload.id ? action.payload : service
        );
      })
      .addCase(updateService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(deleteService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteService.fulfilled, (state, action) => {
        state.loading = false;
        state.services = state.services.filter(service => service.id !== action.payload);
      })
      .addCase(deleteService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default servicesSlice.reducer;