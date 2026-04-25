import React from 'react';

const ActivityCard = ({ title, date, category }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
  };

  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Category:</strong> {category}</p>
    </div>
  );
};

export default ActivityCard;
