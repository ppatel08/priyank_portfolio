import React from 'react'
import Title from "../components/Title"
import BlogSection from './../components/BlogSection';

function Portfolio() {
    return (
        <div>
            <Title title={'Portfolio'} span={'Portfolio'} />
            <div className="servives-container">
                <BlogSection title={'Wordpress'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <BlogSection title={'Desingning'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <BlogSection title={'Prototype'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <BlogSection title={'Single Page Application'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
            </div>
        </div>
    )
}

export default Portfolio
