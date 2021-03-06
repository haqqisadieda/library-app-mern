import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/user/Layout';

function Login() {
    return (
        <>
            <Layout>
                <div className='bg-white shadow-md rounded px-8 pt-6 mb-4 flex flex-col'>
                    <h1 className='text-2xl text-slate-600 font-semibold mb-5 text-center uppercase space-x-8'>
                        Login
                    </h1>
                    <form>
                        <div className='mb-4'>
                            <label
                                className='block text-gray-600 text-sm font-bold mb-2'
                                htmlFor='email'>
                                Email
                            </label>
                            <input
                                // onChange={fieldsHandler.bind(this)}
                                type='email'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-600'
                                id='email'
                                name='email'
                                placeholder='Email'
                            />
                        </div>
                        <div className='mb-6'>
                            <label
                                className='block text-gray-600 text-sm font-bold mb-2'
                                htmlFor='password'>
                                Password
                            </label>
                            <input
                                // onChange={fieldsHandler.bind(this)}
                                type='password'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-600'
                                id='password'
                                name='password'
                                placeholder='****************'
                            />
                            {/* <p className="text-sm mt-1 px-2 text-red-500">
                            {fields.error}
                        </p> */}
                        </div>
                        <div className='flex items-center justify-between mt-5 mb-6'>
                            <div className='w-6/12'>
                                <button
                                    className='bg-slate-600 hover:bg-opacity-60 text-white font-bold py-2 px-4 rounded'
                                    type='submit'>
                                    Login
                                </button>
                            </div>
                            <div className='w-6/12 text-right'>
                                <Link
                                    to='/dashboard/register'
                                    className='text-blue-500 underline'>
                                    Register
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
}

export default Login;
