import axios from 'axios';

const getDataOptions = {
  method: 'GET',
  url: 'https://api.freeapi.app/api/v1/public/randomusers/user/random',
  headers: { accept: 'application/json' }
};

const postDataOptions = {
  method: 'POST',
  url: 'https://api.freeapi.app/api/v1/kitchen-sink/http-methods/post',
  headers: { accept: 'application/json' }
};

const putDataOptions = {
  method: 'PUT',
  url: 'https://api.freeapi.app/api/v1/kitchen-sink/http-methods/put',
  headers: { accept: 'application/json' }
};

const deleteDataOptions = {
  method: 'DELETE',
  url: 'https://api.freeapi.app/api/v1/kitchen-sink/http-methods/delete',
  headers: { accept: 'application/json' }
};

export async function getData() {
  try {
    const { data } = await axios.request(getDataOptions);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function postData() {
  try {
    const { data } = await axios.request(postDataOptions);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function putData() {
  try {
    const { data } = await axios.request(putDataOptions);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteData() {
  try {
    const { data } = await axios.request(deleteDataOptions);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}