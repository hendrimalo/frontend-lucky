import jwtDecode from 'jwt-decode';
import FormReview from '../../components/organism/FormReview';
import Navbar from '../../components/organism/Navbar';
import { getOrderDetail } from '../../services/user';

interface OrderDetailTypes {
  dataOrder: {
    _id: string;
    date: string;
    time: string;
    transactionId: {
      date: string;
      time: string;
      member: string;
      payment: string;
      product: string;
    }
    reviewId: {
      review: string;
      rating: string;
    }
  }
  user: {
    user: {
      username: string;
    }
  }
}

const OrderDetail = function (props: OrderDetailTypes) {
  const { dataOrder, user } = props;
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h4 className="text-weight-bold">Reservation</h4>
          </div>
          <div className="card-body">
            <p>
              date time Reservation:
              {dataOrder.date}
              {' '}
              {dataOrder.time}
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h4 className="text-weight-bold">Transaction</h4>
          </div>
          <div className="card-body">
            <p>
              date time:
              {dataOrder.transactionId.date}
              {' '}
              {dataOrder.transactionId.time}
            </p>
            <p>
              member:
              {dataOrder.transactionId.member}
            </p>
            <p>
              payment:
              {dataOrder.transactionId.payment}
            </p>
            <p>
              product:
              {dataOrder.transactionId.product}
            </p>
            <p>
              time:
              {dataOrder.transactionId.time}
            </p>
          </div>
        </div>
      </div>
      <br />
      {dataOrder.reviewId ? (
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h4 className="text-weight-bold">Review</h4>
            </div>
            <div className="card-body">
              <p>
                review:
                {dataOrder.reviewId.review}
              </p>
              <p>
                rating:
                {dataOrder.reviewId.rating}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <FormReview reservationId={dataOrder._id} username={user.user.username} />
      )}
    </>

  );
};

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    }
  },
  params: {
    id: string;
  }
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { id } = params;
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const decode = jwtDecode(jwtToken);
  const response = await getOrderDetail(id, jwtToken);
  return {
    props: {
      dataOrder: response.data,
      // output decode = object user
      user: decode,
    },
  };
}
export default OrderDetail;
