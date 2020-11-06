import React from 'react';
import '../Styles/HomePage.css';
import Banner from './Banner';
import CardComp from './CardComp';


function HomePage() {
    return (
        <div className = "home">
            <Banner />
            <div className = "section">
                <CardComp src = "https://a0.muscache.com/im/pictures/48883b25-9576-4190-9630-e0a289033426.jpg?aki_policy=large"
                    title = "Stylish Creekside Cottage | 2 bikes | Wine&Snacks"
                    description = "Recharge from your Austin fun in our urban creekside home. Unique and quirky, but full of comfy details."
                    price = "$104/night"/>
                <CardComp src = "https://a0.muscache.com/im/pictures/d80ed78f-67fd-4b93-9d0d-ea244fe3a522.jpg?aki_policy=large"
                    title = "Three Brown Dog Barn, Three Brown Dog Farm, LLC"
                    description = "Relax in a rustic barn loft nestled in beautiful Virginia woods, hills, and pastures. A remote spot with quick access to Shenandoah National Park, orchards, breweries, wineries and more."
                    price = "$150/night"/>
                <CardComp src = "https://a0.muscache.com/im/pictures/c1c79f3a-4b2f-471b-9028-023c26dc22f5.jpg?aki_policy=large"
                    title = "The BoHo Box Hop - Hocking Hills"
                    description = "You will have all the luxuries of a secluded getaway with solitude and peace while being only a few miles from the main highway (Route 33) and close to all that Hocking Hills has to offer."
                    price = "$246/night"/>
            </div>
            <div className = "section">
            <CardComp src = "https://a0.muscache.com/im/pictures/48883b25-9576-4190-9630-e0a289033426.jpg?aki_policy=large"
                    title = "Stylish Creekside Cottage | 2 bikes | Wine&Snacks"
                    description = "Recharge from your Austin fun in our urban creekside home. Unique and quirky, but full of comfy details."
                    price = "$104/night"/>
                <CardComp src = "https://a0.muscache.com/im/pictures/d80ed78f-67fd-4b93-9d0d-ea244fe3a522.jpg?aki_policy=large"
                    title = "Three Brown Dog Barn, Three Brown Dog Farm, LLC"
                    description = "Relax in a rustic barn loft nestled in beautiful Virginia woods, hills, and pastures. A remote spot with quick access to Shenandoah National Park, orchards, breweries, wineries and more."
                    price = "$150/night"/>
                <CardComp src = "https://a0.muscache.com/im/pictures/c1c79f3a-4b2f-471b-9028-023c26dc22f5.jpg?aki_policy=large"
                    title = "The BoHo Box Hop - Hocking Hills"
                    description = "You will have all the luxuries of a secluded getaway with solitude and peace while being only a few miles from the main highway (Route 33) and close to all that Hocking Hills has to offer."
                    price = "$246/night"/>
            </div>
        </div>
    )
}

export default HomePage
