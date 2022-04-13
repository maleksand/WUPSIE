import React, {useState, useEffect} from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';




const GraphPlaceholder = (prop) => {
    const onPressHandler = () => {
        window.alert(prop.id)

    }


    return (
        
        <div className='graph-button'>
            <button onClick={onPressHandler} >
                <img src={logo} className="App-logo" alt="logo" />
                {/* <h1>this is for test {data}</h1> */}
            </button>
        </div>
    );
}


export default GraphPlaceholder;