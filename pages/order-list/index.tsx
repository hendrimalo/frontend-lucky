import jwtDecode from 'jwt-decode';
import TableOrder from '../../components/organism/TableOrder';
import Navbar from '../../components/organism/Navbar';

interface OrderListTypes {
  user: {
    username: string;
  };
}

const OrderList = function (props: OrderListTypes) {
  const { user } = props;
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <TableOrder data={user.username} />
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
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const decode = jwtDecode(jwtToken);
  return {
    props: decode,
  };
}

export default OrderList;
