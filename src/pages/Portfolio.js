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
             smallDescription,
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
        <p>
            <Title title={'Portfolio'} span={'Portfolio'} />
            <div className="portfolio">
                {postData && postData.map((post, index) => {
                    console.log(post)
                    return (
                        <>
                            <div className="service">
                                <div className="firstdiv">
                                    <h3 className="portfolioHeaderTitle">{post.title}</h3>
                                    <p className="portfolioDescription">{post.smallDescription}</p>
                                </div>

                                <div className="secondDiv">
                                    <Link to={"/portfolio/" + post.slug.current} key={post.slug.current}>
                                        <button className="btn">
                                            Learn More</button>
                                    </Link>
                                </div>

                            </div>
                        </>
                    )
                })}
                {!postData && <div>Loading Portfolio Data....</div>}

            </div>
        </p>
    )
}

export default Portfolio