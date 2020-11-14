import React, { useState } from 'react';
import '../Styles/Search.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {DateRangePicker} from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import {useStateValue} from '../StateProvider';
import {useHistory} from 'react-router-dom';


function Search() {

    const [{}, dispatch] = useStateValue();
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
        
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const setDates = (e) => {
        e.preventDefault();
        dispatch({
            type : 'setDates',
            startDate: startDate,
            endDate: endDate,
        })
        console.log("Start---->", startDate)
    }
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className = "search">
            <DateRangePicker ranges = {[selectionRange]} onChange = {handleSelect}/>
            <Button onClick = {setDates}>Confirm dates</Button>
        </div>
    )
}

export default Search;
