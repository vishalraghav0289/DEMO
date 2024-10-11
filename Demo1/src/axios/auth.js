import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.freeapi.app/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { accept: 'application/json' }
});

export const getRandomUser = createAsyncThunk(
  'users/getRandomUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/public/randomusers/user/random');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const postData = createAsyncThunk(
  'data/postData',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post('/kitchen-sink/http-methods/post', payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const putData = createAsyncThunk(
  'data/putData',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.put('/kitchen-sink/http-methods/put', payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteData = createAsyncThunk(
  'data/deleteData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.delete('/kitchen-sink/http-methods/delete');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);