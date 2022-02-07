import axios from 'axios';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getLandingpage() {
  const URL = 'landingpage';

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getReservation() {
  const URL = 'reservation';

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getService() {
  const URL = 'service';

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}
