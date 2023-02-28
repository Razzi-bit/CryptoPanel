import React from "react";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/fetch";

import Navbar from "./components/NavBar/Navbar";
import CoinSection from "./components/Coins/CoinsSection";
import Coin from "./pages/coin";

function App() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  const [data] = useFetch(url);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CoinSection coins={data} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
        <Route path="*" element={<p>Pagina niet gewonden</p>} />
      </Routes>
    </>
  );
}

export default App;
