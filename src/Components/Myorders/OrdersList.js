import axios from 'axios';
import React from 'react';
import './orderList.css'

const OrdersList = ({ order, manageOrder }) => {
    const { foodName, houseNoPostOffice, status, city, _id, number, email } = order;
    const handleDelete = (id) => {
        const confirmDeleteOrder = window.confirm("Are you sure you want to delete?");
        if (confirmDeleteOrder) {
            axios.delete(`https://agile-woodland-88969.herokuapp.com/deleteOrder/${id}`, {
            }).then(res => {
                if (res.data.deletedCount) {
                    window.location.reload();
                }
            })
        }

    }

    const handleApprove = (id) => {
        axios.put(`https://agile-woodland-88969.herokuapp.com/approved/${id}`, 'Approved')
            .then(res => {
                if (res.data.modifiedCount) {
                    window.location.reload();
                }
            });
    }
    return (
        <> 
            <tr>
                <td>#</td>
                <td>Coustomer Name</td>
                <td>{foodName}</td>
                <td>{email}</td>
                <td>{number}</td>
                <td>{[houseNoPostOffice, ' ', city]}</td>
                <td>{status === 'Pending' ? (manageOrder ? <button onClick={() => handleApprove(_id)} className='btn btn-danger'>Approved</button> : 'Pending') : <span className='text-success'>Approved</span>}</td>

                <td><button className='btn' onClick={() => handleDelete(_id)}><i className="far fa-trash-alt text-danger"></i></button></td>
            </tr>
        </>
    );
};

export default OrdersList;