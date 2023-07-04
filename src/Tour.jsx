import { useState } from 'react';

const Tour = ({ name, info, image, price, id, removeTour }) => {
  const [showFull, setShowFull] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {showFull ? info : info.substring(0, 240) + '...'}
          <button
            type="button"
            className="info-btn"
            onClick={() => {
              setShowFull(!showFull);
            }}
          >
            {showFull ? 'Show Less' : 'Show more'}
          </button>
        </p>
      </div>
      <button
        type="button"
        className="btn delete-btn"
        onClick={() => {
          removeTour(id);
        }}
      >
        Remove tour
      </button>
    </article>
  );
};
export default Tour;
