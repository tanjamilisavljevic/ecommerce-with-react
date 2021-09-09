import React from 'react';


function Header(props) {
    const {countCartItems,toggleCart} = props;

    return (
        <div>
            <header className="header">
                <div><h1>Tanja&Choka</h1> <a href="mainPage.html">mainPage</a></div>
                <div className="header-icons-wrap">
                   <img  onClick={toggleCart}className={"icons  icon-cart"} src="https://img.icons8.com/nolan/64/fast-cart.png"/>{countCartItems > 0 && countCartItems}
                    <img className={"icons userIcon"} src="https://img.icons8.com/nolan/64/person-male.png"/>
                </div>
            </header>
        </div>
    );
}

export default Header