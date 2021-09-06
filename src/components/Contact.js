import React from "react";
import "styles/contact.css";
import { StyledHeader } from "./Form";
import Footer from "./footers/footer";
import whiteLogo from "../images/vrepo_.svg";

const Contact = () => {
  return (
    <>
      <section class="contact">
        <StyledHeader logoSvg={whiteLogo} />
        <div class="contact_p">
          <div class="content">
            <h2>Contact Us</h2>
          </div>
          <div class="container">
            <div class="contactInfo">
              <div class="box">
                <div class="text">
                  <h3>Address</h3>
                  <p>
                    Vidyalankar Institute of Technology, Vidyalankar College
                    Marg, Wadala(E), Mumbai-400 037
                  </p>
                </div>
              </div>
              <div class="box">
                <div class="text">
                  <h3>Phone</h3>
                  <p>+91 22 2416 11 26</p>
                </div>
              </div>
              <div class="box">
                <div class="text">
                  <h3>Email</h3>
                  <p>abc@vit.edu.in</p>
                </div>
              </div>
            </div>
            <div class="contactForm">
              <form>
                <h2>Send Message</h2>
                <div class="inputBox">
                  <input type="text" name="" required="required" />
                  <span>Full Name</span>
                </div>
                <div class="inputBox">
                  <input type="text" name="" required="required" />
                  <span>Email</span>
                </div>
                <div class="inputBox">
                  <input type="text" name="" required="required" />
                  <span>Type your Message..</span>
                </div>
                <div class="inputBox">
                  <input type="submit" name="" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
