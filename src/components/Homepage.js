import React from 'react';
import {Link} from "react-router-dom";

function Homepage() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="./carousel (2).jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./carousel (1).jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./carousel (3).jpg" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <h1 className="homeTitle"> Tanja&Choka</h1>
            <p className="shopTitle"> SHOP</p>

            <div className="shopDescription">
                Stories have a way of bringing people together.
                That’s why we’re so excited to announce that we’ve opened a used bookshop in Gent!
                Our goal has always been to create warm, inviting spaces where members of the community can gather
                and connect - we hope our new bookshop will make the time you spend with us even more special.
            </div>
            <div className="buttonWrapper">
                <p className="toTheShopButton"> <Link to="/shop">To the shop!</Link></p>
            </div>
        </div>
    );
}

export default Homepage;