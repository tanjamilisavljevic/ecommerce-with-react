import React, {useEffect, useState} from 'react'
import SectionRight from "./RightSection";


function MainBody({data, onAdd, cartItems, onRemove, leaveCart}) {

    const [order, setOrder] = useState('');
    const [alphabeticOrder, setAlphabeticOrder] = useState('');

    useEffect(() => {
        data.sort((a, b) => (a.price > b.price) ? 1 : -1);
        setOrder("up");
    }, [])
    useEffect(() => {
        if (order === "up") {
            console.log("up");
            data.sort((a, b) => (a.price < b.price) ? 1 : -1);
        } else {
            console.log("down");
            data.sort((a, b) => (a.price > b.price) ? 1 : -1);
        }
    }, [order])


    useEffect(() => {
        if (alphabeticOrder === "AtoZ") {
            console.log("a");
            data.sort((a, b) => (a.title < b.title) ? 1 : -1);
        } else {
            console.log("z");
            data.sort((a, b) => (a.title > b.title) ? 1 : -1);
        }
    }, [alphabeticOrder])


    return (
        <main className="main">
            <div className="wrapperForSmallScreen">
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
                        <hr/>
                        <div className="dropdown-content">
                            <p onClick={() => setAlphabeticOrder("AtoZ")}>Title A to Z</p>
                        </div>
                        <hr className="dropdown-content"/>
                        <div className="dropdown-content">
                            <p onClick={() => setAlphabeticOrder("ZtoA")}>Title Z to A</p>
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
            </div>
            <SectionRight data={data} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} leaveCart={leaveCart}/>
        </main>
    );

}

export default MainBody;