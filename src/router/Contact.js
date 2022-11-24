import React from 'react';
import Footer from '../components/footer/Footer';
import HeroImg2 from '../components/heroimg2/HeroImg2';
import Navbar from '../components/navbar/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="CONTACT." text="Lets have a chat." />
            <Footer />
        </div>
    );
};

export default Contact;
