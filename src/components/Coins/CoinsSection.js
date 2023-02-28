import React, { useState } from "react";
import { Link } from "react-router-dom";

import CoinCard from "./CoinCard";
import Coin from "../../pages/coin";
import "./coinsSection.css";

const CoinSection = ({ coins }) => {
  const [searchInput, setSearchInput] = useState("");
  const [soortDirection, setSoortDirection] = useState(false);

  const handelSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const search = (coins) => {
    return coins?.filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.current_price.toString().toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  const soort = (coins, backwards) => {
    return coins?.sort((a, b) => {
      if (backwards) {
        return a.current_price - b.current_price;
      } else {
        return b.current_price - a.current_price;
      }
    });
  };

  return (
    <div className="container">
      <div className="searchContainer">
        <p onClick={() => setSoortDirection(false)}>Hoogste prijs</p>
        <div className="searchBar">
          <input type="search" name="search" onChange={handelSearch} value={searchInput} />
        </div>
        <p onClick={() => setSoortDirection(true)}>Laagste prijs</p>
      </div>
      <div className="coinsSectionStyle">
        {soort(search(coins), soortDirection).map((coin) => {
          return (
            <Link
              key={coin.id}
              to={`/coin/${coin.id}`}
              element={<Coin />}
              style={{ textDecoration: "none" }}
            >
              <CoinCard coin={coin} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CoinSection;
