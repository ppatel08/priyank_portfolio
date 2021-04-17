import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';

import imageURLBuilder from "@sanity/image-url"
import sanityClient from './../client';

// Sanity Image Builder for faster build
const builder = imageURLBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

function SinglePost() {

    const [singlePost, setsinglePost] = useState(null);
    const { slug } = useParams();
    const history = useHistory()


    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]
        {
            title,
            _id
        }`).then(
            (data) => setsinglePost(data[0])
        )
            .catch(console.error)
    }, [slug]);


    const goBack = () => {
        history.goBack()
    }


    if (!singlePost) return <div>Loading...</div>

    return (
        <>
            <p>{singlePost.title}</p>
            <button type="button" onClick={goBack}>
                Go back
  </button>
        </>
    )
}

export default SinglePost
