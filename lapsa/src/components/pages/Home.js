import React from "react";
import './Home.css';
import Trusted from "./Trusted";
import Why from "./Why";
import Awards from "./Awards";
import Questions from "./Questions";
import Ratings from "./Ratings";
import Sub from "./Sub";
import Footer from "./Footer";
import { Link, useNavigate } from 'react-router-dom';
import Follow from "./FollowUs";
import Who from "./Who";

const Home = () => {
    const navigate = useNavigate();
  
    const handleRegisterRedirect = () => {
      navigate('/Gallery');
    };
    return (
        <div className="homepage bg-dark">
            <div className="background p-3">
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <h1 className="bg-motto display-1 text-white fw-bold"> Your Partner In <br /> Publishing Success:</h1>
                                <h1 className="bg-motto-2 display-6 fw-bold"> Turning imagination into reality</h1>
                                <p className="nametag mt-5 fw-bold">Your story starts here, whether you are a seasoned writer or a first time author, Capvim International Publishers is ready to help you bring your vision to life. We're a full service publishing house dedicated to amplifying unique voices and bringing meaningful stories to readers everywhere. From manuscript to market, Our team works with you at every step to ensure your story reaches its full potential. Since establishment, Capvim International Publishers has published hundreds of authors, with a passion for quality storytelling that resonates with readers globally. </p>


                            </div>
                            <div className="col-md-4">
                                <div className="container-publish m-3">

                                </div>

                            </div>
                        </div>  

                            <button className="btn-explore">Explore</button>
                            <button className="btn-explore">Sign Up</button>
                            <button className="btn-explore">Sign In</button>               
                </div>
            </div>
            <Who />
            <Sub /> 

            <p className="par-header display-6 fw-bold">Our Clients</p>

            <Trusted />
            <p className="par-header display-6 fw-bold">Why Capvim</p>

            <Why />
            <p className="par-header display-6 fw-bold">Awards</p>

            <Awards />
            <p className="par-header display-6 fw-bold">Questions and Answers</p>

            <Questions />
            <p className="par-header display-6 fw-bold">Customers Ratings</p>

            <Ratings />

            <p className="par-header display-6 fw-bold">Reach Us</p>

            <Follow />

            <Footer />
        </div>
    );
};

export default Home;