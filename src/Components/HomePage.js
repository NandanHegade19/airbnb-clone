import React from 'react';
import '../Styles/HomePage.css';
import Banner from './Banner';
import CardComp from './CardComp';


function HomePage() {
    return (
        <div className = "home">
            <Banner />
            <div className = "section">
                <CardComp nocard = {true} src = "https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=480"
                    title = "Entire Homes"
                />
                <CardComp nocard = {true} src = "https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=480"
                    title = "Cabins and cottages"
                />
                <CardComp nocard = {true} src = "https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=480"
                    title = "Unique stays"
                />
                 <CardComp nocard = {true} src = "https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=480"
                    title = "Pets welcome"
                />
            </div>
            <h1>Explore More</h1>
            <div className = "section2">
                
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
            <div className = "section2">
            <CardComp src = "https://a0.muscache.com/im/pictures/9244b09b-ff4c-48f7-8f14-c68c5db35b53.jpg?im_w=1200"
                    title = "Remy's Refuge: Stylish 4BR Lakeside Disney Retreat"
                    description = "Our 4-bedroom, 3-bath Orlando vacation rental house was designed for fun. Bring your friends, your family, and your friends’ families."
                    price = "$185/night"/>
                <CardComp src = "https://a0.muscache.com/im/pictures/d76d70d0-4369-4f37-afb9-5475bee02637.jpg?im_w=1200"
                    title = "Stay in a place of your own | 1BR in Plantation"
                    description = "The apartment has beautiful finishes and comes fully outfitted with kitchen, bedroom, & bathroom essentials."
                    price = "$93/night"/>
                <CardComp src = "https://a0.muscache.com/im/pictures/0ba1cfd7-e052-4cb2-95ed-9cf749feb7e3.jpg?aki_policy=x_large"
                    title = "Siesta Key vacation rental home close to village with swimming pool"
                    description = "Welcome to the Oxford house on the barrier island of Siesta Key. Tucked away in the center of the island in one of the only lush tropical wooded areas on the island, resides this recently updated home."
                    price = "$122/night"/>
            </div>
        </div>
    )
}

export default HomePage
