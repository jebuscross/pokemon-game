import React, { useEffect, useState } from 'react';

export const usePokemons = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return { data };
};
