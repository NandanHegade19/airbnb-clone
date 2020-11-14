import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import '../Styles/Banner.css';
import {useHistory, Link} from 'react-router-dom';
import Header from './Header';


function Banner() {

    const history = useHistory()

    const searchPage = (e) => {
        e.preventDefault();
        history.push("/search")
    }
    return (
        <div className = "banner">
            <Header/>
            <div className = "info">
                <h1>Get out and streach your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button variant="outlined" onClick = {searchPage}>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
