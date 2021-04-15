import React from 'react'
import Title from "../components/Title"
import ImageSection from '../components/ImageSection';

import "../styles/about.css"
import ServicesSection from './../components/ServicesSection';

function About() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />

            <Title title={'Experience'} span={'Experience'} />
            <div className="servives-container">
                <ServicesSection />
            </div>
        </div >
    )
}

export default About
