import React from "react";

export const Prompt = (props) => {
    console.log(props.key,props.time)
    return(
        <div className="container">
            <p> > Please PRESS '{props.key || String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase()}' on your KEYBOARD for {props.time || "427"} ms.</p>
            <p>---</p>
        </div>
    )
}