import FormReservation from '../components/organism/FormReservation';
import Navbar from '../components/organism/Navbar';
import TableBook from '../components/organism/TableBook';

/* eslint-disable linebreak-style */
const Book = function () {
  return (
    <>
      <Navbar />
      <TableBook />
      <br />
      <br />
      <br />
      <FormReservation />
    </>
  );
};

export default Book;
