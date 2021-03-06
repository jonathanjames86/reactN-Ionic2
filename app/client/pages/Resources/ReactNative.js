import React from 'react';
import { Link } from "react-router";
import Chat from './Chat.js';

export default class ReactNative extends React.Component{

  render(){
    const resourcesHead = {width:"100%", height:"25vh", backgroundColor: "#4D8DF6", display:"flex", alignItems:"center"};
    const resourceBody = {width:"65%", height:"45vh", padding:"4rem", margin: "auto", backgroundColor:"#fff"};
    const  resourceTitle = {width:"100%", height:"5rem", display:"flex", alignItems:"center", fontSize:"3rem", marginBottom: ""};
    const resourceInfo = {fontSize: "1.75rem", width:"65%", margin:"auto", color:"#fff"};
    const imgSrc = {maxHeight:"5rem", maxWidth:"5rem"}
    const resourceText = {padding:"2rem", width:"85%", margin:'auto', marginBottom:"1rem", backgroundColor:"#EBF0F6"}

    return(
      <div style={resourceBody}>
        <Chat />
        <div style={resourceTitle}><img style={imgSrc} src={'https://s3.amazonaws.com/media-p.slid.es/uploads/118447/images/1603781/reactNe.png'} className="img-responsive"/>React Native</div>
      </div>

    );
  }
}
