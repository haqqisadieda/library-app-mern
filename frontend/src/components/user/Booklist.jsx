import React from 'react';
import Cards from '../items/Cards';

function Booklist() {
    return (
        <section className='overflow-hidden text-slate-600'>
            <div className='container px-5 py-2 mx-auto'>
                <div className='flex flex-wrap  -m-1'>
                    <Cards />
                </div>
            </div>
        </section>
    );
}

export default Booklist;
