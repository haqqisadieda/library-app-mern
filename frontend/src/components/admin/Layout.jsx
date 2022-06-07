import React from 'react';
import Sidebar from './Sidebar';

function Layout(props) {
    return (
        <>
            <Sidebar>{props.children}</Sidebar>
        </>
    );
}

export default Layout;
