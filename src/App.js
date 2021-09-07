import './App.css';
import React,{useEffect, useState} from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import axios from "axios"


function App() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products%27')
            .then(response => {
                setProducts(response.data)
            })
    .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <Header/>
            <MainBody data={fetchData()}/>
            <Footer />
        </>
    );

}

export default App;
