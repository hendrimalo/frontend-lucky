import FormRegister from '../components/organism/FormRegister';

/* eslint-disable linebreak-style */
const Register = function () {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Lucky Barbershop</h1>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="text-center">
            <h3 className="card-title">Register</h3>
            <p className="card-text">
              Belum punya akun?
              <a href="">daftar</a>
            </p>
          </div>
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default Register;
