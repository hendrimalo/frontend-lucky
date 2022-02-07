import Link from 'next/link';
import FormSignin from '../components/organism/FormSignin';
import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable linebreak-style */
const Login = function () {
  return (
    <div className="container mt-2">
      <div className="text-center">
        <h1 className="display-4 mb-5 text-white">Lucky Barbershop</h1>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card px-4 py-3">
            <div className="card-body">
              <div className="text-center">
                <h3 className="card-title">Sign in</h3>
                <p className="card-text">
                  Belum punya akun?
                  <Link href="/signup">
                    <a className="text-primary"> daftar</a>
                  </Link>
                </p>
              </div>
              <FormSignin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
