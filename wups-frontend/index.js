import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import GraphHotWater from './HotWater';
import GraphColdWater from './ColdWater';
// import Graph from './App';
// import MappingTest from './Mappingtest';

ReactDOM.render(
  <React.StrictMode>
    <GraphHotWater />
    <GraphColdWater />
    {/* <Graph /> */}
  </React.StrictMode>,
  document.getElementById('root')
);