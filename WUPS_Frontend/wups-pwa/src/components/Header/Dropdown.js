import '../../App.css';
import { useState } from 'react';

function Dropdown(props) {

    const [displayValue, setDisplay] = useState('none')

    function handleClick() {
        if (displayValue === 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    return (
        <div>
            <div onClick={handleClick} className="navButton">
                {/* <text onClick={handleClick} className="navButton">Menu</text> */}
                Menu
            </div>
            <div className="menu" style={{ display: displayValue }}>
                {props.children.map((menuItem, key) => {
                    return (
                        <div key={key}>
                            {menuItem}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export { Dropdown }