import React from "react";
import './App.css';
import { useState, useEffect, useRef  } from 'react';
import { Prompt } from './components/Prompt.js'

function App() {
    const [task, setTask] = useState([{key_pressed: "S", time: 427}]);
    const promptReference = useRef(null);

    const changePrompt = () => {
        const taskMsg = {
            key_pressed: String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase(),
            time: Math.floor(Math.random() * 901)
        }
        setTask(prevTask => [...prevTask, taskMsg])
    }

    const taskList = task.map(e => <Prompt
        key_pressed={e.key_pressed}
        time={e.time}/>)

    useEffect(() => {
        promptReference.current?.scrollIntoView();
        function handleKeyPress(event) {
            if (event.key.toUpperCase()===task[task.length - 1]["key_pressed"]){
                changePrompt();
            }
            //console.log(event.key.toUpperCase());
            //console.log(task[task.length - 1]["key_pressed"]);
            //changePrompt();
        }
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [task]);
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
                <span> > <span id="Flickering_box">▮</span></span>
                <div ref={promptReference}></div>
            </div>
        </div>
    </div>
  );
}

export default App;
