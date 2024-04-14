import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
return (
<div id="home"className='hero'>
<img src={profile_img} alt="" />
<h1><span>I'm Alex Bennett,</span> frontend developer based in USA.</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<div className="hero-action">
<div className="hero-connect"><AnchorLink className='anchor-link' offset={() => 50} href="#contact">Connect with me</AnchorLink></div>
<div className="hero-resume">My resume</div>
</div>
</div>
)
}

export default Hero;