import React, {useState} from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom";
import {Route,Link} from "react-router-dom";
import NavBar from "./NavBar";
import Shop from "./Shop";
import Header from "./components/Header";
import data from "./Data";


function App() {

    let toggleCart =() =>{
        document.querySelector(".sectionRight").classList.toggle("active");
    }
    let leaveCart =() =>{
        document.querySelector(".sectionRight").classList.remove("active");

    }

    return (
        <>
            <NavBar />
            <Route exact path="/shop" component={Shop} />

        </>
    );

}
export default App;