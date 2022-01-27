import FormReservation from '../components/organism/FormReservation';
import Navbar from '../components/organism/Navbar';
import TableReservation from '../components/organism/TableReservation';

/* eslint-disable linebreak-style */
const Reservation = function () {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <TableReservation />
          </div>
          <div className="col-sm-4">
            <FormReservation />
          </div>
        </div>
      </div>
    </>
  );
};

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    }
  }
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default Reservation;
