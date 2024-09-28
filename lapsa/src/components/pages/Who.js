import React from "react";
import './Who.css';
import inklab from '../images/1000040014.jpg';

const Who = () => {
    return (
        <div className="container-who border">
            <h3 className="Trusted-ttle text-white display-5 text-center m-5 fw-bold"> Who are we </h3>

            <div className="row">
                <div className="col-sm-12 col-lg-6">
                    <a href={inklab} target="_blank" rel="noopener noreferrer">
                        <img src={inklab} alt="capvim" className="imgCapvim" />
                    </a>
                    <div className="OurMotto">
                        <h5 className="h4 p-2 text-primary">Capvim International Publishers</h5>
                        <h5 className="h6 text-white p-2" >Capvim International Publishers is an International publishing company that was started in Kenya in the year 2015 by Dr. Clifford Matara and Dr. Ismail Atudo.Its basic services include Designing, Printing, Publidhing and Marketing.Capvim International Publishers is an International publishing company that was started in Kenya in the year 2015 by Dr. Clifford Matara and Dr. Ismail Atudo.Its basic services include Designing, Printing, Publidhing and Marketing.</h5>
                    </div>
                </div>

                <div className="col-sm-12 col-lg-6">
                    <div className="OurMotto">
                        <h5 className="h4 text-primary" >Our Motto</h5>
                        <h5 className="h6 text-white" >Capvim International Publishers is an International publishing company that was started in Kenya in the year 2015 by Dr. Clifford Matara and Dr. Ismail Atudo.Its basic services include Designing, Printing, Publidhing and Marketing.</h5>
                    </div>

                    <div className="OurMotto">
                        <h5 className="h4 text-primary" >Our Mission</h5>
                        <h5 className="h6 text-white" >Capvim International Publishers is an International publishing company that was started in Kenya in the year 2015 by Dr. Clifford Matara and Dr. Ismail Atudo.Its basic services include Designing, Printing, Publidhing and Marketing.</h5>
                    </div>

                    <div className="OurMotto">
                        <h5 className="h4 text-primary" >Our Vision</h5>
                        <h5 className="h6 text-white" >Capvim International Publishers is an International publishing company that was started in Kenya in the year 2015 by Dr. Clifford Matara and Dr. Ismail Atudo.Its basic services include Designing, Printing, Publidhing and Marketing.</h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Who;