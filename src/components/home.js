import React, {useState, useEffect} from 'react';
import Logo from './logo';
import Searchbar from './searchbar';

const Home = () => {

    return (
        <main className='home'>
            <Logo />
            <Searchbar page='home'/>
        </main>
    )
}

export default Home;