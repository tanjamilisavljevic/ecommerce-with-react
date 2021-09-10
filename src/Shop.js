import './App.css';
import React,{useEffect, useState} from 'react'
import Footer from "./components/Footer";

import MainBody from "./components/MainBody";
import data from "./Data"
import Header from "./components/Header";
import NavBar from "./NavBar";

function Shop() {
    const products = data.products;
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(1);

    localStorage.setItem('cartCount', cartCount.toString());
    const onAdd= (product)=>{
        setCartCount(cartCount + 1);
        const exist = cartItems.find(x=>x.id === product.id);
        document.querySelector(".count").innerHTML = localStorage.getItem('cartCount');
        if(exist){
            setCartItems(cartItems.map(x=>x.id===product.id?{...exist,qty: exist.qty + 1}:x));

        } else{
            setCartItems([...cartItems,{...product,qty: 1 }]);

        }


    }

    const onRemove= (product)=>{

        setCartCount(cartCount - 1);
        document.querySelector(".count").innerHTML = cartCount -2

        const exist = cartItems.find(x=>x.id === product.id);
        if(exist.qty ===1){
            setCartItems(cartItems.filter(x=>x.id !== product.id));
        } else{
            setCartItems(cartItems.map(x=>x.id===product.id?{...exist,qty: exist.qty - 1}:x));

        }

    }

    let leaveCart =() =>{
        document.querySelector(".sectionRight").classList.remove("active");
    }

    //________________________________________


    return (
        <>
            <MainBody onAdd={onAdd} onRemove={onRemove} data={products} cartItems={cartItems} leaveCart={leaveCart}/>
            <Footer />
        </>
    );

}
export default Shop;