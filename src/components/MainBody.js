import React from 'react'
import SectionLeft from "./LeftFilter";
import SectionRight from "./RightSection";


function MainBody(props) {
    console.log(props.data)

    return (
        <main className="main">

            <SectionLeft data={props}/>
            <div className="cardWrapper">
                {props.data.map((prop, index) => (
                    <div key={index} className="card">
                        <h4>{prop.title}</h4>
                        <img src={prop.imgFile} style={{height: 100 + 'px', width: 75 + 'px'}}/>
                        <p> {prop.price}$ </p>
                        <button className='addToCart'> Add to Cart</button>
                    </div>
                ))}
            </div>
            <SectionRight data={props} cartItems={props.cartItems}/>
        </main>
    );

}

export default MainBody;