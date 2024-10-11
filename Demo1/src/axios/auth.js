import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axios = require('axios').default;

export const getData = {
  method: 'GET',
  url: 'https://api.freeapi.app/api/v1/public/randomusers/user/random',
  headers: {accept: 'application/json'}
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}

const axios = require('axios').default;

export const Postdata = {
  method: 'POST',
  url: 'https://api.freeapi.app/api/v1/kitchen-sink/http-methods/post',
  headers: {accept: 'application/json'}
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}

const axios = require('axios').default;

export const putData = {
  method: 'PUT',
  url: 'https://api.freeapi.app/api/v1/kitchen-sink/http-methods/put',
  headers: {accept: 'application/json'}
};
try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}

const axios = require('axios').default;

export const options = {
  method: 'DELETE',
  url: 'https://api.freeapi.app/api/v1/kitchen-sink/http-methods/delete',
  headers: {accept: 'application/json'}
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}

