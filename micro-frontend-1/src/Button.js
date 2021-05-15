import React from 'react';

function Button() {
    const clickHandler = () => {
        alert("Hey there! This is from Micro frontend 1");
    }
    return (
        <button onClick={clickHandler}>Micro Frontend 1</button>
    )
}

export default Button;