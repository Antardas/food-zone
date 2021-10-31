import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import OrdersList from '../Myorders/OrdersList';

const Manageorder = () => {
    const [allorderList, setAllOrderList] = useState([]);
    useEffect(() => {
        axios.get(`https://agile-woodland-88969.herokuapp.com/allOrders`)
            .then(res => setAllOrderList(res.data))
    }, [])
    return (
        <div>
            <div style={{ backgroundColor: '#E2F5FF' }}>
                <div className='container py-5 '>
                    <h1>Customer Orders List</h1>
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
                                allorderList.map(order => <OrdersList manageOrder="manageOrder" key={order._id} order={order}></OrdersList>)
                            }
                        </tbody>

                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Manageorder;