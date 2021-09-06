import './App.css';
import React from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

async function fetchData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products;
}


function App() {
    return (
        <>
            <Header/>
            <MainBody data={fetchData()}/>
            <Footer />
        </>
    );

}

export default App;
