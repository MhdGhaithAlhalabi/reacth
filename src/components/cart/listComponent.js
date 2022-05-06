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
    await
      axios
        .get(`http://localhost:8000/api/cartView`,{
          withCredentials: true
        })
    .then(({data}) => {
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
                  <th>no</th>
                  <th>name</th>
                  <th>price</th>
                  <th>amount</th>
                </tr>
                </thead>
                <tbody>
                {
                  products.length > 0 && (
                    products.map((row, key) => (
                  <tr key={key}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.price}</td>
                        <td>{row.amount}</td>
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