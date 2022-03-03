import React from "react";
import './/About.css';

function About(){
    return (
        <div className="about_body">
            <div className="about_details">
                <h className="about_title">About</h>
                <p>in-progress collaboration project: a website dedicated to fantasy world-building, character design, and story writing.</p>
                <li>b: design mockups of pages using Adobe Photoshop</li>
                <li>moreminttea: implement mockups using React.js and draw illustrations (not currently shown) of world and characters</li>
                <li>both: write world and character descriptions and stories</li>
                
                <br></br><br></br>
                <p>currently hosted on github pages. visit the repo <a href="https://github.com/moreminttea/kingpin">here</a></p>
            </div>
        </div>
    );
}

export default About;