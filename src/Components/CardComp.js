import React from 'react';
import '../Styles/CardComp.css';


function CardComp({src, description, title, price, nocard}) {
    return (
        <div className = {`card ${nocard && 'nocard'}`}>
            <img src = {src} alt = ""/>
            <div className = "info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default CardComp;
