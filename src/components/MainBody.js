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
                        <h4>{prop.title}</h4>
                        <img src={prop.imgFile} style={{height: 100 + 'px', width: 75 + 'px'}}/>
                        <p> {prop.price}$ </p>
                        <button  onClick={()=>onAdd(prop)}  className='addToCart'> Add to Cart</button>
                    </div>
                ))}
            </div>
            <SectionRight  data={data} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
        </main>
    );

}

export default MainBody;