import React from 'react';
import Footer from '../components/footer/Footer';
import HeroImg from '../components/heroimg/HeroImg';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImg />
            <Footer />
        </div>
    );
};

export default Home;
