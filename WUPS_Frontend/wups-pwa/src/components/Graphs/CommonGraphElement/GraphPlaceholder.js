import React from 'react';
import logo from '../../../logo.svg';

const GraphPlaceholder = () => {
    const onPressHandler = () => {
        window.alert('Routing still not implemented')
    }
    return (
        <div>
            <button onClick={onPressHandler}>
                <img src={logo} className="App-logo" alt="logo" />
            </button>
        </div>
    );
}

export default GraphPlaceholder;