import React from 'react'

const TextShine = (props) => {
    return (
        <span className=' animate-background-shine bg-[linear-gradient(110deg,#E3E1E1,45%,#1e293b,55%,#E3E1E1)] bg-[length:250%_100%] bg-clip-text text-xxl text-transparent font-bold'>
            {props.text}
        </span>
    );
};

export default TextShine;

