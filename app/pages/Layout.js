import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render(){
    const { location } = this.props;
    const titleStyle = {
      marginTop: "60px",
      color: "#fff"
    };
    return(
    <div>
        <Nav location={location} />
      <div>
          {this.props.children}
      </div>
      <Footer/>
    </div>
    );
  }
}
