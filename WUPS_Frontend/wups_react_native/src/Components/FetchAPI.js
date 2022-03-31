import react from 'react';
import React, { useState, useEffect } from 'react';

const url = 'http://localhost:3030/api/devices/25F92BC417E53B3F/measurements'


async function ManBeast (){

  const res = await fetch(url)
  const data = await res.json()
  
return data

}



ManBeast().then(data => {console.log(data)})