import React from 'react';
import {useState,useEffect} from "react"
import style from './App.css';
import backgroundImage from "./images/background.jpg";
import aboutImage from "./images/about.jpg";
import image2 from "./images/image2.jpg";
import homedelievery from "./images/homeDelivery.png"
import PWAGram from "./images/PWAGram.png"
import tindog from "./images/tindogPicture.png";
import todolist from "./images/toDoListPicture.png";
import simonGamePicture from "./images/simonGamePicture.png";
import drumKitPicture from "./images/drumKitPicture.png";
import HamburgerMenu from "react-hamburger-menu";
import Style from "./App.module.css";



function App() {
  let [open,openFunc] = useState(false);
  let[scrolltop,scrolltopFunc]= useState(0);

  useEffect(() => {
    window.onscroll = function() {scrollFunction()};
     
    function scrollFunction() {
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

  function handleBottomArrowClick(){
    console.log(style.mainpage)
  }
  return (
    <div id="mainDiv">
    {/* navbar */}

    {/* background-wallpaper */}
    <div className="main-page">
    <img src={backgroundImage} className="navbar-custom" id="backgroundImage" />
    <a href="#backgroundImage" className="logo-styling">CV </a>
    { scrolltop === 0 ? <div className="slash-styling slash-styling-add">|</div> : <div className="slash-styling slash-styling-remove">|</div>}
    { scrolltop === 0 ? <span className="web web-add-animation">Web</span> : <span className="web web-remove-animation">Web</span>} 
    { scrolltop === 0 ? <span className="developer developer-add-animation">developer</span> : <span className="developer developer-remove-animation">developer</span> }

    <div className="hamburger-setup">
        <HamburgerMenu
        isOpen={open}
        menuClicked={handleClick}
        width={20}
        height={15}
        strokeWidth={2}
        rotate={0}
        color='rgb(105, 102, 102)'
        borderRadius={5}
        animationDuration={0.5}
        /> 
    </div>
    {  open &&
    <div className="hamburger-menu-display">
    <div className="hamburger-menu-text">
    <a className="menu-list" onClick={handleClick} href="#backgroundImage">Home</a>
    <a className="menu-list" onClick={handleClick} href="#midsec-background">About</a>
    <a className="menu-list" onClick={handleClick} href="#midsec-certification">Certification</a>
    <a className="menu-list" onClick={handleClick} href="#contact">Contact</a>
    <p>All Content Copyright © Chirag Vaid</p>
    <hr className="hamburger-menu-hr"/>
    <a href="mailto:chiragvaid88@gmail.com"><i class="far fa-envelope"></i></a>
    <a href="tel:+919808438969"><i class="fas fa-phone-alt"></i></a>
    <a href="https://www.linkedin.com/in/chirag-vaid-962460194/"  target="_blank" ><i class="fab fa-linkedin"></i></a>
    <a href="https://www.instagram.com/chirag_vaid88/"  target="_blank"><i class="fab fa-instagram"></i></a>
    <a><i class="fab fa-facebook-square"></i></a>
    </div>
    </div>
    }
   
    

    <div className="image-content">
      <h1 id="welcome" className="image-content-h1">Welcome</h1>
      <p className="image-content-p">Hi,I am Chirag Vaid</p>
    </div>
    {/* <a href="#midsec-background" onClick={handleBottomArrowClick}><div className="bottom-button"></div></a>
    <div className="double-arrow">>></div> */}
    </div>
   {/* midsection */}
    {/* <div class="midsection-div">
      <div className="about-content">
        <img src={aboutImage} className="about-image-adjustment"></img>
        <div className="about-text">
          <h1>About Me</h1>
          <p>Hi,I am Chirag Vaid.<br />
          I am curently persuing my Btech. degree in Computer Science from UPES, Dehradun.<br />
          I am not an IIT student but still find myself blessed with programming skills.<br />
          I am a certified Full stack (MERN STACK) Developer.<br/>
          </p> 
        </div>
      </div>
    </div> */}

    <div className="midsec-background" id="midsec-background">
      {scrolltop >=100 ? <h1 className="all-h1-heading">Who Am I ?</h1> : <h1 >Who I Am ?</h1>}

      <br/>
      <img src={image2} ></img>
      <p>Hi,I am Chirag Vaid, I live at Dehradun.Currently I am persuing my Btech. degree in Computer Science from UPES.Recently I have developed my interest in Web Development and completed some Full Stack development certification in MERN Stack development. From my childhood I was always fascinated by technologies especially when making my searches on google browser or while working on windows and always wanted to be a part of the big names out in the market to see how things works.</p>
    </div>
    <div className="midsec-certification" id="midsec-certification">
      { scrolltop >= 700 ?<h1 className="all-h1-heading">My Certification</h1> :<h1 >My Certification</h1>}
      <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-121ba669-96c0-43b1-97d4-d68668c4fe83.jpg?v=1581521747000"></img>
      <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-404ba09e-f4f4-4b87-a205-8b8c337f7e19.jpg?v=1585305200000"></img>
      <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-82bcb487-86aa-4026-a5ac-99c57aa5062a.jpg?v=1586648199000"></img>
    </div>


    <div className="quote-display">
      <h1 > (noSuccess) ? workHard( ) : keepLearning( ) </h1>
      <p>NOT FROM IIT OR BIG COLLEGES BUT STILL BELIEVE IN MY KNOWLEDGE</p>
    </div>
    <div className="skill-work">
      { scrolltop >= 2400 ? <h1 className="all-h1-heading">What I Can Do For You</h1>:  <h1 >What I Can Do For You</h1>}
      <p>Using my knowledge and the latest technologies like "React js","MongoDB","Node js" & "Express". I can develope a website as per your requirement.
      I have also worked with latest frameworks like Redux, Bootstrap, SASS, Wordpress etc to bring full functions to my websites and I have also worked on many projects during my learning journey.</p>
    </div>
    <div className="my-work">
      {scrolltop >= 2700 ? <h1 className="all-h1-heading">My Personal Projects....</h1> : <h1 >My Personal Projects....</h1>}
      <a href="https://frozen-bastion-88688.herokuapp.com/"><img className="project-image" src={homedelievery}></img></a>
      <p>What's the point to learn if you can't help your society in difficult times. Here I made this app during Covid-19(Corona) lockdown to help the people of my state get the number and address of the stores appointed by Govt. to provide the basic requirements. The app was designed so that the user can directly contact the store by clicking on the call button and placing the order over call to prevent people from going out and saving them from getting infected.</p>
      <a href="https://pwagram-47bee.web.app/"><img className="project-image" src={PWAGram}></img></a>
      <p>This project was part of my journey to turn my websites to a native app. Do you know that the average download recorded of apps from play and app store is 0% and why to invest your time in developing an additional app for both the stores while the web has the power to do it all by showing push messages to your homescreen and many more simillar features to the mobile apps.</p>
      <a href="https://tindogbychirag.netlify.com/" target="_blank">       <img className="project-image" src={tindog}></img></a>
      <p>Well you all are familliar with the modern dating app "Tinder" here I introduce a clone app for dog meeting named <a href="https://tindogbychirag.netlify.com/" target="_blank">"Tindog"</a></p>
      <a href="https://glacial-atoll-73110.herokuapp.com/" target="_blank"><img className="project-image" src={todolist}></img></a>
      <p>This app is my favourite app.Ever forgot your mobile at your home and want to write down important task to be completed by the end of the day,here is the solution write down your daily routine here and access them from any device.This is a custom <a href="https://glacial-atoll-73110.herokuapp.com/" target="_blank">"To Do List"</a></p>
      <a href="https://drumkitgame.netlify.com/" target="_blank">          <img className="project-image" src={drumKitPicture}></img></a>
      <p>Want to play Drums but can't carry huge kits try this fun app named <a href="https://drumkitgame.netlify.com/" target="_blank">Drum Kit</a></p>
      <a href="https://simongamebychirag.netlify.com/" target="_blank">    <img className="project-image" src={simonGamePicture}></img></a>
      <p>Bored sitting at homes ,don't worry I have the digital version of classic game called <a href="https://simongamebychirag.netlify.com/" target="_blank">"Simon Game"</a></p>
      {scrolltop >= 5100 ? <h1 className="all-h1-heading">AND MANY MORE....</h1> : <h1 >AND MANY MORE....</h1>}
    </div>
   {/* footer */}
    <div className="contact-me" id="contact">
      {scrolltop >= 5100 ? <h1 className="all-h1-heading">Contact US</h1> : <h1 >Contact US</h1>}
      <p className="contact-me-description">Want to give a facelift to your business let me help you get your business online and spread your business across the globe.We deal in consumer satisfaction and happiness,money is never put to first priority.</p>
      
      <p><a href="mailto:chiragvaid88@gmail.com"><i class="far fa-envelope"></i></a>   chiragvaid88@gmail.com</p>
      <p><a href="tel:+919808438969"><i class="fas fa-phone-alt"></i></a>   9808438969</p>
      <p><i class="fas fa-map-marker-alt"></i>   110 Paltan Bazar,Dehradun,Uttrakhand,India - 248001</p>
      
      <br></br>

      {/* social media icons */}
      <div className="social-media-icons">
      <a href="https://www.linkedin.com/in/chirag-vaid-962460194/"  target="_blank" ><i class="fab fa-linkedin"></i></a>
      <a href="https://www.instagram.com/chirag_vaid88/"  target="_blank"><i class="fab fa-instagram"></i></a>
      <a><i class="fab fa-facebook-square"></i></a>
      </div>
      <h4 className="copyright">All Content Copyright © Chirag Vaid 2020.</h4>
    </div>
  </div>
  );
}

export default App;
