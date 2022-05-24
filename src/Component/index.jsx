import React, { Component } from "react";
import "./Home.css";
import frontImg from "./main.jpg";
class Home extends Component {
  render() {
    return (
      <>
        <section id="home">
          <div class="container">
            <div class="frontImage">
              <img class="image" alt="Main" src={frontImg}></img>
              <h1 class="head">
                <b>Laundry service in Varanasi</b>
              </h1>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Home;
