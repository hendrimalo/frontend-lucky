import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Rating } from 'react-simple-star-rating';
import 'react-toastify/dist/ReactToastify.css';
import { postReview } from '../../../services/user';

interface FormReviewProps {
  reservationId: string;
  username: string
}

const FormReview = function (props: FormReviewProps) {
  const { reservationId, username } = props;

  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      reservationId,
      username,
      review,
      rating: rating / 20,
    };

    if (!review || !rating) {
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
    <div className="container">
      <div className="form-group">
        <label htmlFor="password">Review</label>
        <input
          type="text"
          className="form-control"
          placeholder="Review"
          value={review}
          onChange={(event) => setReview(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <Rating
          ratingValue={rating}
          onClick={(event) => setRating(event)}
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
    </div>
  );
};

export default FormReview;
