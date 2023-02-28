import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/fetch";
import { Link } from "react-router-dom";

import "./coin.css";

const Coin = () => {
  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
  const [data, loaded] = useFetch(url);

  return (
    <div className="container">
      <div className="coinStyle">
        {loaded && <p>Loding ...</p>}
        {data?.name && (
          <>
            <p>{data.categories[0]}</p>
            <p>#{data.market_cap_rank}</p>
            <img src={data.image?.small} alt={data.symbol} />
            <p>{data.name}</p>
            <p>{data.market_data?.current_price?.eur}</p>
            <p>{data.description?.en}</p>
            <Link to="/">Go back</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Coin;
