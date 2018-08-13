import React, { Component } from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";
import Body from "./body/body";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
       <Header />
       <Body />
       <Footer />
      </div>
    );
  }
}

export default LandingPage;
