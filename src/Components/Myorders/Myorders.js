import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import OrdersList from './OrdersList';
import lodingGif from '../../assets/images/loading-gif.gif'

const Myorders = () => {
    const { user } = useAuth();
    const [orderList, setOrderList] = useState([]);
    // Get Specefic user order
    
    useEffect(() => {
        axios.get(`https://agile-woodland-88969.herokuapp.com/getUserOrders/${user.email}`)
            .then(res => setOrderList(res.data))
    }, [])

    return (
        <div style={{ backgroundColor: '#E2F5FF' }}>
            <div className='container py-5 '>
            <h1>My Order List</h1>
                <Table className='bg-light mt-3 rounded py-5' responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Coustomer Name</th>
                            <th>Products</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Delivery Address</th>
                            <th>Delivery Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map(order => <OrdersList key={order._id} order={order}></OrdersList>)
                        }
                    </tbody>

                </Table>
            </div>
        </div>
    );
};

export default Myorders;