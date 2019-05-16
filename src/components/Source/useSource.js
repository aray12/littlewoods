import { useState, useEffect } from "react";
import useInterval from "react-useinterval";

export const useSource = () => {
  let [source, setSource] = useState({});

  const fetchSource = async () => {
    const data = await fetch(`/.netlify/functions/fetchLeaderboard`).then(res =>
      res.json()
    );

    setSource(data);
  };

  useEffect(fetchSource, []);

  useInterval(fetchSource, 10000);

  return source;
};
