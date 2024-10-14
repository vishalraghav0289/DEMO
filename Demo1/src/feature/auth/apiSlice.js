import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://api.freeapi.app/api/v1';

const apiCall = async (method, endpoint, data = null) => {
  try {
    const config = {
      method,
      url: `${API_BASE_URL}${endpoint}`,
      data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(`API call failed: ${error.message}`);
    throw error.response?.data || 'Something went wrong';
  }
};

export const getRandomUser = createAsyncThunk('api/getRandomUser', () =>
  apiCall('get', '/public/randomusers/user/random')
);

export const postData = createAsyncThunk('api/postData', (payload) =>
  apiCall('post', '/kitchen-sink/http-methods/post', payload)
);

export const putData = createAsyncThunk('api/putData', (payload) =>
  apiCall('put', '/kitchen-sink/http-methods/put', payload)
);

export const deleteData = createAsyncThunk('api/deleteData', () =>
  apiCall('delete', '/kitchen-sink/http-methods/delete')
);


const initialState = {
  user: null,
  postResponse: null,
  putResponse: null,
  deleteResponse: null,
  isLoading: false,
  error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder

      .addCase(getRandomUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRandomUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(getRandomUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(postData.fulfilled, (state, action) => {
        state.postResponse = action.payload;
      })

      .addCase(putData.fulfilled, (state, action) => {
        state.putResponse = action.payload;
      })

      .addCase(deleteData.fulfilled, (state, action) => {
        state.deleteResponse = action.payload;
      })

     
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message || 'An unexpected error occurred';
        }
      );
  },
});

export default apiSlice.reducer;
