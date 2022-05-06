import * as React from 'react';
import AppLayout from 'components/Layouts/AppLayout';
import { useAuth } from 'hooks/auth';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from 'components/product/listComponent';
import CustomerList from 'components/customer/listComponent';
import CartList from 'components/cart/listComponent';
import CreatProduct from 'components/product/createComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Dashboard = () => {
  const { user } = useAuth({ middleware: 'auth' });
  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              You're logged in! {user?.id} - {user?.name} - {user?.email}
                <Container className="mt-5">
                  <Row>
                    <Link to="/CreatProduct">CreatProduct</Link>
                    <Col md={12}>
                       <h1>menu</h1>
                      <ProductList />
                      <h1>Customers</h1>
                      <CustomerList />
                       <h1>Carts</h1>
                      <CartList />
                    </Col>
                  </Row>
                </Container>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
export default Dashboard;
