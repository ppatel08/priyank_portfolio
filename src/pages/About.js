import React from 'react'
import Title from "../components/Title"
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from './../components/ServicesSection';

import "../styles/about.css"

function About() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />

            <Title title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image="https://picsum.photos/100" title={'Web design'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image="https://picsum.photos/100" title={'Artificial Intelligence'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image="https://picsum.photos/100" title={'Game Development'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image="https://picsum.photos/100" title={'Game Development'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image="https://picsum.photos/100" title={'Game Development'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image="https://picsum.photos/100" title={'Game Development'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />


            </div>

        </div >
    )
}

export default About
