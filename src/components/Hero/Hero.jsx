import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
return (
<div id="home"className='hero'>
<img src={profile_img} alt="" />
<h1>I'm Alex Bennett, frontend developer based in USA.</h1>
<p>A lifelong learner, problem-solver, curious explorer, and growth-oriented individual, who enjoys
collaborating well with others and striving for the team’s success. I am a reliable and efficient worker who
can achieve high-quality results on time. I’m enthusiastic about SWE, Web3, ML, DNN, Blockchain, etc.</p>
<div className="hero-action">
<div className="hero-connect"><AnchorLink className='anchor-link' offset={() => 50} href="#contact">Connect with me</AnchorLink></div>
<div className="hero-resume">My resume</div>
</div>
</div>
)
}

export default Hero;