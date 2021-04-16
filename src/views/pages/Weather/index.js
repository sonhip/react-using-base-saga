import React, { useState } from 'react';

import SearchComponent from './components/search';
import ResultComponent from './components/result';

const Weather = () => {
    const [hour, setHour] = useState(25);
    const handleHourChangeBg = (time) => {
        if (time !== null) {
            const x = parseInt(10, time.split('').splice(0, 2).join(''));
            setHour(x);
        }
    };
    return (
        <div
            className={`h-screen ${
                hour > 12 ? 'bg-night' : 'bg-noon'
            }  bg-contain`}
        >
            <div className='mx-4 h-full flex flex-col items-center sm:pt-32 sm:px-16 lg:p-0'>
                <div className='w-full py-5 '>
                    <h1
                        className={`font-normal mt-8 text-xl absolute transform transition-all duration-1000  ${
                            hour > 12 ? 'text-white' : 'text-black'
                        } ${
                            hour === 25
                                ? 'left-1/2 -translate-x-1/2 '
                                : 'left-4'
                        } uppercase`}
                    >
                        Weather App
                    </h1>
                </div>
                <div
                    className={` mt-4 w-full mt-16 ${
                        hour > 12 ? 'text-white' : 'text-black'
                    } `}
                >
                    <div>
                        <SearchComponent />
                        <ResultComponent getTimeCurrent={handleHourChangeBg} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;

// className={`flex flex-col ${
//     hour > 12 ? 'text-white' : 'text-black'
// } mt-4 w-full mt-16 relative transform transition-all duration-1000  ${
//     hour === 25 ? 'top-16 ' : 'top-0 '
// }`}
