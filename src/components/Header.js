import React from 'react';


function Header(props) {
    const {countCartItems,showCart,closeCart} = props;

    return (
        <div>
            <header className="header">
                <div><h1>Tanja&Choka</h1></div>
                <div>
                    <a href="#"><img onMouseEnter={showCart} onMouseLeave={closeCart} className={"icons  icon-cart"} src="https://img.icons8.com/nolan/64/fast-cart.png"/>{countCartItems > 0 && countCartItems}</a>
                    <img className={"icons userIcon"} src="https://img.icons8.com/nolan/64/person-male.png"/>
                </div>
            </header>
        </div>
    );
}

export default Header