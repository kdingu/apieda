import React from 'react';
import HeadingText from "../heading-text";
import ServicesGrid from "./services-grid";

const Services = () => {
    return (
        <div>
            <HeadingText text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
            <div className="mt-4"></div>
            <ServicesGrid />
        </div>
    );
};

export default Services;
