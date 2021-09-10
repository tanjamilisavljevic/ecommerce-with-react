import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom";
import {Route,Link} from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Shop from "./Shop";
import './App.css';



function App() {

    let toggleCart =() =>{
        document.querySelector(".sectionRight").classList.toggle("active");
    }



    return (
        <>
            <Header  getCount ={'ghhhhhs'} toggleCart={toggleCart} />
            <NavBar/>
            <Route exact path="/Shop" component={Shop} />
            <Route exact path="/" component={Homepage} />
        </>
    );

};
export default App;
