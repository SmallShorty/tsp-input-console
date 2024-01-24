import React from "react";

import { useState, useEffect  } from 'react';

export const Prompt = (input) => {
    return(
        <div className="container">
            <p> > Please PRESS '{input.key || "S"}' on your KEYBOARD for {input.time || "427"} ms.</p>
            <p>---</p>
        </div>
    )
}