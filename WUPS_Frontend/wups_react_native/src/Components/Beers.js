import React, { useState, useEffect } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Beers() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.punkapi.com/v2/beers');

    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      {items.map(item => 
        <h1 key={item.id}>
          <Link to={`/beer/${item.id}`}>{item.name}</Link>
          </h1>)}
    </div>
  )
}

export default Beers;