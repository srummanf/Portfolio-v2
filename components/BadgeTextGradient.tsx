import React from 'react'

const BadgeTextGradient = (props) => {
    return (
        <span className='inline-flex cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium backdrop-blur-3xl'>
            <span className='bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent   '>
                {props.text}
            </span>
        </span>
    );
};

export default BadgeTextGradient;

