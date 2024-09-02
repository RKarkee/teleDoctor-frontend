import React from 'react';
import { useParams } from 'react-router-dom';

const ContactDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div id="contact-detail" className="py-8">
      <h2 className="text-2xl font-bold mb-4">Contact Detail Page</h2>
      <p>Showing details for card with ID: {id}</p>
      {/* Fetch and display more data based on the ID if needed */}
    </div>
  );
};

export default ContactDetail;
