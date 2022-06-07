import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {
    function reloadHandler(e) {
        e.preventDefault();

        window.location.reload();
    }
    return (
        <div className='flex'>
            <div className='flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r'>
                <Link to='/'>
                    <h2
                        onClick={reloadHandler.bind(this)}
                        className='text-3xl font-semibold text-center text-slate-500'>
                        Library App
                    </h2>
                </Link>
                <div className='flex flex-col justify-between mt-6'>
                    <aside>
                        <ul>
                            <li>
                                <Link
                                    to='/'
                                    className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200'>
                                    <span className='mx-4 font-medium'>
                                        Books
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/dashboard/login'
                                    className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200'>
                                    <span className='mx-4 font-medium'>
                                        Login
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
            <div className='w-full h-full p-4 m-8 overflow-y-auto'>
                <div className='items-center justify-center p-10 border-4 border-dotted'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
