import React, { useState, useEffect } from 'react'
import Title from "../components/Title"
import sanityClient from './../client';
import "../styles/portfolio.css"
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
        <>
            <Title title={'Portfolio'} span={'Portfolio'} />
            <div className="portfolio">
                {postData && postData.map((post, index) => {
                    return (
                        <div className="service">
                            <span className="portfoliolable">{post.title}</span>
                            <h3 className="portfolioHeaderTitle">Dental Mobile LLC</h3>
                            <p className="portfolioDescription">Some kind of wording that will make sense</p>
                            <Link to={"/portfolio/" + post.slug.current} key={post.slug.current}> <button className="btn">
                                Learn More</button></Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Portfolio