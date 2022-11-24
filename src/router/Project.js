import React from 'react';
import Footer from '../components/footer/Footer';
import HeroImg2 from '../components/heroimg2/HeroImg2';
import Navbar from '../components/navbar/Navbar';
import PricingCard from '../components/pricingcard/PricingCard';

const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="PROJECTS." text="Some of my most recent works." />
            <PricingCard />
            <Footer />
        </div>
    );
};

export default Project;
