import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

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

    if (!singlePost) return <div>Loading...</div>

    return (
        <p>{singlePost.title}</p>

    )
}

export default SinglePost
