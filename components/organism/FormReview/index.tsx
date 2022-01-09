import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ReactStars from 'react-rating-stars-component';
import 'react-toastify/dist/ReactToastify.css';
import { postReview } from '../../../services/user';

const FormReview = function () {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      name,
      review,
      rating,
    };

    if (!name || !review || !rating) {
      toast.error('Please check input form login');
    } else {
      const response = await postReview(data);
      if (response.error) {
        toast.error(JSON.stringify(response.message));
      } else {
        toast.success('Submit review success');
        router.push('/');
      }
    }
  };
  return (
    <>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type=""
          className="form-control"
          placeholder="Username"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Review</label>
        <input
          type="text"
          className="form-control"
          placeholder="Review"
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <ReactStars
          type="number"
          count={5}
          size={24}
          emptyIcon={<i className="far fa-star" />}
          fullIcon={<i className="fa fa-star" />}
          activeColor="#ffd700"
          value={rating}
          onChange={(event) => setRating(event)}
        />
        ,
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
    </>
  );
};

export default FormReview;
