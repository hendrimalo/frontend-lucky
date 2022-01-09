import callAPI from './config';
import { LoginTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function signIn(data: LoginTypes) {
  const url = `${ROOT_API}/${API_VERSION}/signin`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

export async function signUp(data: LoginTypes) {
  const url = `${ROOT_API}/${API_VERSION}/signup`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}
