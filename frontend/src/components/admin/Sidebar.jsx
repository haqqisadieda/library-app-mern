import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {
    return (
        <>
            <div className='flex'>
                <div className='flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r'>
                    <Link to='/dashboard'>
                        <h2 className='text-3xl font-semibold text-center text-slate-500'>
                            Dashboard
                        </h2>
                    </Link>
                    <div className='flex flex-col justify-between mt-6'>
                        <aside>
                            <ul>
                                <li>
                                    <Link
                                        to='/dashboard/books/'
                                        className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200'>
                                        <span className='mx-4 font-medium'>
                                            Books
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/dashboard/authors/'
                                        className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200'>
                                        <span className='mx-4 font-medium'>
                                            Authors
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/dashboard/categories/'
                                        className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200'>
                                        <span className='mx-4 font-medium'>
                                            Categories
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='#'
                                        className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200' /*onClick={logoutHandler.bind(this)}*/
                                    >
                                        <span className='mx-4 font-medium'>
                                            Logout
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
        </>
    );
}

export default Sidebar;
