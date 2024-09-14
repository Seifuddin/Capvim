import React from "react";
import './Awards.css';
import colonel from '../images/General_Service_Unit.jpg'

const Awards = () => {
    return (
        <div className="container-awards p-3 border">
            <h3 className="Trusted-ttle text-white display-5 text-center m-5 fw-bold"> Awards and Achievements</h3>
            <hr />
            <div className="row">
                <div className="col-xl-6 col-12">
                    <div className="box">
                        <img className="imgcolnel" src={colonel} alt='digitalprinting'/>
                        <p className="nametag text-center display-6 text-warning fw-bold">The Golden Award belonging to Capvim International Publishers</p>

                    </div>
                </div>

                <div className="col-xl-6 col-12">
                    <div className="box border rounded p-3">
                    <p className="par-header display-6 fw-bold">Publisher of the year</p>
                    <div className="row">
                            <div className="col">
                                <img className="imgcolnel2" src={colonel} alt='digitalprinting'/>
                                <p className="nametag text-warning fw-bold">Mr. Clifford Matara receiving the annual award winning gift from Hon. </p>
                                <p className="nametag text-white fw-bold">-Capvim co-Director</p>
                            </div>

                            <div className="col">
                                <img className="imgcolnel2" src={colonel} alt='digitalprinting'/>
                                <p className="nametag text-warning fw-bold">Mr. Clifford Matara receiving the annual award winning gift from Hon.</p>
                                <p className="nametag text-white fw-bold">-Capvim co-Director</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col rounded border m-5 bg-dark">
                                <p className="par-header display-6 fw-bold">Did you know?</p>
                                <h3 className="parag dispaly-5 text-white">Capvim International Publishers have won the certificate of awards in the year 2019 for the best Publishing Company in Kenya</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;