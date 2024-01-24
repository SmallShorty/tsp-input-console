import React from "react";
import './App.css';
import { useState, useEffect, useRef  } from 'react';
import { Prompt } from './components/Prompt.js'
const Timer = () => {
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

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
  );
}
function App() {
    const [task, setTask] = useState([]);

    const changePrompt = () => {
        const taskMsg = {
            time: Math.floor(Math.random() * 901),
            key: String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase()
        }
        setTask(prevTask => [...prevTask, taskMsg]);
    }

    const taskList = task.map(e => <Prompt
        key={e.key}
        time={e.time}/>)

    useEffect(() => {
        function handleKeyPress(event) {
            changePrompt();
            console.log(task);
        }
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
  return (
    <div className="App">
        <div className="Console">
            <div className="Header">
                <p>>-Employee #427 Instructional Prompt</p>
                <p>v. 1.81.7+</p>
            </div>
            <hr />
            <div className="Tasks">
                <p>---</p>
                {taskList}
            </div>
        </div>
    </div>
  );
}

export default App;
