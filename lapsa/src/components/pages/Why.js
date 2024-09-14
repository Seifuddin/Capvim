import React from "react";
import './Why.css';
import colonel from '../images/1000040014.jpg'

const Why = () => {
    return (
        <div className="container-why bg-dark">
            <h3 className="Trusted-ttle text-white display-5 text-center m-5 fw-bold"> Why work with us </h3>
            <hr />
            <div className="row p-3">
            <div className="col col-xl-3 col-lg-6 col-12">
              <div className="quality bg-secondary rounded p-2 m-2">
              <p className="heading fw-bold text-center text-warning"> High Quality Product </p>
              <p className='p text-white'>Lorem ipsum dolor sit  accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              <hr />
              <div className="row  m-2 p-2">
                <div className="col">
                    <img src={colonel} alt='digitalprinting'/>
                </div>

                <div className="col">
                    <img src={colonel} alt='digitalprinting'/>
                </div>

                <div className="col">
                    <img src={colonel} alt='digitalprinting'/>
                </div>
              </div>
              </div>
            </div>

            <div className="col col-xl-3 col-lg-6 col-12">
            <div className="quality bg-secondary rounded p-2 m-2">
            <p className="heading fw-bold text-center text-warning"> High Quality Product </p>
              <p className='p text-white'>Lorem ipsum dolor sit  accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              <hr />
              <div className="row m-2 p-2">
                <div className="col">
                    <img src={colonel} alt='digitalprinting'/>
                </div>

                <div className="col">
                    <img src={colonel} alt='digitalprinting'/>
                </div>

                <div className="col">
                    <img src={colonel} alt='digitalprinting'/>
                </div>
              </div>
              </div>
            </div>

            <div className="col col-xl-3 col-lg-6 col-12">
            <div className="quality bg-secondary rounded p-2 m-2">
            <p className="heading fw-bold text-center text-warning"> High Quality Product </p>
              <p className='p text-white'>Lorem ipsum dolor sit  accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              <hr />
              <div className="row m-2 p-2">
                <div className="col">
                    <img src={colonel} alt='digitalprinting'/>
                </div>

                <div className="col">
                    <img src={colonel} alt='digitalprinting'/>
                </div>

                <div className="col">
                    <img src={colonel} alt='digitalprinting'/>
                </div>
              </div>
              </div> 
            </div>

            <div className="col col-xl-3 col-lg-6 col-12">
            <div className="quality bg-secondary rounded p-2 m-2">
            <p className="heading fw-bold text-center text-warning"> High Quality Product </p>
              <p className='p text-white'>Lorem ipsum dolor sit  accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              <hr />
              <div className="row m-2 p-2">
                <div className="col">
                    <img src={colonel} alt='digitalprinting'/>
                </div>

                <div className="col">
                    <img src={colonel} alt='digitalprinting'/>
                </div>

                <div className="col">
                    <img src={colonel} alt='digitalprinting'/>
                </div>
              </div>
              </div>  
            </div>

          </div>

        </div>
    );
};

export default Why;