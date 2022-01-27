import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import { format } from 'date-fns';
import jwtDecode from 'jwt-decode';
import { postReservation } from '../../../services/user';
import { JWTTypes, UserTypes } from '../../../services/data-types';

const FormReservation = function () {
  const router = useRouter();

  const [user, setUser] = useState({
    username: '',
  });
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.user;

      setUser(userFromPayload);
      setUsername(userFromPayload.username);
      setPhoneNumber(userFromPayload.phoneNumber);
    }
  }, []);

  const addDays = function (date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const onSubmit = async () => {
    const data = {
      username,
      userStatus: 'Member',
      phoneNumber,
      date: format(new Date(date), 'yyyy-MM-dd'),
      time: format(new Date(time), 'hh:mm a'),
    };

    if (!phoneNumber || !date || !time) {
      toast.error('Please check input form reservation');
    } else {
      const response = await postReservation(data);
      console.log(response);
      if (response.error) {
        toast.error(JSON.stringify(response.message));
      } else {
        router.reload(window.location.pathname);
        toast.success('Submit reservation successs');
      }
    }
  };

  return (
    <div className="card container">
      <div className="card-body">
        <h5 className="card-title text-center">Form Reservation</h5>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="PhoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group col-sm-6">
            <label htmlFor="date">Date</label>
            <DatePicker
              className="form-control"
              placeholderText="Select Date"
              selected={date}
              onChange={(event) => setDate(event)}
              maxDate={addDays(new Date(), 3)}
              minDate={new Date()}
              dateFormat="yyyy-MM-dd"
              required
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="time">Time</label>
            <DatePicker
              className="form-control"
              placeholderText="Select Time"
              selected={time}
              onChange={(event) => setTime(event)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={20}
              timeCaption="Time"
              dateFormat="h:mm a"
              minTime={setHours(setMinutes(new Date(), 0), 10)}
              maxTime={setHours(setMinutes(new Date(), 30), 19)}
              required
            />
          </div>
          <div className="card-text text-right">
            <button
              type="button"
              className="btn btn-primary text-right"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormReservation;
