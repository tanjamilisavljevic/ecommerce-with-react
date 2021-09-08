import './App.css';
import React,{useEffect, useState} from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import data from "./Data"


function App() {
    const products = data.products;
    products.sort((a,b) => (a.price > b.price)? 1 : -1);
    console.log(products);

    const [cartItems,setCartItems] = useState([]);

    const onAdd= (product)=>{
        const exist = cartItems.find(x=>x.id === product.id);

        if(exist){
            setCartItems(cartItems.map(x=>x.id===product.id?{...exist,qty: exist.qty + 1}:x));
        } else{
            setCartItems([...cartItems,{...product,qty: 1 }]);
        }
    }

    const onRemove= (product)=>{
        const exist = cartItems.find(x=>x.id === product.id);

        if(exist.qty ===1){
            setCartItems(cartItems.filter(x=>x.id !== product.id));
        } else{
            setCartItems(cartItems.map(x=>x.id===product.id?{...exist,qty: exist.qty - 1}:x));

        }
    }
    return (
        <>
            <Header countCartItems={cartItems.length}/>
            <MainBody onAdd={onAdd} onRemove={onRemove} data={products} cartItems={cartItems}/>
            <Footer />
        </>
    );

};
export default App;