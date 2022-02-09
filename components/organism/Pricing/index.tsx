import { useCallback, useEffect, useState } from 'react';
import { ServiceTypes } from '../../../services/data-types';
import { getService } from '../../../services/public';
import ListPrice from './ListPrice';

const Pricing = function () {
  const [dataService, setDataService] = useState([]);

  const getDataService = useCallback(async () => {
    const data = await getService();

    setDataService(data);
  }, [getService]);

  useEffect(() => {
    getDataService();
  }, []);

  return (
    <section id="pricing" className="container text-white mt-4">
      <h2 className="text-center mb-3 font-weight-bold">Pricing</h2>
      <div className="row d-flex justify-content-between">
        {dataService.map((service: ServiceTypes) => (
          <ListPrice
            name={service.name}
            price={service.price}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
