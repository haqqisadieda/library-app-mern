import React from 'react';
import Booklist from './components/user/Booklist';
import Layout from './components/user/Layout';
import Search from './components/user/Search';

export default function App() {
    return (
        <>
            <Layout>
                <Search />
                <Booklist />
            </Layout>
        </>
    );
}
