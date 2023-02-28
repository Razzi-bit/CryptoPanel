import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    setLoaded(true);
    try {
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
      setLoaded(false);
    } catch (error) {
      console.log("error", error);
      setLoaded(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, loaded];
};

export default useFetch;
