import React from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';

const GraphPlaceholder = () => {
    const onPressHandler = () => {
        window.alert('Routing still not implemented')
    }
    return (
        // <div >
            <button onClick={onPressHandler} className='graph-button'>
                <img src={logo} className="App-logo" alt="logo" />
            </button>
        // </div>
    );
}

export default GraphPlaceholder;