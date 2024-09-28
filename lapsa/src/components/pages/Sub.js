import React from "react";
import './Sub.css';
import { Link, useNavigate } from 'react-router-dom';
import colonel from '../images/General_Service_Unit.jpg';

const Sub = () => {
    const navigate = useNavigate();
  
    const handleRegisterRedirect = () => {
      navigate('./Gallery');
    };
    return (
        <div className="container-sub border">
            <h3 className="Trusted-ttle text-white display-5 text-center m-5 fw-bold"> Create, Publish and Sell Your Books</h3>

            <div className="row">

            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                    <div className="bx">
                        <Link to="./Gallery"><img className="img-link" src={colonel} alt='colonel'/></Link>
                        <p className="h4">Design a Book</p>
                        <p className='p text-center text-white'>connect your business site with Inklab Digital Printing For Design.</p>
                        <button className='btnpublish' onClick={handleRegisterRedirect}>Design a Book</button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                    <div className="bx">
                        <Link to="./Gallery"><img className="img-link"  src={colonel} alt='colonel'/></Link>
                        <p className="h4">Print a Book</p>
                        <p className='p text-center text-white'>connect your business site with Inklab Digital Printing For printing.</p>
                        <button className='btnpublish' onClick={handleRegisterRedirect}>Print Your Book</button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                    <div className="bx">
                        <Link to="./Gallery"><img className="img-link"  src={colonel} alt='colonel'/></Link>
                        <p className="h4">Publish a Book</p>
                        <p className='p text-center text-white'>have a book custom printed or publish a book and sell around the world.</p>
                        <button className='btnpublish' onClick={handleRegisterRedirect}>Publish Your Book</button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                    <div className="bx">
                        <Link to="./Gallery"><img className="img-link"  src={colonel} alt='colonel'/></Link>
                        <p className="h4">Sell Your Book</p>
                        <p className='p text-center text-white'>Sell your book internationally using Amazon.</p>
                        <button className='btnpublish' onClick={handleRegisterRedirect}>Sell Published Books</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sub;