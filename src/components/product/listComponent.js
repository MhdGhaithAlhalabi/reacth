import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from 'hooks/auth';
import useSWR from 'swr';

export default function List() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  let fetchProducts;
  fetchProducts = async () => {
    await axios.get(`http://localhost:8000/api/productView`,  {
      withCredentials: true
    }).then(({data}) => {
      setProducts(data);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12"/>
        <div className="col-12">
          <div className="card card-body">
            <div className="table-responsive">
              <table className="table table-bordered mb-0 text-center">
                <thead>
                <tr>
                  <th>type</th>
                  <th>name</th>
                  <th>details</th>
                </tr>
                </thead>
                <tbody>
                {
                  products.length > 0 && (
                    products.map((row, key) => (
                      <tr key={key}>
                        <td>{row.type}</td>
                        <td>{row.name}</td>
                        <td>{row.details}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}