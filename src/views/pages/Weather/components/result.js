/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as reselect from 'state/modules/weather/reselect';
import { isEmptyObject } from 'state/modules/weather/helper';
import { Loading } from 'utils/Loadable/index';
import PropTypes from 'prop-types';

const ResultComponent = (props) => {
    const { loading, dataWeather, error } = useSelector(
        createStructuredSelector({
            loading: reselect.loadingSelector,
            dataWeather: reselect.dataCurrentWeatherSelector,
            error: reselect.errorSelector,
        }),
    );
    const getCurrentDate = () => {
        let gsDayNames = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];

        const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        const today = new Date();
        const dayName = gsDayNames[today.getDay()];
        const day = today.getDate();
        const month = monthNames[today.getMonth()];
        return `${dayName} ${day} ${month}`;
    };

    const getTime = (date) => {
        const timezone = -new Date().getTimezoneOffset() / 60;

        let hour = date.getHours() - timezone + dataWeather.timezone / 3600;
        if (date.getDate() > new Date().getDate() || hour < 0) {
            hour += 24;
        }
        const h = String(hour).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${h}:${minutes}`;
    };
    const { getTimeCurrent } = props;
    if (!isEmptyObject(dataWeather)) {
        getTimeCurrent(getTime(new Date(dataWeather.dt * 1000)));
    }
    if (!isEmptyObject(error)) {
        return (
            <div className='flex justify-center items-center bg-form text-white text-sm rounded mt-16 p-4 sm:text-xl sm:p-8'>
                <p>
                    😢😢😢 Sorry, the specificed city was not found! Please try
                    a gain!
                </p>
            </div>
        );
    }
    if (loading) {
        return <>{Loading}</>;
    }
    return (
        <>
            {!isEmptyObject(dataWeather) && (
                <div
                    className={`flex flex-col lg:px-64 mt-4 w-full mt-16 relative transform transition-all duration-1000  ${
                        !dataWeather ? 'top-16 ' : 'top-0 '
                    }`}
                >
                    <div className='mt-8'>
                        <div className='mt-4 sm:text-5xl'>
                            <h2 className='font-medium text-xl sm:text-4xl'>
                                {dataWeather.name}, {dataWeather.country}
                            </h2>
                            <p className='font-normal mt-2 sm:text-xl'>
                                {getCurrentDate()}
                            </p>
                        </div>
                        <div className='sm:flex-col'>
                            <div className='flex items-center sm:justify-center sm:w-1/2 sm:text-3xl lg:my-16 lg:justify-start'>
                                <div className='sm:w-32 lg:mt-16'>
                                    <img
                                        className='sm:w-full'
                                        src={`http://openweathermap.org/img/wn/${dataWeather.icon}@2x.png`}
                                        alt='des-img'
                                    />
                                </div>
                                <div className='lg:mt-16 lg:ml-8'>
                                    <h1 className='text-4xl sm:text-5xl'>
                                        {dataWeather.temp.toFixed(0)}
                                        &deg;
                                    </h1>
                                    <p className='sm:text-xl sm:mt-4 '>
                                        {dataWeather.des}
                                    </p>
                                </div>
                            </div>
                            <div className='flex sm:w-full py-4 sm:p-0 sm:text-xl sm:w-1/2 mt-8 bg-form justify-around rounded text-sm'>
                                <div className='sm:mt-4'>
                                    <div>
                                        <h3>{dataWeather.temp_max}&deg;</h3>
                                        <p>Hight</p>
                                    </div>
                                    <div className='mt-4 sm:mt-8 sm:mb-4 '>
                                        <h3>{dataWeather.temp_min}&deg;</h3>
                                        <p>Low</p>
                                    </div>
                                </div>
                                <div className='sm:mt-4'>
                                    <div>
                                        <h3>{dataWeather.speed}mph</h3>
                                        <p>Wind</p>
                                    </div>
                                    <div className='mt-4 sm:mt-8 sm:mb-4'>
                                        <h3>{dataWeather.humidity}%</h3>
                                        <p>Rain</p>
                                    </div>
                                </div>
                                <div className='sm:mt-4'>
                                    <div>
                                        <h3>
                                            {' '}
                                            {getTime(
                                                new Date(
                                                    dataWeather.sunrise * 1000,
                                                ),
                                            )}
                                        </h3>
                                        <p>Sunrise</p>
                                    </div>
                                    <div className='mt-4 sm:mt-8 sm:mb-4'>
                                        <h3>
                                            {' '}
                                            {getTime(
                                                new Date(
                                                    dataWeather.sunset * 1000,
                                                ),
                                            )}
                                        </h3>
                                        <p>Sunset</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

ResultComponent.propTypes = {
    getTimeCurrent: PropTypes.func.isRequired,
};

export default React.memo(ResultComponent);
