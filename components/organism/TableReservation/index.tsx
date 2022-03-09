import { useCallback, useState, useEffect } from 'react';
import { ReservationTypes } from '../../../services/data-types';
import { getReservation } from '../../../services/public';

const TableReservation = function () {
  const [dataReservation, setDataReservation] = useState([]);

  const getDataReservation = useCallback(async () => {
    const data = await getReservation();

    setDataReservation(data);
  }, [getReservation]);

  useEffect(() => {
    getDataReservation();
  }, []);

  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Username</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody>
        {dataReservation.map((reservation: ReservationTypes, index) => (
          <tr key={reservation._id}>
            <th scope="row">{index + 1}</th>
            <td>{reservation.username}</td>
            <td>{reservation.date}</td>
            <td>{reservation.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableReservation;
