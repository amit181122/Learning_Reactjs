import React,{ useState } from 'react';
import './Button.css'

const ToggleButton = () => {
    const [button, setButton] = useState(false);

    const handleToggle = () => {
        setButton(!button);
    }

    return (
        <button className={`toggle-button ${button ? 'red' : 'green'}`} onClick={handleToggle}>
            {button ? 'OFF' : 'ON'}
        </button>
    )
}

export default ToggleButton;
