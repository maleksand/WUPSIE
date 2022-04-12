import '../../App.css';
import { useState } from 'react';

function Dropdown(props) {

    const [displayValue, setDisplay] = useState('none')

    function handleClick() {
        if (displayValue === 'none') {
            setDisplay('flex')
        } else {
            setDisplay('none')
        }
    }

    return (
        <div>
            <span onClick={handleClick} className="navButton">Menu</span>
            <div className="menu" style={{ display: displayValue }}>
                {props.children.map((menuItem) => {
                    return (
                        menuItem
                    )
                })}
            </div>
        </div>
    )
}
export { Dropdown }