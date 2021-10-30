import React from 'react';

const Cart = ({foods}) => {
    return (
        <div>
            {
                foods.map((food, index) => <h1 key={index}>{foods.quantity}</h1>)
            }
        </div>
    );
};

export default Cart;