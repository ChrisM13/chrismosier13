import React from 'react';
import './Resume.css'
import {Button} from 'react-materialize'

const Resume = () => {
    return (
        <div className="resume">
            <Button className="black"><a href="./assets/pdf/ChrisMosier-Resume2018.pdf" download>Download Resume</a></Button>
        </div>
    )
}

export default Resume