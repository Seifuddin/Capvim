import React from "react";
import colonel from '../images/General_Service_Unit.jpg';
import ModalImage from "./ModalImage";
import "./ModalImage.css";

const Galley = () => {
    const images = [
        { url: colonel, alt: 'Image 1'},
    ];
  
    return (
        <div>
            <h2>Image Gallery</h2>
            <div className="galery-container">
                {images.map((image, index) => (
                    <ModalImage
                     key={index}
                     imageUrl={image.url}
                     altText={image.alt} 
                    />
                ))}
            </div>
        </div>
    );
  };
  
export default Galley;