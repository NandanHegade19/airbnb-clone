import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import '../Styles/Banner.css';
import Search from './Search';


function Banner() {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className = "banner">
            <div className = "search">
                {showSearch && <Search/>}
                <Button variant="outlined" className = "selectDatesBtn" onClick = {() => setShowSearch(!showSearch)}>
                    {showSearch ? "Hide" : "Search Dates"} </Button>
            </div>
            <div className = "info">
                <h1>Get out and streach your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
