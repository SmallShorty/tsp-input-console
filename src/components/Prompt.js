import React from "react";

import { useState, useEffect  } from 'react';

export const Prompt = () => {
    const [key, setKey] = useState('');
    const [time, setTime] = useState(0);
    useEffect(() => {
        function handleKeyPress(event) {
            //setKey(event.key);
            changePrompt();
        }
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    return(
        <div className="container">
            <p>---</p>
            <p> > Please PRESS '{key || "S"}' on your KEYBOARD for {time || "427"} ms.</p>
            <p>---</p>
        </div>
    )
    function changePrompt() {
        setKey(String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase());
        setTime(Math.floor(Math.random() * 901) );
    }
}