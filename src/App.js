import React from "react";
import {Route, Link} from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./components/Homepage";
import Shop from "./Shop";
import './App.css';


function App() {

    return (
        <>
            <NavBar/>
            <Route exact path="/Shop" component={Shop}/>
            <Route exact path="/" component={Homepage}/>
        </>
    );

};
export default App;
