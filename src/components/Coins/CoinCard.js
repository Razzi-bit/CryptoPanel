import React from "react";

import "./coinCard.css";

const CoinCard = ({ coin }) => {
  return (
    <div className="coinCardStyle">
      <p>{coin.name}</p>
      <p>{coin.current_price}</p>
      <img src={coin.image} alt={coin.symbol} width="100px" height="auto" />
    </div>
  );
};

export default CoinCard;
