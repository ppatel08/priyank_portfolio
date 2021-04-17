import React from 'react'
import { useParams } from 'react-router-dom';
import sanityClient from './../client';

function SinglePost() {

    const [singlePost, setsinglePost] = useState(null);
    const { slug } = useParams();

    return (
        <div>
            Single Post
        </div>
    )
}

export default SinglePost
