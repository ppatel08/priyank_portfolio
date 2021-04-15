import { configure } from '@testing-library/dom';
import React, { useState, useEffect } from 'react';
import "../styles/serviceSection.css"
import sanityClient from './../client';
import { Link } from 'react-router-dom';


function ServicesSection() {
    const [projectData, setProject] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type =="project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
         }`)
            .then((data) => setProject(data))
            .catch(console.error)
    }, [])

    return (
        <div className="portfolio">
            { projectData && projectData.map((project, index) => {
                console.log(project)
                return (
                    <div className="service">
                        <div className="firstdiv">
                            <h3 className="portfolioHeaderTitle">{project.title}</h3>
                            <p className="portfolioDescription">{project.description}</p>
                        </div>
                        <div className="secondDiv">
                            <button className="btn">Learn More</button>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default ServicesSection