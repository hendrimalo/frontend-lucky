import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { signUp } from '../../../services/auth';
import 'react-toastify/dist/ReactToastify.css';

const FormRegister = function () {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      username,
      email,
      phoneNumber,
      password,
    };

    if (!username || !email || !phoneNumber || !password) {
      toast.error('Please check input form register');
    } else {
      const response = await signUp(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        console.log(data);
        toast.success('Register success');
        router.push('/signin');
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
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      <div className="text-right">
        <button
          type="button"
          className="btn btn-primary text-right"
          onClick={onSubmit}
        >
          Register
        </button>
      </div>
    </>
  );
};

export default FormRegister;
