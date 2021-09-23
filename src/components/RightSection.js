import React from 'react'


function SectionRight({onAdd, cartItems, onRemove, leaveCart}) {
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <section onMouseLeave={leaveCart} className="sectionRight">
            <h3 className='cartItems'>Cart Items</h3>
            <div>
                {cartItems.length === 0 && <div className='cartItems'>Your cart seems to be empty ☹️</div>}
                {cartItems.map(item => (
                    <div key={item.id} className="row">
                        <p className="">{item.title}</p>
                        <div className="">
                            <button onClick={() => onAdd(item)} className="add">+</button>
                            <button onClick={() => onRemove(item)} className="removeBtn">-</button>
                        </div>
                        <p className="">
                            {item.qty} x {item.price}$
                        </p>
                    </div>
                ))}
            </div>
            {cartItems.length !== 0 && (
                <>
                    <div className="check">
                        <hr></hr>

                        <div className="row1">
                            <p>Items Price</p>
                            <p className="numbers">{itemsPrice.toFixed(2)}$</p>
                        </div>
                        <div className="row1">
                            <p>Tax</p>
                            <p className="numbers">{taxPrice.toFixed(2)}$</p>
                        </div>
                        <div className="row1">
                            <p>Shipping</p>
                            <p className="numbers">{shippingPrice.toFixed(2)}$</p>
                        </div>
                        <div className="row1">
                            <p>Types of items</p>
                            <p className="numbers">{cartItems.length}</p>
                        </div>
                        <div className="row1">
                            <p><strong>Total:</strong></p>
                            <p className="numbers">{totalPrice.toFixed(2)}$</p>
                        </div>
                    </div>
                    <div className='buttonWrapper'>
                        <button className="addToCart orderBtn"> Order</button>
                    </div>
                </>
            )}
        </section>
    );

}

export default SectionRight;