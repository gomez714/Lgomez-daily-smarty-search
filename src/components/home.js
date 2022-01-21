import React, {useState, useEffect} from 'react';
import Logo from './logo';
import RecentPosts from './recent-posts';
import Searchbar from './searchbar';

const Home = () => {

    return (
        <main className='home'>
            <Logo />
            <Searchbar page='home'/>
            <RecentPosts />
        </main>
    )
}

export default Home;