import React from 'react';

function Search() {
    return (
        <section>
            <div className='flex justify-center'>
                <div className='mb-3 w-full'>
                    <div className='input-group relative flex items-stretch w-full mb-4'>
                        <input
                            type='search'
                            value='{keyword}'
                            className='form-control relative flex-auto min-w-0 w-full px-3 py-1.5 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-700 focus:bg-white focus:border-slate-600 focus:outline-none'
                            placeholder="Search Title or Atuhor's First Name or Author's Last Name or Categoy's Name"
                            aria-label='Search'
                            aria-describedby='button-addon3'
                        />
                        <button
                            className='btn inline-block px-6 py-2 border-2 border-slate-300 text-slate-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                            type='button'
                            id='button-addon3'>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Search;
