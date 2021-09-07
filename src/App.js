import './App.css';
import React,{useEffect, useState, state} from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import axios from "axios";


function App() {
    let [products, setProducts] =useState([
        {   id: 1,
            title: "Book1",
            price:10
        },
        {   id: 2,
            title: "Book2",
            price:11,

        },
        {   id: 3,
            title: "Book3",
            price:12,

        },
        {   id: 4,
            title: "Book4",
            price:10,

        },
        {   id:5 ,
            title: "Book5",
            price:10,

        },
        {   id: 6,
            title: "Book6",
            price:4,

        },
        {   id:7 ,
            title: "Book7",
            price:6,
        },
        {   id:7 ,
            title: "Book8",
            price:3,
        }

    ])



    return (
        <>
            <Header/>
            <MainBody data={products}/>
            <Footer />
        </>
    );

}

export default App;

