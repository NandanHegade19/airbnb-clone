import { Button } from '@material-ui/core';
import React from 'react';
import '../Styles/SearchResultsPage.css';
import SearchResult from './SearchResult';
import {useStateValue} from '../StateProvider';


function SearchResultsPage() {
    const [state, dispatch] = useStateValue();

    return (
        <div className='searchResultsPage'>
            <div className='info'>
                <p>{Math.floor(Math.random()*100)} stays · near {state.place} · for {state.guests} Guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Entire townhouse. Lake Buena Vista"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="$72 / night"
            />

            <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Entire house in Sarasota"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="$90 / night"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Entire condominium in Seista Key"
                title="Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="$135 / night"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/7aeb00be-c2ec-4d97-a2e8-e9b44e84d645.jpg?aki_policy=x_large"
                location="Beachfront condo in Key West"
                title="5 mins to beach, Southmost Point"
                description="6 guest · 2 bedroom · 3 bed · 2  bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="$255 / night"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in Downtown of Miami"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="$120 / night"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Entire house in Hollywood"
                title="The Lagoon side In Hollywood, Miami"
                description="8 guest · 3 bedroom · 4 bed · 3 shared bathrooms · Wifi · Kitchen · Washing Machine"
                star={4.23}
                price="$300 / night"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in South Miami beach"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1 bathroom · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.85}
                price="$90 / night"
            />
        </div>
    )
}

export default SearchResultsPage
