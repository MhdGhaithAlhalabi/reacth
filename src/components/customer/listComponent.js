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
    await axios.get(`http://localhost:8000/api/customerView`,{
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
                  <th>first_name</th>
                  <th>mac_address</th>
                  <th>phone_number</th>
                </tr>
                </thead>
                <tbody>
                {
                  products.length > 0 && (
                    products.map((row, key) => (
                      <tr key={key}>
                        <td>{row.first_name}</td>
                        <td>{row.mac_address}</td>
                        <td>{row.phone_number}</td>
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