import React, { useState, useEffect } from 'react';
import '../App.css';

function Profile() {

  useEffect(() => {
    fetchItems();
    console.log(item);
  }, []);

  const [item, setItem] =useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.punkapi.com/v2/beers/1');
   
    const i = await data.json();
    setItem(i[0]);
  };
  
  
  return (
    <div >
      <h1>Profile</h1>
      <h2>{item.name}</h2>
    </div>
  );
}

export default Profile;