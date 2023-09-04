import React from 'react';
import Main from '../components/Main.js';
import Row from '../components/Row.js';
import requests from '../Requests.js';

const Home = () => {
    return (
        <>
            <Main />
            <Row title='Popular' fetchURL={requests} />
            <Row title='Trending' fetchURL={requests} />
            <Row title='Top Rated' fetchURL={requests} />
            <Row title='Upcoming' fetchURL={requests} />
        </>
    );
};

export default Home;