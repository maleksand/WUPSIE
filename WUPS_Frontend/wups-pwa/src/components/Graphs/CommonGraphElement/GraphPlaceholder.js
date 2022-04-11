import React from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';


const GraphPlaceholder = (prop) => {
    const onPressHandler = () => {
        window.alert(prop.id)

    }
    return (
        // <div >
            <button id={prop.id} onClick={onPressHandler} className='graph-button'>
                <img src={logo} className="App-logo" alt="logo" />
            </button>
        // </div>
    );
}

export default GraphPlaceholder;