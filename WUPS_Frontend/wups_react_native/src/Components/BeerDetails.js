import React, { useState, useEffect} from 'react';
import '../App.css';
import {useParams} from 'react-router-dom';

function BeerDetails() {

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});
  
  const id = useParams();
  console.log(id);
  
  const fetchItem = async () => {
    const fetchedItem = await fetch(`https://api.punkapi.com/v2/beers/${id.id}`);
   
    const i = await fetchedItem.json();
    setItem(i[0]);
    
  };
  
  console.log(item[0]);
  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{item.tagline}</h2>
    </div>
  )
}

export default BeerDetails;