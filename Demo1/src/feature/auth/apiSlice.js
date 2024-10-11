import { createSlice } from '@reduxjs/toolkit';
import { getRandomUser, postData, putData, deleteData } from '../axios/auth';

const initialState = {
  user: null,
  postResponse: null,
  putResponse: null,
  deleteResponse: null,
  loading: false,
  error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRandomUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getRandomUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.postResponse = action.payload;
      })
      .addCase(putData.fulfilled, (state, action) => {
        state.putResponse = action.payload;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.deleteResponse = action.payload;
      });
  },
});

export default apiSlice.reducer;