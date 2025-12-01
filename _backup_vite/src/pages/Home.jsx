import React from 'react';
import ParallaxHero from '../components/ParallaxHero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import useScrollReveal from '../hooks/useScrollReveal';

const Home = () => {
    useScrollReveal();

    return (
        <main>
            <ParallaxHero />
            <Portfolio />
            <About />
            <Contact />
        </main>
    );
};

export default Home;
