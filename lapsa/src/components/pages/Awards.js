import React from "react";
import './Awards.css';
import colonel from '../images/General_Service_Unit.jpg';
import trophy from '../images/award-ceremony-background-d-gold-star-element-glitter-light-effect-decoration-black-golden-d-trophy-awards-ceremony-304683832.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Awards = () => {
    return (
        <div className="container-awards p-3 border">
            <h3 className="Trusted-ttle text-white display-5 text-center m-5 fw-bold"> Awards and Achievements</h3>
            <hr />
            <div className="row">
                <div className="col-xl-6 col-12">
                    <div className="box">
                        <a href={trophy} target="_blank" rel="noopener noreferrer">
                            <img src={trophy} alt="Trophy" className="imgtrophy" />
                        </a>
                        <div className="OurMotto">
                            <h5 className="h4 p-2 text-warning">The Golden Award belonging to Capvim International Publishers</h5>
                            <h5 className="h6 text-white p-2" >Capvim International Publishers is an International publishing company that was started in Kenya in the year 2015 by Dr. Clifford Matara and Dr. Ismail Atudo.Its basic services include Designing, Printing, Publidhing and Marketing.Capvim International Publishers is an International publishing company that was started in Kenya in the year 2015 by Dr. Clifford Matara and Dr. Ismail Atudo.Its basic services include Designing, Printing, Publidhing and Marketing.</h5>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-12">
                    <div className="box p-3">
                    <p className="par-header display-6 fw-bold mt-0">Publisher of the year</p>
                    <div className="row">
                            <div className="col">
                                <a href={colonel} target="_blank" rel="noopener noreferrer">
                                    <img className="imgcolnel2" src={colonel} alt='digitalprinting'/>
                                </a>
                                <p className="nametag text-warning fw-bold">Mr. Clifford Matara receiving the annual award winning gift from Hon. </p>
                                <p className="nametag text-white fw-bold">-Capvim co-Director</p>
                            </div>

                            <div className="col">
                                <a href={colonel} target="_blank" rel="noopener noreferrer">
                                    <img className="imgcolnel2" src={colonel} alt='digitalprinting'/>
                                </a>
                                <p className="nametag text-warning fw-bold">Mr. Clifford Matara receiving the annual award winning gift from Hon.</p>
                                <p className="nametag text-white fw-bold">-Capvim co-Director</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col rounded bg-dark">
                                <p className="par-header display-6 fw-bold">Did you know?</p>
                                <h3 className="parag text-white p-2">Capvim International Publishers have won the certificate of awards in the year 2019 for the best Publishing Company in Kenya</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;