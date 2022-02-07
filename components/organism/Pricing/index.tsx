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
    <div className="pricing">
      <h2 className="text-center mb-3">Pricing</h2>
      <div className="row">
        {dataService.map((service: ServiceTypes) => (
          <ListPrice
            name={service.name}
            price={service.price}
            desc={service.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
