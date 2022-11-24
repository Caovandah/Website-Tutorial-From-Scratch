import React from 'react';
import Footer from '../components/footer/Footer';
import HeroImg2 from '../components/heroimg2/HeroImg2';
import Navbar from '../components/navbar/Navbar';

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer." />
            <Footer />
        </div>
    );
};

export default About;
