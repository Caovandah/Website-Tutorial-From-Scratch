import React from 'react';
import Footer from '../components/footer/Footer';
import HeroImg from '../components/heroimg/HeroImg';
import Navbar from '../components/navbar/Navbar';
import Work from '../components/Work';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImg />
            <Work />
            <Footer />
        </div>
    );
};

export default Home;
