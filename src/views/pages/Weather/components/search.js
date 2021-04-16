/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { actions } from '../../../../state/modules/weather/actions';

const SearchComponent = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [flag, setFlag] = useState(false);

    const handleInput = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    const handleSearchDateCurrentWeather = (e) => {
        if (e.key === 'Enter') {
            if (input === '') {
                // eslint-disable-next-line no-alert
                alert('please type a city name before you submit!!!🤷‍♂️🤷‍♂️🤷‍♂️');
            } else {
                dispatch(actions.getCurrentWeather(input));
                setFlag(true);
            }
        }
    };

    return (
        <div
            className={`sm:flex sm:justify-center w-full sm:px-8 lg:w-1/3 lg:mx-auto relative transform transition-all duration-1000 ${
                flag ? 'top-16' : 'top-36'
            }`}
        >
            <div className='flex items-center relative sm:w-full sm:h-32 sm:justify-center'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='absolute w-8 h-5 text-indigo-500 sm:right-2 sm:left-0 sm:w-16 sm:h-8'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path
                        fillRule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                        clipRule='evenodd'
                    />
                </svg>
                <input
                    onKeyPress={(e) => handleSearchDateCurrentWeather(e)}
                    onChange={(e) => handleInput(e)}
                    value={input}
                    className='shadow-lg rounded-full w-full text-blur focus:text-black focus:outline-none pl-8 pr-4 py-2 placeholder-gray-300 text-md sm:h-12 sm:text-xl sm:pl-16'
                    placeholder='Enter city name...'
                />
            </div>
        </div>
    );
};

export default React.memo(SearchComponent);
