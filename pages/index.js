import React from 'react';
import Layout from "../components/layout";
import Headline from "../components/headline";
import Presentation from "../components/presentation";
import Services from "../components/services";
import Contact from "../components/contact";

const Index = () => {
    return (
        <Layout>
            <Headline buttonText={'TEST TEMP Temp temp!'} button variant={'primary'} />
            <div className="mt-60"></div>
            <Presentation />
            <div className="mt-60"></div>
            <Headline button={false} variant={'secondary'} />
            <div className="mt-40"></div>
            <Services />
            <div className="mt-60"></div>
            <Contact />
        </Layout>
    );
};

export default Index;
