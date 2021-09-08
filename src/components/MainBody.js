import React from 'react'
import SectionLeft from "./LeftFilter";
import SectionRight from "./RightSection";


function MainBody( {data, onAdd,cartItems, onRemove} ) {


    return (
        <main className="main">

            <SectionLeft data={data}/>
            <div className="cardWrapper">
                {data.map((prop, index) => (
                    <div key={index} className="card">
                        <img src={prop.imgFile} className="productPictures"/>
                        <h6 className="productTitle">{prop.title}</h6>
                        <p className="productPrice"> {prop.price}$ </p>
                        <button onClick={()=>onAdd(prop)} className='addToCart'> Add to Cart</button>
                    </div>
                ))}
            </div>
            <SectionRight  data={data} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
        </main>
    );

}

export default MainBody;