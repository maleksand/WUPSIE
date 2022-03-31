import '../../App.css';
import { useState } from 'react';

function Dropdown(props) {

    const [display, setDisplay] = useState('none')

    function handleClick() {
        if (display == 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    return (
        <div onClick={handleClick}
            style={{ cursor: 'pointer', textDecorationLine: 'underline' }}
        >
            <h3>Menu</h3>
            <div style={{ display: display }}>
                {props.children}
            </div>
        </div>
    )
}
export { Dropdown }