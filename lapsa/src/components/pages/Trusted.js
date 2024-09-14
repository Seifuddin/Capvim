import React from "react";
import './Trusted.css';
import colonel from '../images/1000040014.jpg'

const Trusted = () => {
    return (
        <div className="container-trusted p-3 border">
            <h3 className="Trusted-ttle text-white display-5 text-center m-5 fw-bold"> Trusted by the worlds most innovative companies and organizations</h3>
            <hr />
            <div className="row">
                <div className="col-xl-2 col-lg-4 col-6">
                    <div className="box">
                        <img src={colonel} alt='digitalprinting'/>
                        <p className="nametag text-center text-white fw-bold">Lapsa AI<br/></p>
                    </div>
                </div>

                <div className="col-xl-2 col-lg-4 col-6">
                    <div className="box">
                        <img src={colonel} alt='digitalprinting'/>
                        <p className="nametag text-center text-white fw-bold">Lapsa AI<br/></p>
                    </div>
                </div>

                <div className="col-xl-2 col-lg-4 col-6">
                    <div className="box">
                        <img src={colonel} alt='digitalprinting'/>
                        <p className="nametag text-center text-white fw-bold">Lapsa AI<br/></p>
                    </div>
                </div>

                <div className="col-xl-2 col-lg-4 col-6">
                    <div className="box">
                        <img src={colonel} alt='digitalprinting'/>
                        <p className="nametag text-center text-white fw-bold">Lapsa AI<br/></p>
                    </div>
                </div>

                <div className="col-xl-2 col-lg-4 col-6">
                    <div className="box">
                        <img src={colonel} alt='digitalprinting'/>
                        <p className="nametag text-center text-white fw-bold">Lapsa AI<br/></p>
                    </div>
                </div>

                <div className="col-xl-2 col-lg-4 col-6">
                    <div className="box">
                        <img src={colonel} alt='digitalprinting'/>
                        <p className="nametag text-center text-white fw-bold">Lapsa AI<br/></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Trusted;