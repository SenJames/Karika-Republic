import React from "react";
import Button from "./Button";
import image_1 from "../images/image2.jpeg";
import image_2 from "../images/image1.jpeg";
// import image_3 from "../images/image.jpeg";
import image_3 from "../images/sister.png";
import { Link } from "react-router-dom";
import { ExpandLess, Instagram, LinkedIn } from "@mui/icons-material";
import Read from "./Read";
const Text = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="body__container">
      <img src={image_3} alt="fixed" className="fixed_image" />

      <div className="text__container">
        <section>
          <h2>Are you tired of :</h2>
          <ul>
            <li>
              Low business sales because you don't talk about your business?
            </li>
            <li>Loneliness because you don't have friends and community?</li>
            <li>
              Missing out on career opportunities because you don't have <br />
              professional relationships?
            </li>
          </ul>
        </section>
      </div>

      <div className="yes__container">
        <section>
          <h2>If yes, then...</h2>
          <h3>Sign up for this Networking Masterclass.</h3>
          
          <Button title="Register Now" />
        </section>
      </div>

      <div className="learn__container">
        <section>
          <h2>What will you learn?</h2>
          <ul className="spaced_ul">
            <li>How to build your confidence to say hello</li>
            <li>The strategies for starting conversations</li>
            <li>Knowing what to say to maintain conversations</li>
            <li>
              How to turn conversations into career and business opportunities
            </li>
            <li>How to build and maintain friendships</li>
          </ul>
        </section>
      </div>

      <div className="get__container">
        <section>
          <h2>What will you get?</h2>
          <ul className="spaced_ul">
            <li>90 minutes of an interative masterclass</li>
            <li>14 Days Daily Networking challenge with Nuggets</li>
            <li>Access to masterclass recording</li>
          </ul>
          <div className="get__btn">
            <Button title="Register Now" />
          </div>
        </section>
      </div>

      <div className="attend__container">
        <section>
          <h2>Who should Attend?</h2>
          <ul className="spaced_ul">
            <li>
              Professionals who are tired of being stagnant in their careers
            </li>
            <li>Entrepreneurs who want to increase their customer base</li>
            <li>Aspiring thought leaders who want to expand their impact</li>
          </ul>
        </section>
      </div>

      <section>
        <div className="date">
          <div className="top">
            <p className="stretch item-a">Date </p>
            <p className="stretch item-b">Time</p>
            <p className="stretch item-c">Venue</p>
            <p className="bold item-d">December 10, 2021 </p>
            <p className="stretch bold item-e">7:30pm</p>
            <p className="stretch bold item-f">Zoom</p>
          </div>
          <div className="get__btn">
            <Button title="Register Now" />
          </div>
        </div>
      </section>

      <div className="bank__container">
        <section>
          <div className="bank">
            <h3>For Bank Transfer</h3>
            <h3 className="bold">
              0098608631/ Cercle 720 Company/ Access Bank
            </h3>
            <p>
              Please send payment receipt to karika@karikarepublic.com for
              confirmation
            </p>
            <small>*Registration Closes on December 4,2021</small>
          </div>
        </section>
      </div>

      <div className="testimonial__container">
        <section>
          <h2>Testimonials</h2>
          <div className="testimonial_content">
            <img src={image_1} alt="one" />
            <div className="testimonial_text">
              <h3>Funlola Yusuff - The Body Mechanic</h3>
              <p>Nigeria</p>
              <div className="read_content">
                <Read text="Karika's lessons on networking and 'doing the work' came in handy while birthing my fitness brand 'The Body Mechanic'. If you are looking to own your narative, define your unique value and build valuable networks... Karika Republic is your ultimate plug" />
              </div>
            </div>
          </div>
          <div className="testimonial_content">
            <img src={image_2} alt="one" />
            <div className="testimonial_text">
              <h3>Toluwanimi Ade-Ajayi</h3>
              <p>Nigeria</p>
              <div className="read_content">
                <Read text="Prior to my sessions with Karika, I was social media shy - to even send a request on LinkedIn or tag someone on Instagram was a challenge . Thanks to Karika Republic teachings on Networking, my confidence has increased and now I am constantly reaching out to people and connectiong with them. I have found expression and I am finding my voice. This is just the beginning" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bottom">
        <div className="btm__btn">
          <Button title="Register Now" />
        </div>
      </div>
      <div className="footer">
        <h4>KARIKA REPUPUBLIC</h4>
        <div className="socials">
          <Link to={"//instagram.com/karika.republic"} target='_blank'>
            <Instagram />
          </Link>
          <Link to={"//www.linkedin.com/in/karika-yonreme"}  target='_blank'>
            <LinkedIn />
          </Link>
        </div>
        <div className="scroll">
          <ExpandLess onClick={scrollTop} />
          <small>Top</small>
        </div>
      </div>
    </div>
  );
};

export default Text;
