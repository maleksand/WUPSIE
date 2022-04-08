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
            <text onClick={handleClick} class="navButton">Menu</text>
            <div class="menu" style={{ display: displayValue }}>
                {props.children.map((menuItem) => {
                    console.log(menuItem)
                    return (
                        menuItem
                    )
                })}
            </div>
        </div>
    )
}
export { Dropdown }