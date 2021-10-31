import axios from 'axios';
import React from 'react';

const OrdersList = ({ order, manageOrder }) => {
    const { foodName, houseNoPostOffice, status, city, _id, price, number, email } = order;
    const handleDelete = (id) => {
        const confirmDeleteOrder = window.confirm("Are you sure you want to delete?");
        if (confirmDeleteOrder) {
            axios.delete(`http://localhost:5000/deleteOrder/${id}`, {
            }).then(res => {
                if (res.data.deletedCount) {
                    window.location.reload();
                }
            })
        }

    }
    return (
        <>
            <tr>
                <td>#</td>
                <td>Coustomer Name</td>
                <td>{foodName}</td>
                <td>{email}</td>
                <td>{number}</td>
                <td>{[houseNoPostOffice,' ', city ]}</td>
                <td>{status}</td>
                <td><button className='btn' onClick={() => handleDelete(_id)}><i className="far fa-trash-alt text-danger"></i></button></td>
            </tr>
        </>
    );
};

export default OrdersList;