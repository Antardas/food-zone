import React from 'react';

const CartItem = ({ food }) => {
    const { foodImg, quantity, price } = food;
    console.log(parseFloat(price) * parseInt(quantity))
    const singleProdductTotalPrice = parseFloat(price) * parseInt(quantity);
    return (
        <div className='d-flex rounded border-2 border-dark outline-dark'>
            <div className='d-flex'>
                <div className='w-25'>
                    <img className='w-100' src={foodImg} alt="" />
                </div>
                <div className='w-75'>
                    <h3>Title</h3>
                    <h5>price {parseInt(price)}</h5>
                    <div>
                        <span><button>-</button></span>
                        <span>{quantity }</span>
                        <span><button>+</button></span>
                    </div>
                    <h3> {singleProdductTotalPrice }</h3>
                </div>
            </div>
        </div>
    );
};

export default CartItem;