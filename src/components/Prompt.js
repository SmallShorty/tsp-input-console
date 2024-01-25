import React from "react";

export const Prompt = (props) => {
    return(
        <div className="Prompt_Message">
            <p> > Please PRESS '{props.key_pressed || "S"}' on your KEYBOARD for {props.time} ms.</p>
            <br/>
            <p>---</p>
        </div>
    )
}