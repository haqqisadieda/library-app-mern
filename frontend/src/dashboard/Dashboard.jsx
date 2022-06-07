import React from 'react';
import Layout from '../components/admin/Layout';
import DashboardComponent from '../components/admin/Dashboard';

function Dashboard(props) {
    return (
        <>
            <Layout>
                <div className='w-full h-full items-center justify-center text-center'>
                    <h1 className='text-2xl'>Hello, Admin.</h1>
                </div>
                <DashboardComponent props={props} />
            </Layout>
        </>
    );
}

export default Dashboard;
