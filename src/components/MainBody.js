import React, {useEffect, useState} from 'react'
import SectionRight from "./RightSection";


function MainBody({data, onAdd, cartItems, onRemove, leaveCart}) {

    const [order, setOrder] = useState('');

    useEffect(() => {
        data.sort((a, b) => (a.price > b.price) ? 1 : -1);
        setOrder("up");
    }, [])

    useEffect(() => {
        if (order === "up") {
            data.sort((a, b) => (a.price < b.price) ? 1 : -1);
        } else {
            data.sort((a, b) => (a.price > b.price) ? 1 : -1);
        }
    }, [order])


    return (
        <main className="main">
            <section className="sectionLeft">
                <div className="dropdown" id="filter">
                    <span className="leftTitle">Sort</span>
                    <span className="leftTitle" id="dash">-</span>
                    <hr/>
                    <div className="dropdown-content">
                        <p onClick={() => setOrder("up")}>Price low to high</p>
                    </div>
                    <hr className="dropdown-content"/>
                    <div className="dropdown-content">
                        <p onClick={() => setOrder("down")}>Price high to low</p>
                    </div>
                </div>
            </section>
            <div className="cardWrapper">
                {data.map((product, index) => (
                    <div key={index} className="card">
                        <img src={product.imgFile} className="productPictures"/>
                        <h6 className="productTitle">{product.title}</h6>
                        <p className="productPrice"> {product.price}$ </p>
                        <button onClick={() => onAdd(product)} className='addToCart'> Add to Cart</button>
                    </div>
                ))}
            </div>
            <SectionRight data={data} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}  leaveCart={leaveCart}/>
        </main>
    );

}

export default MainBody;