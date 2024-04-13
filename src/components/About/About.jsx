import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
// import profile_img from '../../assets/profile_img.svg'
const About = () => {
    return (
        <div className='about' >
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
                        <p>A lifelong learner, problem-solver, curious explorer, and growth-oriented individual, who enjoys
                            collaborating well with others and striving for the team’s success.</p>
                        <p>And a reliable and efficient worker who
                            can achieve high-quality results on time. I’m also enthusiastic about SWE, Web3, ML, DNN, Blockchain, etc.
                            domains.</p>
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