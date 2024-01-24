import React from "react";
import './App.css';
import { useState, useEffect, useRef  } from 'react';
import { Prompt } from './components/Prompt.js'

function App() {
    const [task, setTask] = useState([{key: "S", time: 427}]);

    console.log(task)
    const changePrompt = () => {
        const taskMsg = {
            key: String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase(),
            time: Math.floor(Math.random() * 901),
        }
        setTask(prevTask => [...prevTask, taskMsg])
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
