import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from './logo';
import RecentPosts from './recent-posts';
import Searchbar from './searchbar';

const Home = () => {
    let navigate = useNavigate();
    const handleSearchSubmit = (query) => {
        navigate('results', {state: `${query}`})
    }

    return (
        <main className='home'>
            <Logo />
            <Searchbar page='home' onSubmit={(query) => handleSearchSubmit(query)}/>
            <RecentPosts />
        </main>
    )
}

export default Home;