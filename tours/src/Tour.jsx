/* eslint-disable react/prop-types */
import { useState } from "react";

export function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  function handleReadMore() {
    setReadMore(!readMore);
  }

  function handleRemoveTour() {
    removeTour(id);
  }
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={handleReadMore}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={handleRemoveTour}>
          not interested
        </button>
      </footer>
    </article>
  );
}
