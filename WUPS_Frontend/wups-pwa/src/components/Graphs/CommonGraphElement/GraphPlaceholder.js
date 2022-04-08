import React from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';

const GraphPlaceholder = (prop) => {
    const onPressHandler = () => {
        if(prop.id===1){
        window.alert('Routing still not implemented')
        }else{
            window.alert('You are not routed')
        }

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