import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";


function Header(props) {
    const {countCartItems,toggleCart} = props;
    const [cartCount, setCartCount] = useState('0');
    let count = localStorage.getItem("cartCount");

    useEffect(()=>{
        setCartCount(count)
        console.log("headerJs"+ cartCount);
    },[count])
    console.log("headerJs"+ cartCount);

    return (
        <div>
            <header className="header">
                <Link to="/" className="headerTitle">Tanja&Choka</Link>
                <div className="header-icons-wrap">
                    <div className="cartWrapper"> <img  onClick={toggleCart} className={"icons  icon-cart"} src="https://img.icons8.com/nolan/64/fast-cart.png"/><p className='count'></p></div>
                    <img className={"icons userIcon"} src="https://img.icons8.com/nolan/64/person-male.png"/>
                </div>
            </header>
        </div>
    );
}

export default Header