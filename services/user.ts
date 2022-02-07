import axios from 'axios';
import callAPI from './config';
import { PostReservationTypes, ReviewTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getUserTransaction(username: string) {
  const URL = `/user/transaction?username=${username}`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function postReservation(data: PostReservationTypes) {
  const url = `${ROOT_API}/${API_VERSION}/user/reservation`;

  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}

export async function postReview(data: ReviewTypes) {
  const url = `${ROOT_API}/${API_VERSION}/user/review`;

  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}

export async function getOrderDetail(id: string, token: string) {
  const url = `${ROOT_API}/${API_VERSION}/user/transaction/${id}`;

  return callAPI({
    url,
    method: 'GET',
    serverToken: token,
  });
}
