import React, {useState, useEffect} from 'react';
import '../Styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Search from './Search';
import {useStateValue} from '../StateProvider';
import PeopleIcon from '@material-ui/icons/People';
import IconButton from '@material-ui/core/IconButton';
import {useHistory} from 'react-router-dom';


function Header() {
    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [guests, setGuests] = useState('');
    const [place, setPlace] = useState('');
    const [{}, dispatch] = useStateValue();
    const history = useHistory();

    const setSearch = (e) => {
        e.preventDefault();
        dispatch({
            type : 'setPlace',
            guests: guests,
            place: place,
        })
        history.push('/search');
    }
    //black nav abr on scroll of 100px
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 400){
                setShow(true);
            }else{
                setShow(false);
            }
        });
        return() => {
            window.removeEventListener("scroll", ()=>{});
        };
    }, []);

    return (
        <div className = {`header ${show && "header__white"}`}>
            <img className = "logo" src = "https://assets.brandfolder.com/ogf5aiyi/original/airbnb%20horizontal%20lockup%20white%20print.png"/>
            <div className = "searchbar">
                <input type = "text" placeholder = "Where to?" value={place} onChange = {e => setPlace(e.target.value)} />
                <PeopleIcon />
                <input type = "text" placeholder = "No of Guests" value={guests} onChange = {e => setGuests(e.target.value)} />
                
                {showSearch && <Search/>}
                <Button className = "selectDatesBtn" onClick = {() => setShowSearch(!showSearch)}>
                    {showSearch ? "Hide Dates" : "Show Dates"} </Button>
                <IconButton className = "searchbtn" onClick = {setSearch}><SearchIcon /></IconButton>
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
