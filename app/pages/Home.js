import React from "react";
import { Link } from "react-router";


export default class Home extends React.Component {
  render(){
    const headerContainer = {width: "100vw",height: "75vh",backgroundColor: "#4D8DF6", display:"flex"};
    const headerText = {width: "50%", height: "65%", fontSize: "2rem",color: "#fff", textAlign: "center", paddingTop: "25vh"};
    const btn = {width: "6rem"};
    const headerImage = {width:"50%", height:"100%", backgroundImage: "url('http://www.mobiloitte.com/blog/wp-content/uploads/2016/07/ionic-vs-react-native.png')", backgroundSize: "cover", backgroundPosition: "center"};
    const forward = {width: '70vw',height:'100%', margin: "auto", marginTop:"5rem", marginBottom:"6rem",backgroundColor: "#fff", display:"flex", borderBottom:"1rem solid #0F439B"};
    const avatarContainer = {width: "20%", height:"100%"};
    const avatar = { width: "7rem", height: "7rem", backgroundImage:"url('https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAfNAAAAJDhjOTNjYjM2LWFhYmEtNGYzMC1hNWFiLWU3ODg3NGJhMzlkMQ.jpg')", backgroundSize: "cover", borderRadius: "50%"};
    const preface = {width: "80%", height:"100%", marginBottom:"5rem"};
    const secText = {fontSize: "1rem", marginTop: "1rem"};
    const techUsed = {width: '60vw',height: '100%', margin: "auto"};
    const techHead = {textAlign: "center", marginBottom: "3rem", fontSize: "2rem"};
    const techP = {fontSize: "1rem"};
    const techContainer = {width: "100%", height: "15rem",display:"flex", justifyContent: "space-between", marginBottom:"4rem"}
    const techNg = {width:"40%", height:"100%", backgroundImage: "url('https://raw.githubusercontent.com/angular/angular.io/master/public/resources/images/logos/angular2/angular.png')",backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"};
    const techTs = {width:"40%", height:"100%", backgroundImage: "url('http://wijmo.com/wp-content/uploads/2016/03/Typescript.png')",backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"};
    const techInfo = {width:"40%", height:"100%", textAlign:"center"};
    return(
    <div>
      <div style={headerContainer}>
        <div style={headerText}>
          Ionic 2 and React Native
          <br />
          <div style={secText}>
            A two week out of the box experience and resource
            <br />
             A project by and for JR Developers
            <br />
          </div>
          <button>The Data</button> <button>Resources</button>
        </div>
        <div style={headerImage}>
        </div>
      </div>
      <div style={forward}>
        <div style={avatarContainer}>
          <div style={avatar}></div>
          <br />
          By James Putnam
          <br />
        </div>
        <div style={preface}>
          <h2>Just a few things...</h2>
          <br/>
          Hey there and welcome! I am incredibly excited to share with you my experience over the past weeks learning the Ionic 2 and React Native frameworks. Whether you stumbled
          upon this page out of curiosity, or looking to upgrade your skills and knowledge in JavaScript mobile development, know that the intention of this site is to save you time.
          <br />
          With that being said there are a few items I wish to address. I still consider myself a JR level Developer. Even so, I believe the hard yards I have put in, and the information
          I have collected will make for a great starting point. I know because I was there! And because I am relativley new to the platform, my language will be straightforward
          and direct. All the modules you find in this project will be based off of my personal experience. I will dive deep into my development
          process with the Windows and Android platforms. (these frameworks work cross-platform) Languages, style-guides, and libraries studied. And the hours of docs I sorted through.
          <br />
          Lastly, understand that Ionic 2 is still in beta and React Native has only been around a year or so. There is undoubtly a bright future for these frameworks. The more I learn, the more
          excited I get, and whatever future finds I discover to be helpful or advantageous will be shared here.
          <br />
          Enough Chat! How about we dive in! Starting with the languages and libraries I came to know and love during this project.
        </div>
      </div>
      <div style={techUsed}>
        <div style={techHead}>
          TECH USED
          <br />
        <p style={techP}>A breakdown of the languages I came across while working on this project.</p>
        </div>
        <div style={techContainer}>
          <div style={techNg}></div>
          <div style={techInfo}>
            <h2>Angular 2</h2>
            This is a great starting point. A sweet intro to understanding components. The documentation is on point! If you have experience with Angular,
            the transition is not really that bad. Server-side rendering, Lighterweight, and a new component router. A huge upgrade from V.1
          </div>
        </div>
        <div style={techContainer}>
          <div style={techInfo}>
            <h2>TypeScript</h2>
          </div>
          <div style={techTs}></div>
        </div>
      </div>
      <Link to="layout">Layout</Link>
    </div>
    );
  }
}
