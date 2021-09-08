import React, {useEffect, useState} from 'react'
import SectionLeft from "./LeftFilter";
import SectionRight from "./RightSection";


function MainBody( {data, onAdd,cartItems, onRemove} ) {

    const [order, setOrder] = useState('');

    useEffect(()=>{
        data.sort((a,b) => (a.price > b.price)? 1 : -1);
        setOrder ("up");
    },[])

    useEffect(()=>{
        if (order === "up"){
            data.sort((a,b) => (a.price < b.price)? 1 : -1);

        }
        else {
            data.sort((a,b) => (a.price > b.price)? 1 : -1);

        }
    },[order])

    // function sortHighToLow(){
    //     console.log('low')
    //     return data.sort((a,b) => (a.price < b.price)? 1 : -1);
    // }
    // function sortLowToHigh(){
    //     console.log('hi')
    //     console.log(data)
    //     return data.sort((a,b) => (a.price > b.price)? 1 : -1);
    // }


    return (
        <main className="main">

            <div className="cardWrapper">
                {data.map((product, index) => (
                    <div key={index} className="card">
                        <img src={product.imgFile} className="productPictures"/>
                        <h6 className="productTitle">{product.title}</h6>
                        <p className="productPrice"> {product.price}$ </p>
                        <button className='addToCart'> Add to Cart</button>
                    </div>
                ))}
            </div>
            <section className="sectionLeft" >
                <div className="dropdown">
                    <span className="leftTitle">Filter by</span>
                    <div className="dropdown-content">
                        <p onClick={() => setOrder("up")}>Price low to high</p>
                    </div>
                    <div className="dropdown-content">
                        <p onClick={() => setOrder("down")}>Price high to low</p>
                    </div>
                </div>
            </section>
            <SectionRight  data={data} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
        </main>
    );

}

export default MainBody;