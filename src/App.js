import './App.css';
import React,{useEffect, useState, state} from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import data from "./Data"


function App() {
    console.log(data.products)

    return (
        <>
            <Header/>
            <MainBody data={data.products}/>
            <Footer />
        </>
    );

}

export default App;