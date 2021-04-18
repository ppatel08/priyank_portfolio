import React from 'react';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import "../styles/home.css"
import Typed from 'react-typed';


function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    {' '}
                    <Typed
                        strings={['Priyank Patel']}
                        backSpeed={50}
                        typeSpeed={40}
                    />
                </h1>
                <p className="h-sub-text">
                    Front end Developer from Detroit.
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        {/* <FontAwesomeIcon icon={faFacebook} className="icon fb" /> */}
                    </Link>
                    <Link to="test" className="icon-holder">
                        {/* <FontAwesomeIcon icon={faGithub} className="icon gh" /> */}
                    </Link>
                    <Link to="test" className="icon-holder">
                        {/* <FontAwesomeIcon icon={faYoutube} className="icon yt" /> */}
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
