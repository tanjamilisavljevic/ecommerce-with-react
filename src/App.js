import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom";
import {Route,Link} from "react-router-dom";
import NavBar from "./NavBar";
import Shop from "./Shop";
import Carousel from "./components/Carousel.js"
import Header from "./components/Header";


function App() {

    let toggleCart =() =>{
        document.querySelector(".sectionRight").classList.toggle("active");
    }
    const [cartCount, setCartCount] = useState('0');

    const data = localStorage.getItem('cartCount');
    console.log('g'+ data);

    return (
        <>
            <Header   toggleCart={toggleCart} />
            <NavBar/>
            <Route exact path="/shop" component={Shop} />
            <Carousel />
        </>
    );

};
export default App;