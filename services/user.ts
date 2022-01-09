// http api = localhost:3000/api/v1/user/{endpoint}
import callAPI from './config';
import { ReservationTypes, ReviewTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function postReservation(data: ReservationTypes) {
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
