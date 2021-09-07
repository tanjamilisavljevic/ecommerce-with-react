import React from 'react'


function SectionRight({data,cartItems}) {
    return (
        <section className="sectionRight">
            <h3>Cart Items</h3>
            <div>
                {cartItems.length===0 && <div>Cart is empty</div>}
            </div>
        </section>
    );

}

export default SectionRight;