import React from 'react';
import { useNavigate } from 'react-router-dom'; // Used inside button onClick
import dishImage1 from './images/greek-salad.png';
import dishImage2 from './images/bruschetta.png';
import dishImage3 from './images/lemon-cake.png';

// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

export default function Highlights() {

  const navigate = useNavigate();

  const specials = [
    {
      name: 'Greek Salad',
      description: 'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: '$10.99',
      image: dishImage1,
    },
    {
      name: 'Bruschetta',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      price: '$6.99',
      image: dishImage2,
    },
    {
      name: 'Lemon Cake',
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: '$5.99',
      image: dishImage3,
    },
  ];

  return (
    <section id="highlights">
      <div className="highlights-header">
        <h2>This Week's Specials</h2>
        <button
          onClick={() => navigate('/menu')}
          aria-label="Online Menu Button"
        >
          Online Menu
        </button>
      </div>
      <div className="specials-container">
        {specials.map((special, index) => (
          <div key={index} className="special-item">
            <img src={special.image} alt={special.name} />
            <h3>{special.name}</h3>
            <p>{special.description}</p>
            <p>{special.price}</p>
            <button
              className="order-button"
              onClick={() => navigate('/order-online')}
              aria-label="Order Online Button"
            >
              Order Online
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
