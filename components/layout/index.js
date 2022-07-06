import React from 'react';
import styles from './styles.module.css'
import Header from "../header";
import Footer from "../footer";

const Layout = ({children}) => {
    return (
        <>
            <Header fixed />
            <div className={`max-w-5xl m-auto pb-20 pt-40`}>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;
