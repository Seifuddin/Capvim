import React from "react";
import './Ratings.css';
import colonel from '../images/General_Service_Unit.jpg'

const Ratings = () => {
    return (
        <div className="container-ratings border">
            <h3 className="Trusted-ttle text-white display-5 text-center m-5 fw-bold m-4"> Customers Experience and Client Testimonials </h3>
            <hr />
            <div className="row p-3">
            <div className="col col-xl-3 col-lg-6 col-12">
              <div className="quality border p-2 m-2">
              <img className="img-rate" src={colonel} alt='digitalprinting'/>
              <p className="heading fw-bold text-center text-warning mt-4 h4"> High Quality Product </p>
              <p className="heading fw-bold text-center mt-4"> -Writer </p>
              <p className='p text-white'>Lorem ipsum dolor sit  accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              <hr />
              </div>
            </div>

            <div className="col col-xl-3 col-lg-6 col-12">
              <div className="quality border p-2 m-2">
              <img className="img-rate" src={colonel} alt='digitalprinting'/>
              <p className="heading fw-bold text-center text-warning mt-4 h4"> High Quality Product </p>
              <p className="heading fw-bold text-center mt-4"> -Writer </p>
              <p className='p text-white'>Lorem ipsum dolor sit  accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              <hr />
              </div>
            </div>

            <div className="col col-xl-3 col-lg-6 col-12">
              <div className="quality border p-2 m-2">
              <img className="img-rate" src={colonel} alt='digitalprinting'/>
              <p className="heading fw-bold text-center text-warning mt-4 h4"> High Quality Product </p>
              <p className="heading fw-bold text-center mt-4"> -Writer </p>
              <p className='p text-white'>Lorem ipsum dolor sit  accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              <hr />
              </div>
            </div>

            <div className="col col-xl-3 col-lg-6 col-12">
              <div className="quality border p-2 m-2">
              <img className="img-rate" src={colonel} alt='digitalprinting'/>
              <p className="heading fw-bold text-center text-warning mt-4 h4"> High Quality Product </p>
              <p className="heading fw-bold text-center mt-4"> -Writer </p>
              <p className='p text-white'>Lorem ipsum dolor sit  accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              <hr />
              </div>
            </div>

          </div>

        </div>
    );
};

export default Ratings;