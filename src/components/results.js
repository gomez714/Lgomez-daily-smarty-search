import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./logo";
import Searchbar from "./searchbar";
import ResultsPosts from "./results-posts";
import { useLocation } from "react-router-dom";

const Results = () => {
    const [searchResults, setSearchResults] = useState([]);
    
    let location = useLocation();
    
    const fetchResults = async (query) => {
        const res = await axios.get(`https://api.dailysmarty.com/search?q=${query}`)
        setSearchResults(res.data.posts);
    }

    React.useEffect(() => {
        fetchResults(location.state);
        location.state = null;
    }, [])

    return (
        <div className="results">
            <Logo customSize={55} />
            <Searchbar page='results' onSubmit={(query) => fetchResults(query)}/>
            <ResultsPosts posts={searchResults}/>
        </div>
    )
}

export default Results;