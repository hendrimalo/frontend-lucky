import Link from 'next/link';
import FormSignin from '../components/organism/FormSignin';
import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable linebreak-style */
const Login = function () {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Lucky Barbershop</h1>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="text-center">
            <h3 className="card-title">Login</h3>
            <p className="card-text">
              Belum punya akun?
              <Link href="/signup">
                <a>daftar</a>
              </Link>
            </p>
          </div>
          <FormSignin />
        </div>
      </div>
    </div>
  );
};

export default Login;
