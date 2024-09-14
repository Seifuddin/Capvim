import React from "react";
import './Home.css';
import Slideshow from './Slideshow';
import Trusted from "./Trusted";
import Why from "./Why";
import Awards from "./Awards";
import Questions from "./Questions";
import Customers from "./Customers";

const Home = () => {
    return (
        <div className="homepage bg-dark">
            <div className="background p-3">
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <h1 className="bg-motto display-1 text-white fw-bold"> Your Partner In <br /> Publishing Success:</h1>
                                <h1 className="bg-motto-2 display-6 fw-bold"> Turning imagination into reality</h1>
                                <button className="btn-explore">Explore</button>
                                <button className="btn-explore">Sign Up</button>
                                <button className="btn-explore">Sign In</button>
                            </div>
                            <div className="col-md-4">
                                <div className="container">
                                    <h1 className="bg-motto-2 display-6 fw-bold text-danger"> Featured Titles...</h1>
                                    <Slideshow />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <p className="par-header display-6 fw-bold">Building Trust</p>

            <Trusted />
            <p className="par-header display-6 fw-bold">Why Capvim</p>

            <Why />
            <p className="par-header display-6 fw-bold">Awards</p>

            <Awards />
            <p className="par-header display-6 fw-bold">Questions and Answers</p>

            <Questions />
            <p className="par-header display-6 fw-bold">Customers</p>

            <Customers />

            <div className="responsible">
                <p className="par display-6 text-white">Our company is responsible for: Producing, distribution, and marketing various types of content, such as books, magazines, newspapers and digital media </p>
            </div>
        </div>
    );
};

export default Home;