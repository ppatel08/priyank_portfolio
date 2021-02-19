import React, { useState, useEffect } from 'react'
import Title from "../components/Title"
import PortfolioSection from './../components/PortfolioSection';
import sanityClient from './../client';
import "../styles/portfolio.css"

import "../styles/serviceSection.css"
import { Link } from 'react-router-dom';


function Portfolio() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type =="post"]{
             title,
             slug,
             mainImage{
                 asset-> {
                     _id,
                     url
                 },
                 alt
             }
         }`)
            .then((data) => setPost(data))
            .catch(console.error)
    }, [])
    return (
        < div >
            <Title title={'Portfolio'} span={'Portfolio'} />
            <div className="servives-container">
                {/* Map after this  */}
                {postData && postData.map((post, index) => {
                    return (
                        <Link className="test" to={"/portfolio/" + post.slug.current} key={post.slug.current}>
                            <div className="ServicesSection">
                                <div className="service">
                                    <div className="service-content">
                                        <img width="200px" height="200px" src={post.mainImage.asset.url ? post.mainImage.asset.url : "https://picsum.photos/id/1/200/200"} alt={post.mainImage.alt} />

                                        <h5 className="s-title">{post.title}</h5>
                                        <p className="s-text">
                                            Some Text
                            </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
                {/* End of Mapping */}
            </div>
        </ div >
    )
}

export default Portfolio