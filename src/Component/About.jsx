import { React, Component } from "react";
import "./About.css";
import one from "./one.jpg";
class About extends Component {
  render() {
    return (
      <>
        <section id="about">
          <div class="aboutContainer">
            <div class="aboutPic">
              <img class="one" src={one} alt="Laundry"></img>
            </div>
            <div class="aboutText">
              <h1 className="aboutHead">About Laundry</h1>
              <h5>Tradition since 1931</h5>
              <br />
              <p className="paraAbout">
                The Laundry was founded in purpose to provide efficient service
                to consumer willing to shine their clothes. We are determined to
                satisfy all the clean clothing needs of consumer, as we are
                working hard and growing daily to become a quality brand. We are
                currently serving in Varanasi from last 90+ Years. We use
                quality products to make your loved one clothes pretty and good
                smelling.
              </p>
              <br />
              <p className="paraAbout">
                As per our customer review we are their first choice in Varanasi
                for Laundry service. We are working online as well as offline to
                provide our full interest to make you stylish, sparky and clean.
                Our dedicated team will be customer friendly and they are also
                participating in making a clean world.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default About;
