import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { orderTypes } from '../../../services/data-types';
import { getUserTransaction } from '../../../services/user';

interface TableOrderTypes {
  data: string;
}
const TableOrder = function (props: TableOrderTypes) {
  const { data } = props;
  const [dataOrder, setDataOrder] = useState([]);

  const getDataOrder = useCallback(async () => {
    const dataPayload = await getUserTransaction(data);

    setDataOrder(dataPayload);
  }, [getUserTransaction]);

  useEffect(() => {
    getDataOrder();
  }, []);

  return (
    <div className="container">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Date</th>
            <th scope="col">Product</th>
            <th scope="col">Payment</th>
            <th scope="col">Total</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataOrder.map((order: orderTypes) => (
            <tr key={order._id}>
              <th scope="row">1</th>
              <td>{order.transactionId.date ?? '-'}</td>
              <td>{order.transactionId.product ?? '-'}</td>
              <td>{order.transactionId.payment ?? '-'}</td>
              <td>{order.transactionId.total ?? '-'}</td>
              <td>
                {order.reviewId ? (
                  <Link href={`order-list/${order._id}`}>
                    <a className="btn btn-sm btn-primary">
                      Detail
                    </a>
                  </Link>
                ) : (
                  <Link href={`order-list/${order._id}`}>
                    <a className="btn btn-sm btn-primary">
                      Review
                    </a>
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOrder;
