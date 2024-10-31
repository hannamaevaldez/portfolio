import React from 'react';

function Home() {
  return (
    <section className="#Home">
        <div className="home-content">
            <div className="left">   
                <h3>Welcome to My Portfolio</h3>
                    <h1>Hanna Mae Valdez</h1>
                <p>
                    Information Technology Student of <br />
                    Western Institute of Technology
                </p>
                <button className="contact-button">
                    <a href="#Contact">Contact Me</a>
                </button>
            </div>
            <div className="right">
                <img src="hanna.jfif" alt="Hanna Mae" width='400px'/>
            </div>            
        </div>
    </section>
  );
}

export default Home;