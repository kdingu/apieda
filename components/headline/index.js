import React from 'react';
import Button from "../button";

const Headline = ({
                      headline = 'Lorem ipsum dolores.',
                      description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                      buttonText = 'Lorem ipsum dolores!',
                      button = true,
                      variant = 'primary'
                  }) => {
    return (
        <div className={`font-black`}>
            <h1 className={`leading-tight text-7xl ${variant === 'primary' ? 'text-green' : 'text-white'}`}>{headline}</h1>
            <h2 className={`leading-tight text-7xl text-slate-500 ${variant === 'primary' ? 'opacity-70' : 'opacity-50'}`}>{description}</h2>
            {button && (
                <div className={`mt-14`}>
                    <Button animated={true} size={'4xl'}>{buttonText}</Button>
                </div>
            )}
        </div>
    );
};

export default Headline;
