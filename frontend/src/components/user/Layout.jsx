import React from 'react';
import Sidebar from './Sidebar';

function Layout(props) {
    return (
        <div>
            <Sidebar>{props.children}</Sidebar>
        </div>
    );
}

export default Layout;
