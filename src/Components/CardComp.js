import React from 'react';
import '../Styles/CardComp.css';


function CardComp({src, description, title, price}) {
    return (
        <div className = "card">
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
