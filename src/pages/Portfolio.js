import React, { useState, useEffect } from 'react'
import Title from "../components/Title"
import PortfolioSection from './../components/PortfolioSection';
import sanityClient from './../client';
import "../styles/portfolio.css"



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
        // < div >
        //     <Title title={'Portfolio'} span={'Portfolio'} />
        //     <div className="servives-container">
        //         {/* Map after this  */}
        //         {postData && postData.map((post, index) => {
        //             console.log(post)
        //             return (
        //                 <Link className="test" to={"/portfolio/" + post.slug.current} key={post.slug.current}>
        //                     <div className="ServicesSection"  >
        //                         <div className="service">
        //                             <div className="service-content">


        //                                 <h5 className="s-title">{post.title}</h5>
        //                                 <p className="s-text">
        //                                     Some Text
        //                     </p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </Link>
        //             )
        //         })}
        //         {/* End of Mapping */}
        //     </div>
        // </ div >
        <>
            <Title title={'Portfolio'} span={'Portfolio'} />
            <div className="portfolio">
                {postData && postData.map((post, index) => {
                    return (
                        <>

                            <div className="service">
                                <span className="portfoliolable">{post.title}</span>
                                <h3 className="portfolioHeaderTitle">Dental Mobile LLC</h3>
                                <p className="portfolioDescription">Some kind of wording that will make sense</p>
                                <button className="btn">Learn More</button>
                            </div>

                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Portfolio