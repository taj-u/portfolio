import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
// import profile_img from '../../assets/profile_img.svg'
const About = () => {
    return (
        <div id="about" className="about" >
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    {/* <img src={profile_img} alt="" /> */}
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "88%" }} /></div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Django</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>Git</p><hr style={{ width: "75%" }} /></div>
                        <div className="about-skill"><p>LateX</p><hr style={{ width: "77%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
            </div>
        </div>
    );
}

export default About;