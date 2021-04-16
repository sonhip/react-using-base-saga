import Loadable from '../utils/Loadable';

// const HomePage = Loadable(() =>
//     import(/* webpackChunkName: "js/home" */ '@Views/pages/Home'),
// );
const WeatherPage = Loadable(() =>
    import(/* webpackChunkName: "js/home" */ '@Views/pages/Weather'),
);

const routers = [
    {
        path: '/',
        component: WeatherPage,
    },
    // {
    //     path: '/',
    //     component: HomePage,
    // },
];

export default routers;
