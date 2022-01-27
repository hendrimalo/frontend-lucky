import TableOrder from '../../components/organism/TableOrder';

const OrderList = function () {
  return (
    <TableOrder />
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

export default OrderList;
