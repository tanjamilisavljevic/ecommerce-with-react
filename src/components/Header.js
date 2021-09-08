import React from 'react';


function Header(props) {
    const {countCartItems} = props;
    return (
        <div>
            <header className="header">
                <div><h1>Tanja&Choka</h1></div>
                <div>
                    <img className={"icons userIcon icon-cart"} src="https://img.icons8.com/nolan/64/fast-cart.png"/>{countCartItems > 0 && countCartItems}
                    <img className={"icons userIcon"}  src="https://img.icons8.com/color-glass/48/000000/gender-neutral-user.png"/>
                </div>
            </header>
        </div>
    );
}

export default Header