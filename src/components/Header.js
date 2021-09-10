import React, {useEffect, useState} from 'react';


function Header(props) {
    const {countCartItems,toggleCart, getCount} = props;
    console.log(getCount)
    const [cartCount, setCartCount] = useState('0');

    let count =[ localStorage.getItem("cartCount")];
    console.log(count + "count");
    console.log(localStorage.getItem('cartCount')+ 'hello from header js');

    useEffect(()=>{
        setCartCount(count)
    },[])

    return (
        <div>
            <header className="header">
                <div><h1>Tanja&Choka</h1> </div>
                <div className="header-icons-wrap">
                   <img  onClick={toggleCart}className={"icons  icon-cart"} src="https://img.icons8.com/nolan/64/fast-cart.png"/><p className='count'></p>
                    <img className={"icons userIcon"} src="https://img.icons8.com/nolan/64/person-male.png"/>
                </div>
            </header>
        </div>
    );
}

export default Header