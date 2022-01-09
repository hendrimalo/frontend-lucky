import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import { format } from 'date-fns';
import { postReservation } from '../../../services/user';

const FormReservation = function () {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const router = useRouter();

  const addDays = function (date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const onSubmit = async () => {
    const data = {
      username: 'test front hc',
      phoneNumber,
      date: format(new Date(date), 'yyyy-MM-dd'),
      time: format(new Date(time), 'h:mm a'),
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
    <div className="container-fluid">
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          className="form-control"
          placeholder="PhoneNumber"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      <div className="form-group">
        <DatePicker
          selected={date}
          onChange={(event) => setDate(event)}
          maxDate={addDays(new Date(), 3)}
          minDate={new Date()}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div className="form-group">
        <DatePicker
          selected={time}
          onChange={(event) => setTime(event)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={25}
          timeCaption="Time"
          dateFormat="h:mm a"
          minTime={setHours(setMinutes(new Date(), 0), 10)}
          maxTime={setHours(setMinutes(new Date(), 40), 19)}
        />
      </div>
      <div className="text-right">
        <button
          type="button"
          className="btn btn-primary text-right"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormReservation;
