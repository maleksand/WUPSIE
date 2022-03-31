import React, { useState, useEffect } from 'react';

const url = 'http://localhost:3030/api/devices/25F92BC417E53B3F/measurements'


  
function FetchAPI() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(url);

    const items = await data.json();
// console.log(items);
    setItems(items);
  };

  return (
items
  )
}

console.log(FetchAPI())

export default FetchAPI;