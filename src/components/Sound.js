import React, { useEffect } from 'react';

const Sound = ({ src }) => {
    useEffect(() => {
        const audio = new Audio(src);
        audio.play();
    }, [src]);

    return null;
};

export default Sound;