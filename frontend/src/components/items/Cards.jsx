import React from 'react';

function Cards() {
    return (
        <div className='flex flex-wrap w-1/3 cursor-pointer'>
            <div className='w-full p-1'>
                <div className='flex justify-center'>
                    <div className='flex flex-col rounded-lg bg-white shadow-lg'>
                        <img
                            className='w-full xl:h-80 object-cover rounded-t-lg'
                            src={`http://127.0.0.1:3001/img/Ega.jpg`}
                            alt='BookImage'
                        />
                        <div className='p-6 flex flex-col justify-start'>
                            <h5 className='text-slate-600 text-base font-medium mb-2'>
                                Title
                            </h5>
                            <p className='text-slate-500 text-xs mb-2'>
                                Category
                            </p>
                            <p className='text-slate-600 text-sm font-medium mb-2'>
                                Author
                            </p>
                            <p className='text-slate-500 text-base'>Synopsis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
