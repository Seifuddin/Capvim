import React, { useEffect, useRef, useState } from "react";
import './About.css';
import colonel from '../images/General_Service_Unit.jpg';

const About = () => {
    const [currentiIndex, setCurrentIndex] = useState(1);

    const cards = [
        { id: 1, image: colonel, content: 'Card 1' },
        { id: 2, image: colonel, content: 'Card 2' },
        { id: 3, image: colonel, content: 'Card 3' },
        { id: 4, image: colonel, content: 'Card 4' },
        { id: 5, image: colonel, content: 'Card 5' },
        { id: 5, image: colonel, content: 'Card 5' },
        { id: 5, image: colonel, content: 'Card 5' },
        { id: 5, image: colonel, content: 'Card 5' },
        { id: 5, image: colonel, content: 'Card 5' },
        { id: 5, image: colonel, content: 'Card 5' },
        { id: 5, image: colonel, content: 'Card 5' },
        { id: 5, image: colonel, content: 'Card 5' },
        { id: 5, image: colonel, content: 'Card 5' },
        { id: 5, image: colonel, content: 'Card 5' },
        { id: 5, image: colonel, content: 'Card 5' },
        { id: 5, image: colonel, content: 'Card 5' },
    ];

    const transitionRef = useRef(null);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setIsTransitioning(true);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setIsTransitioning(true);
    };

    const fullCards = [
        cards[cards.length - 1],
        ...cards,
        cards[0]
    ];

    useEffect(() => {
        if (currentiIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(cards.length);
            }, 500);
        } else if (currentiIndex === cards.length +1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 500);
        } else {
            setIsTransitioning(true);
        }
    }, [currentiIndex, cards.length]);

    return (
        <div className="slider-container">
            <div
                className="card-wrapper"
                style={{ transform: `translateX(-${currentiIndex * 320 - 160}px)`,
                         transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            
                }}
            >
                {fullCards.map((card, index) => (
                    <div key={index} className={`card ${currentiIndex === index ? 'active' : ''}`}>
                        <img src={card.image} alt={card.content} className="card-image" />
                        <p>{card.content}</p>
                    </div>
                ))}
            </div>

            <button className="slider-btn" onClick={handlePrev}>Prev</button>
            <button className="slider-btn" onClick={handleNext}>Next</button>
        </div>
    );
};

export default About;