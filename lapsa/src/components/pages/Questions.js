import React, { useState } from 'react';
import './Questions.css';  // Import the external CSS file

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.'
    },
    {
      question: 'How does useState work?',
      answer: 'useState is a Hook that lets you add state to functional components.'
    },
    {
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript that looks like HTML.'
    },
    {
      question: 'What is the virtual DOM?',
      answer: 'The virtual DOM is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM.'
    }
  ];

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleDropdown(index)}>
            {item.question}
            <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;