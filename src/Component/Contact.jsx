import { React, Component } from "react";
import "./Contact.css";
import finalImg from "./final.jpg";

class Contact extends Component {
  render() {
    return (
      <>
        <section id="contact">
          <div className="finalContainer">
            <img class="finalImage" alt="Final" src={finalImg}></img>
            <div class="contactContainer">
              <h1 className="contactHead">Contact</h1>
              <p>
                We offer full-service in laundry for any age group, on large or
                small scale. We understand your needs and we will provide home
                service to satisfy the basic needs, both online and offline. Do
                not hesitate to contact us.
              </p>
              <h4>Laundry Service, Varanasi, UttarPradesh India</h4>
              <br />
              <p>
                You can also contact us by phone 9140375915 or 7275320386, or
                you can send us a message here:
              </p>
              <input class="input" placeholder="Name" />
              <input class="input" placeholder="What age person" />
              <input class="input" placeholder="Mobile Number" />
              <input class="input" placeholder="Email Id" />
              <input class="input" placeholder="Message/Special Requirement" />
              <button class="button">Send Message</button>
            </div>
          </div>
          <div className="footerContainer">
            <div class="footerOne">Powered by WWW</div>
            <div class="footerTwo">© Copyright of WWW</div>
          </div>
        </section>
      </>
    );
  }
}
export default Contact;
