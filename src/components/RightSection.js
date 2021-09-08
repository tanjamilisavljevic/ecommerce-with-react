import React from 'react'


function SectionRight({onAdd,cartItems,onRemove}) {
    const itemsPrice = cartItems.reduce((a,c) =>a + c.price * c.qty,0 );
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0: 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <section className="sectionRight">
            <h3>Cart Items</h3>
            <div>
                {cartItems.length===0 && <div>Cart is empty</div>}
                {cartItems.map(item=>(
                    <div key={item.id} className="row">
                        <p className="">{item.title}</p>
                        <div className="">
                            <button onClick={()=>onAdd(item)} className="add">+</button>
                            <button onClick={()=>onRemove(item)} className="add">-</button>
                        </div>
                        <p className="">
                            {item.qty} x {item.price}$
                        </p>
                    </div>
                ))}
            </div>
            {cartItems.length !== 0 &&(
                <>
                    <hr></hr>
                    <div className="row">
                        <h5>Items Price</h5>
                        <p>{itemsPrice.toFixed(2)}$</p>
                    </div>
                    <div className="row">
                        <h5>Tax</h5>
                        <p>{taxPrice.toFixed(2)}$</p>
                    </div>
                    <div className="row">
                        <h5>Shipping</h5>
                        <p>{shippingPrice.toFixed(2)}$</p>
                    </div>
                    <div className="row">
                        <h5><strong>Total:</strong></h5>
                        <p>{totalPrice.toFixed(2)}$</p>
                    </div>
                </>
            )}
        </section>
    );

}

export default SectionRight;