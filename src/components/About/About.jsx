import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about">
            <div>
                <img className="picture" src="https://i.imgur.com/g71u7ey.jpg?1" />
            </div>
            <div>
                <h2>Summary</h2>
                <div className="container">
                    <p>
                        I’m a Web Developer working in Javascript, React.js, Node.js, Express, MongoDB,jQuery, CSS,
                        HTML, Ruby on Rails, and Github.
                    </p>
                    <p>
                    I used to work in finance as a Project Manager and a 401(k) Consultant at Transamerica. Being a Project Manager taught me to lead and set expectations for a group of executive contacts, multitasking dynamic priorities while meeting deadlines, and dealing with demanding clients in a calm and professional manner.
                    </p>
                    <p>
                        Currently, I’m working on building a full stack web app with MongoDB, Express, React.js,
                    </p>
                </div>
            </div>
            {/* summary */}
            {/* large dev icons */}
        </div>
    )
}

export default About