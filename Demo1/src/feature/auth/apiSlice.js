import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.freeapi.app/api/v1';

export const getRandomUser = createAsyncThunk(
  'api/getRandomUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/public/randomusers/user/random`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

export const postData = createAsyncThunk(
  'api/postData',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/kitchen-sink/http-methods/post`, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

export const putData = createAsyncThunk(
  'api/putData',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${BASE_URL}/kitchen-sink/http-methods/put`, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

export const deleteData = createAsyncThunk(
  'api/deleteData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/kitchen-sink/http-methods/delete`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    user: null,
    postResponse: null,
    putResponse: null,
    deleteResponse: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRandomUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getRandomUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.postResponse = action.payload;
      })
      .addCase(postData.rejected, (state, action) => {
        state.error = action.payload || 'An error occurred';
      })
      .addCase(putData.fulfilled, (state, action) => {
        state.putResponse = action.payload;
      })
      .addCase(putData.rejected, (state, action) => {
        state.error = action.payload || 'An error occurred';
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.deleteResponse = action.payload;
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.error = action.payload || 'An error occurred';
      });
  },
});

export default apiSlice.reducer;