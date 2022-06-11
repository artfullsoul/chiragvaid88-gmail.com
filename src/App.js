import React from 'react';
import {useState,useEffect} from "react"
import style from './App.css';
import backgroundImage from "./images/background.jpg";
import image2 from "./images/image2.jpg";
import homedelievery from "./images/homeDelivery.png"
import PWAGram from "./images/PWAGram.png"
import tindog from "./images/tindogPicture.png";
import todolist from "./images/toDoListPicture.png";
import simonGamePicture from "./images/simonGamePicture.png";
import drumKitPicture from "./images/drumKitPicture.png";
import HamburgerMenu from "react-hamburger-menu";
import PersonalImage from "./images/personal-pic.jpg"

import Certificate1 from "./images/certificate/1.png"
import Certificate2 from "./images/certificate/2.png"
import Certificate3 from "./images/certificate/3.png"

import Project1 from "./images/projects/1.jpeg"
import Project2 from "./images/projects/2.png"
import Project3 from "./images/projects/3.jpeg"
import Project4 from "./images/projects/4.jpeg"
import Project5 from "./images/projects/5.png"
import Project6 from "./images/projects/6.png"
import Project7 from "./images/projects/7.png"

const App = () => {
    const[scrolltop,scrolltopFunc]= useState(0);
    let [open,openFunc] = useState(false);
    const[certificate,setCertificate] = useState([
        {
            src: "https://udemy-certificate.s3.amazonaws.com/image/UC-121ba669-96c0-43b1-97d4-d68668c4fe83.jpg?v=1581521747000",
            tagline:"MERN Stack Certification" 
        },
        {
            src: "https://udemy-certificate.s3.amazonaws.com/image/UC-404ba09e-f4f4-4b87-a205-8b8c337f7e19.jpg?v=1585305200000",
            tagline: "React Certification"
        },
        {
            src: "https://udemy-certificate.s3.amazonaws.com/image/UC-82bcb487-86aa-4026-a5ac-99c57aa5062a.jpg?v=1586648199000",
            tagline: "PWA Certification"
        },
        {
            src: Certificate1,
            tagline: "UCIE"
        },
        {
            src: Certificate2,
            tagline: "Koders"
        },
        {
            src: Certificate3,
            tagline: "Umbeo Tech."
        },
    ])
    const[projects,setProjects] = useState([
        {
            src: Project1,
            tagline:"Docflix App"
        },
        {
            src: Project2,
            tagline:"Virtual Events"
        },
        {
            src: Project3,
            tagline:"Viri Store App"
        },
        {
            src: Project4,
            tagline:"Employee Management App"
        },
        {
            src: Project5,
            tagline:"Swype"
        },
        {
            src: Project6,
            tagline:"Kliq"
        },
        {
            src: Project7,
            tagline:"Uttrakhand Integrated Statistical System"
        },
    ])
    const[services,setServices] = useState([
        {
            head:"Webistes (Frontend)",
            body:"Services in building Static Websites and helping you to bring your Design/Services to real world.",
            price:"$15"
        },
        {
            head:"Websites (Frontend+Backend)",
            body:"Full support in building Backend + Frontend & adding services to help give a boost to your business.",
            price:"$25"
        },
        {
            head:"Android + IOS Apps (React Native)",
            body:"Help you build your first Android and IOS app with the required features and publish them to respective stores. ",
            price:"$45"
        }
    ])
    useEffect(() => 
    {
      window.onscroll = function() {scrollFunction()};
       
      function scrollFunction() 
      {
        console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop !== 0){
          scrolltopFunc(document.documentElement.scrollTop) ;
        }else{
          scrolltopFunc(document.documentElement.scrollTop);
        }
      
      }
    }, [scrolltop])
    
    function handleClick() {
      open = openFunc(!open);
    }
    return(
        <div className='main-cont'>
            {/* NAVABAR */}
            <div className='nav-bar'>
                <div className='main-logo'>
                    <p>CV</p>
                </div>
                <div className='nav-menu'>
                    {/* <p>Home</p> */}
                    <p ><a className='nav-links' href='#about'>About</a></p>
                    <p ><a className='nav-links' href='#certification'>Certificate</a></p>
                    <p ><a className='nav-links' href='#services'>Services</a></p>
                    <p ><a className='nav-links' href='#projects'>Projects</a></p>
                    <p ><a className='nav-links' href='#connect'>Connect</a></p>
                    <p ><a className='nav-links' href="https://docs.google.com/document/d/1imqHc_Y7bs4AyLJPcGJ_2ILD9chiiYA-/edit?usp=sharing&ouid=111943270678545187797&rtpof=true&sd=true" style={{color:"#6C63FF",fontWeight:"bold"}}>Resume</a></p>
                </div>
                
                <div className="hamburger-setup">
                    <HamburgerMenu
                    isOpen={open}
                    menuClicked={handleClick}
                    width={20}
                    height={15}
                    strokeWidth={2}
                    rotate={0}
                    color='rgb(255, 255, 255)'
                    borderRadius={5}
                    animationDuration={0.5}
                    /> 
                </div>
            </div>
            {/* STATIC BACK IMG */}
            <div className='static-back-img'/>

            {open && 
            <div className='nav-modal'>
                <p ><a className='nav-links' href='#about'>About</a></p>
                <p ><a className='nav-links' href='#certification'>Certificate</a></p>
                <p ><a className='nav-links' href='#services'>Services</a></p>
                <p ><a className='nav-links' href='#projects'>Projects</a></p>
                <p ><a className='nav-links' href='#connect'>Connect</a></p>
                <p ><a className='nav-links' href="https://docs.google.com/document/d/1imqHc_Y7bs4AyLJPcGJ_2ILD9chiiYA-/edit?usp=sharing&ouid=111943270678545187797&rtpof=true&sd=true"  style={{color:"#6C63FF",fontWeight:"bold",borderBottom:"1px solid #F8A4D8"}}>Resume</a></p>
            </div>}

            {/* MIDSECTION */}
            <div className='main-sec'>
                <div className='main-sec-head-cont'>
                    {/* <p className='main-sec-upp-content'><p>HEY THERE</p>, I AM-</p> */}
                    <p className='main-sec-low-content'><p className='name'>Chirag</p> <p className='cast'>Vaid</p></p>
                    <p className='profile-tag'>Full Stack <b>Web</b> and <b>App</b> Developer.</p>
                </div>

                {/* ABOUT-ME */}
                <div className='about-me' id="about">
                    <div className='about-me-cont'>
                        <p className='about-data-head'>About Me</p>
                        <div className="about-data-cont">
                            <img src={PersonalImage} />
                            <p>As an enthusiast in Web and App development, I have extensively worked in React and React-Native with backend technologies like Node.js, Express.js, MongoDB and Firebase. I have hands on experience of nearly 2 year in this feild and have successfully delivered projects to market giants like <b>Hero, Vedanta, ZS, BD, Reliance, Cipla and Mankind Pharma</b>. Throughout my journey I have worked upon project like <b>Virtual Events</b>, <b>OTT Platforms</b>, <b>Social Media Websites</b>, <b>E-commerce apps</b> etc.</p>
                        </div>
                    </div>
                </div>
                
                {/* TAGLINE */}
                <div className='tagline-cont'>
                    <p className='tagline-1'>(noSuccess) ? workHard( ) : keepLearning( )</p>
                    <p className='tagline-2'>NOT FROM IIT OR NITS BUT STILL BELIEVE IN MY KNOWLEDGE</p>
                </div>

                {/* CERTIFICATIONS */}
                <div className='certifications' id="certification">
                    <div className='certi-cont'>
                        <p className='certi-head'>Certification</p>
                        <div className='all-certi'>
                            {certificate.map((data,index) => {
                                return(
                                    <div className='indi-certi-cont' key={index}>
                                        <img src={data.src}/> 
                                        <p>{data.tagline}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className='end-text'>and many more...</p>
                    </div>
                </div>

                {/* SRVICES-TO-OFFER */}
                <div className='service' id="services">
                    <p className='service-tag'>Services To Offer</p>
                    <div className='service-card-cont'>
                        {/* {services.map((data,index) => {
                            return(
                            <div className='indi-service-card' key={index}>
                                <p className='service-card-head'>{data.head}</p>
                                <p className='service-card-body'>{data.body}</p>
                                <p className='service-card-price'>{data.price}</p>
                            </div>)
                        })} */}
                        
                        <div className='indi-service-card'>
                            <p className='service-card-head'>Webistes<br/>(Frontend)</p>
                            <p className='service-card-body'>Services in building Static Websites and helping you to bring your Design/Services to real world.</p>
                            <p className='service-card-price'>$15 per hour</p>
                            <div className='connect-butt' onClick={() => { window.open("https://wa.me/+919808438969")}}>
                                <p>Let's Create</p>
                            </div>
                        </div>
                        <div className='indi-service-card'>
                            <p className='service-card-head'>Websites<br/>(Frontend+Backend)</p>
                            <p className='service-card-body'>Full support in building Backend + Frontend & adding services to help give a boost to your business.</p>
                            <p className='service-card-price'>$25 per hour</p>
                            <div className='connect-butt' onClick={() => { window.open("https://wa.me/+919808438969")}}>
                                <p>Let's Create</p>
                            </div>
                        </div>
                        <div className='indi-service-card'>
                            <p className='service-card-head'>Android + IOS Apps<br/>(React Native)</p>
                            <p className='service-card-body'>Help you build your first Android and IOS app with the required features and publish them to respective stores.</p>
                            <p className='service-card-price'>$45 per hour</p>
                            <div className='connect-butt' onClick={() => { window.open("https://wa.me/+919808438969")}}>
                                <p>Let's Create</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJECTS */}
                <div className='certifications' id="projects">
                    <div className='certi-cont'>
                        <p className='certi-head'>Projects</p>
                        <div className='all-certi'>
                            {projects.map((data,index) => {
                                return(
                                    <div className='indi-certi-cont' key={index}>
                                        <img src={data.src}/> 
                                        <p>{data.tagline}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className='end-text'>and many more...</p>
                    </div>
                </div>
                {/* FOOTER SECTION */}
                <div className='footer' id="connect">
                    <p className='footer-head'>Contact Me</p>
                    <p className='footer-tag-line'>Would like to connect with me regarding work enquiries? Reach me on the links below.</p>
                    <div className='upper-links-cont'>
                        <p><a href="mailto:chiragvaid88@gmail.com"><i class="far fa-envelope"></i></a>   chiragvaid88@gmail.com</p>
                        <p><a href="tel:+919808438969"><i class="fas fa-phone-alt"></i></a>   +91-9808438969</p>
                        <p><i class="fas fa-map-marker-alt"></i>   87 Tyagi Road,Dehradun,Uttrakhand,India - 248001</p>
                    </div>
                    {/* social media icons */}
                    <div className="social-media-icons">
                        <a href="https://www.linkedin.com/in/chirag-vaid-962460194/"  target="_blank" ><i class="fab fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/chirag_vaid88/"  target="_blank"><i class="fab fa-instagram"></i></a>
                        <a><i class="fab fa-facebook-square"></i></a>
                    </div>
                    <p className='copyright-line'>All Content Copyright © Chirag Vaid 2020.</p>
                </div>
            </div>
        </div>
    )
}

export default App;