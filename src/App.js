import './App.css';
import React, { useState, useEffect } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";



function App() {


    async function fetchData() {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products;
    }


    return (
        <>
            <Header/>
            <MainBody data={fetchData()}/>
            <Footer />
        </>
    );

}
//{tasks.length > 0 ?  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
export default App;
