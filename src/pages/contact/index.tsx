import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const cards = [
    { id: 1, title: 'Card 1', description: 'This is the first card' },
    { id: 2, title: 'Card 2', description: 'This is the second card' },
    { id: 3, title: 'Card 3', description: 'This is the third card' },
  ];

  return (
    <div id="contact" className="py-8">
      <h2 className="text-2xl font-bold mb-4">Contact Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <Link to={`/contact/${card.id}`} key={card.id}>
            <div className="p-4 border rounded shadow hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* <Outlet /> */}
       {/* Renders the ContactDetail component when a card is clicked */}
    </div>
  );
};

export default Contact;
