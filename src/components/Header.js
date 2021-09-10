import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";


function Header(props) {
    const {countCartItems,toggleCart} = props;
    const [cartCount, setCartCount] = useState('0');
    useEffect(()=>{
        let count = localStorage.getItem("cartCount");
        setCartCount(count)
    },[ localStorage.getItem("cartCount")])
    console.log("ddd"+ cartCount);

    return (
        <div>
            <header className="header">
                <Link to="/" className="headerTitle">Tanja&Choka</Link>
                {/*<div><h1>Tanja&Choka</h1> </div>*/}
                <div className="header-icons-wrap">
                   <img  onClick={toggleCart}className={"icons  icon-cart"} src="https://img.icons8.com/nolan/64/fast-cart.png"/><p className='count'></p>
                    <img className={"icons userIcon"} src="https://img.icons8.com/nolan/64/person-male.png"/>
                </div>
            </header>
        </div>
    );
}

export default Header