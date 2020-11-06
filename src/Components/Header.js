import React from 'react';
import '../Styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className = "header">
            <img className = "logo" src = "https://www.brandeps.com/logo-download/A/Airbnb-logo-vector-01.svg"/>
            <div className = "searchbar">
                <input type = "text"/>
                <SearchIcon/>
            </div>
            <div className = "right">
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header;
