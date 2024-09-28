import React from "react";
import './Gallery.css';
import colonel from '../images/General_Service_Unit.jpg';

const Gallery = () => {
    return (
        <div className="container-about bg-primary">
            <h1>Capvim Gallery</h1>
            <p>Welcome to Capvim Gallery</p>
            <img  src={colonel} alt='colonel'/>

        </div>
    );
};

export default Gallery;