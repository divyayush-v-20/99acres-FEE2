import React from 'react';

function Card({ imageUrl, description }) {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;