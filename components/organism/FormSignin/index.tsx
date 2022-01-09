import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { signIn } from '../../../services/auth';

const FormSignin = function () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      username,
      password,
    };

    if (!username || !password) {
      toast.error('Please check input form login');
    } else {
      const response = await signIn(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success('Login success');
        const { token } = response.data;
        const token64 = btoa(token);
        Cookies.set('token', token64, { expires: 2 });
        router.push('/');
      }
    }
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="text-right">
        <button
          type="button"
          className="btn btn-primary text-right"
          onClick={onSubmit}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default FormSignin;
