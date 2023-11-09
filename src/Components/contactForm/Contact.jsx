import React, { Fragment } from "react";
import "./Contact.css";
import { useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Contact = () => {
  const { colorMode } = useColorMode();

  console.log(colorMode)
  return (
    <div id="contact">

    <div id="Contact" style={{ color: "black" }}>
      {" "}
      <Fragment>
        <section className="contact">
          <div className="contact-heading">
            <h2 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Contact Me </h2>
          </div>
       
          <div className="container">
            <div className="row">
              <div className="column">
                <div className="contact-widget ">
                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                     <i className="fa fa-location-dot" />
                    </div>
                    <div className="text">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Address</h5>
                      <p style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Pune, Maharastra</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                    <i className="fa fa-phone"></i>
                    </div>
                    <div className="text" id="contact-phone">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Contact me</h5>
                      <p style={colorMode==='dark'?{color:'white'}:{color:'black'}}>+91 9359519716</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="text" id="contact-email">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Email</h5>
                      <p style={colorMode==='dark'?{color:'white'}:{color:'black'}}>abhijasud9@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                      <Link to={"https://github.com/abhijasud"} target="blank"><i className="fa-brands fa-github"></i></Link>     
                    </div>
                    <div className="text" id="contact-github">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Github</h5>
                      <Link to={"https://github.com/abhijasud"} target="blank" style={colorMode==='dark'?{color:'white'}:{color:'black'}}>@abhijasud</Link>
                    </div>
                  </div>
                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                    <Link to={"https://www.linkedin.com/in/indabhii/"} target="blank"><i className="fa-brands fa-linkedin"></i></Link>
                      
                    </div>
                    <div className="text" id="contact-linkedin">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Linkedin</h5>
                      <Link to={"https://www.linkedin.com/in/indabhii/"} style={colorMode==='dark'?{color:'white'}:{color:'black'}} target="blank">@Abhijasud</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="contact-form">
                  <form
                    action="https://getform.io/f/a687447e-28cf-420c-81b4-bfe2373636cd"
                    method="POST">
                    <input type="text" name="name" placeholder="Name" style={colorMode==='dark'?{color:'white'}:{color:'black'}}/>
                    <input type="email" name="email" placeholder="Email" style={colorMode==='dark'?{color:'white'}:{color:'black'}} />
                    <textarea
                      placeholder="Message"
                      type="text"
                      style={colorMode==='dark'?{color:'white'}:{color:'black'}}
                      name="message"></textarea>
                    <button
                      type="submit"
                      className="site-btn"
                      style={colorMode==='dark'?{color:'white'}:{color:'black'}}
                      formTarget="_blank">
                      {" "}
                      Send Message 
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </div>
  </div>
  );
};

export default Contact;
