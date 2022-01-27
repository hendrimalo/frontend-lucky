import FormRegister from '../components/organism/FormRegister';

/* eslint-disable linebreak-style */
const Register = function () {
  return (
    <div className="container mt-2">
      <div className="text-center">
        <h1 className="display-4 mb-5">Lucky Barbershop</h1>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card px-4 py-3">
            <div className="card-body">
              <div className="text-center">
                <h3 className="card-title">Sign Up</h3>
              </div>
              <FormRegister />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
