import React, {useEffect, useRef, useState} from "react";

export const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [now, setNow] = useState(false);

    const intervalRef = useRef(0);

    useEffect(() => {
        function handleKeyPress(event) {
            handleReset();
        }
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const handleStart = () => {
        setTimer(Date.now());
        setNow(Date.now());
        intervalRef.current = setInterval(() =>{
            setTimer(Date.now());
        }, 1);
    };

    let timePassed = Math.floor((timer-now)/60);
    const handleReset = () => {
        clearInterval(intervalRef.current)
    };

    useEffect(() => {
        handleStart();
    }, []); // Empty dependency array

    return(
        <p>{timePassed}</p>
    );
}