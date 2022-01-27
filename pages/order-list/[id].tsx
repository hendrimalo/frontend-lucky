import { orderDetailTypes } from '../../services/data-types';
import { getOrderDetail } from '../../services/user';

const OrderDetail = function (props: orderDetailTypes) {
  const { orderDetail } = props;
  return (
    <h1>{orderDetail.date}</h1>
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
  const response = await getOrderDetail(id, jwtToken);
  return {
    props: {
      orderDetail: response.data,
    },
  };
}
export default OrderDetail;
