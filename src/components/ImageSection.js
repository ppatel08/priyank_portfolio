import React from 'react';
// import about from 'https://picsum.photos/200';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src="https://picsum.photos/100" alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span> Priyank Patel</span></h4>
                <p className="about-text">
                    Front End Developer from Detroit. I love cooking food, solving puzzle, creating website and promoting/helping small business to grow bigger by freelancing.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Residence</p>
                        <p>Location</p>
                        <p>Email</p>
                    </div>
                    <div className="right-section">
                        <p>: Priyank Patel</p>
                        <p>: USA</p>
                        <p>: Shelby Township</p>
                        <p>: priyank.patel118@gmail.com</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;