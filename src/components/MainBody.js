import React, {useEffect, useState} from 'react'
import SectionRight from "./RightSection";
import Header from "./Header";


function MainBody({data, onAdd, cartItems, onRemove, leaveCart}) {

    const [order, setOrder] = useState(data);

    function ascending() {
        let ascend = [...data];
        let asc = ascend.sort((a, b) => a.price - b.price)
        console.log(asc);
        setOrder(asc);
    }

    function descending() {
        let descend = [...data];
        let desc = descend.sort((a, b) => b.price - a.price);
        setOrder(desc);
    }

    function alphabeticOrderAtoZ() {
        let alph = [...data];
        let alphabetAtoZ = alph.sort((a, b) => (a.title > b.title) ? 1 : -1);
        setOrder(alphabetAtoZ)

    }

    function alphabeticOrderZtoA() {
        let alph = [...data];
        let alphabetAtoZ = alph.sort((a, b) => (a.title < b.title) ? 1 : -1);
        setOrder(alphabetAtoZ)
    }

    let toggleCart = () => {
        document.querySelector(".sectionRight").classList.toggle("active");
    }

    return (
        <div>
            <Header toggleCart={toggleCart}/>
            <main className="main">
                <div className="wrapperForSmallScreen">
                    <section className="sectionLeft">
                        <div className="dropdown" id="filter">
                            <span className="leftTitle">Sort</span>
                            <span className="leftTitle" id="dash">-</span>
                            <hr/>
                            <div className="dropdown-content">
                                <p onClick={ascending}>Price low to high</p>
                            </div>
                            <hr className="dropdown-content"/>
                            <div className="dropdown-content">
                                <p onClick={descending}>Price high to low</p>
                            </div>
                            <hr/>
                            <div className="dropdown-content">
                                <p onClick={alphabeticOrderAtoZ}>Title A to Z</p>
                            </div>
                            <hr className="dropdown-content"/>
                            <div className="dropdown-content">
                                <p onClick={alphabeticOrderZtoA}>Title Z to A</p>
                            </div>
                        </div>

                    </section>
                    <div className="cardWrapper">
                        {order.map((product, index) => (
                            <div key={index} className="card">
                                <img src={product.imgFile} className="productPictures"/>
                                <h6 className="productTitle">{product.title}</h6>
                                <p className="productPrice"> {product.price}$ </p>
                                <button onClick={() => onAdd(product)} className='addToCart'> Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
                <SectionRight data={data} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}
                              leaveCart={leaveCart}/>
            </main>
        </div>
    );

}

export default MainBody;

