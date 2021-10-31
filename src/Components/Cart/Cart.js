import React from 'react';
import CartItem from './CartItem';

const Cart = ({ foods }) => {
    let totalPrice = 0
    foods.map(food => totalPrice += food.price * food.quantity);
    console.log(totalPrice)

    return (
        <div className='container d-flex'>
            <div>
            <h1>My Cart Page</h1>
            <div>
                <h5><span>{foods.length}</span> Item Added </h5>
                <h5>Total $ 455</h5>
            </div>
            {
                foods.map((food) => <CartItem key={food._id} food={food}></CartItem>)
            }

            </div>
            <div>
                <h1>Cart Section </h1>

                <div>
                    <h1>Toalal price: {totalPrice}</h1>
                </div>
            </div>
        </div>
    );
};

export default Cart;