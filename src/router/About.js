import React from 'react';
import AboutContent from '../components/aboutcontent/AboutContent';
import Footer from '../components/footer/Footer';
import HeroImg2 from '../components/heroimg2/HeroImg2';
import Navbar from '../components/navbar/Navbar';

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer." />
            <AboutContent />
            <Footer />
        </div>
    );
};

export default About;
