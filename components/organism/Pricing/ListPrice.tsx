import NumberFormat from 'react-number-format';

export interface ListPriceProps {
    name: string;
    price: number;
    desc: string;
}

const ListPrice = function (props: ListPriceProps) {
  const { name, price, desc } = props;
  return (
    <div className="col-sm-5 mb-2">
      <div className="d-flex justify-content-between">
        <p className="font-weight-bold">{name}</p>
        <p className="font-weight-bold">
          <NumberFormat
            value={price}
            prefix="Rp"
            suffix=",00"
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </p>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default ListPrice;
