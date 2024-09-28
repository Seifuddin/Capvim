import React, { useState } from "react";
import './ModalImage.css';
import colonel from '../images/General_Service_Unit.jpg';

function ModalImg() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const [caption, setCaption] = useState("");

    const openModal = (imageSrc, imageAlt) => {
      setModalImage(imageSrc);
      setCaption(imageAlt);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <div>
        <h2>Image Modal</h2>

        <img
          id="myImg"
          src={colonel}
          alt="Coln"
          style={{ width: "100%", maxWidth: "300px" }}
          onClick={() => openModal(colonel, "Coln")}
        />

        {isModalOpen && (
          <div id="myModal" className="modal">
            <span className="close" onClick={closeModal}>&times;</span>
            <img className="modal-content" id="img01" src={modalImage} alt={caption} />
            <div id="caption">{caption}</div>
          </div>
        )}
      </div>
    );
  };

export default ModalImg;