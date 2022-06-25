import React from 'react'
import ketflixAboutBackgroundImage from '../../img/ketflix-about-background.jpg';
import ketflixLogo from '../../img/ketflix-logo.png'
import reactLogo from '../../img/react-logo.png';
import './About.css';
export default function About() {
    return (
        <main
            className='about'
            style={{
                backgroundSize: 'cover',
                backgroundImage:`url(${ketflixAboutBackgroundImage})`
            }}
        >
            <div className="about__gradient">
                <div className="about__container">
                    <div className="about__logoContainer">
                        <img src={ketflixLogo} alt="ketflixLogo" className="about__logo" />
                    </div>
                    <div className="about__description">
                        <h3>Description</h3>
                        <h4>Ketflix is the Movie Web App which shows list of movies, Inspired from Netflix UI with lit bit of personal touch, It is still in developement so be a little soft when judging. Right now it only has basic functionality of SPA(Single Page Application).</h4>
                    </div>
                    <div className="about__info">
                        <h3>Technology Used</h3>
                        <div className='about__tech-logos' >
                            <img src={reactLogo} alt="reactLogo" className="about__react-logo" />
                        </div>
                        <h4>For now only React Js is used but for future I am going to use Either NodeJs, ExpressJs & MongoDB or Google Firebase to make it CRUD operations capable. </h4>
                    </div>
                </div>
            </div>
        </main>
  )
}
