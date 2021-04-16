import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='w-full bg-navbar text-text h-16 fixed'>
            <div className='flex items-center h-full font-medium uppercase justify-end pr-16'>
                <Link
                    to='/'
                    className='bg-button block px-4 py-2 rounded mr-4 transition-all duration-200 transform hover:scale-110 hover:bg-hover'
                >
                    Home
                </Link>
                <Link
                    to='/weather'
                    className='bg-button block px-4 py-2 rounded mr-4 transition-all duration-200 transform hover:scale-110 hover:bg-hover'
                >
                    Weather
                </Link>
            </div>
        </nav>
    );
};
export default React.memo(Header);
