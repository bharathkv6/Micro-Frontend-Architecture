import React from 'react';

const app = props => {
    const clickHandler = () => {
        alert("Hey there! This is from Micro frontend 2");
    }
    return (
        <button onClick={clickHandler}>Micro Frontend 2</button>
    )
}

export default app;