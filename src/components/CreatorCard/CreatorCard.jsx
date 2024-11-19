
import React from "react";
import "./CreatorCard.css";
import Popup from "reactjs-popup";
import Contact from "../Contact/Contact";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import ContactForm from "../Contact/ContactForm";

const CreatorCard = ({ props, selectedFilter, setIsBlurred }) => {
  const {
    name,
    image,
    email,
    instaurl,
    instacount,
    facebookurl,
    facebookcount,
    youtubeurl,
    youtubecount,
    twitterurl,
    twittercount,
    linkedinurl,
    linkedincount,
  } = props;

  const totalsum =
    instacount + facebookcount + youtubecount + twittercount + linkedincount;
  const totalk = Math.floor(totalsum / 1000);
  const instasum = Math.floor(instacount / 1000);
  const facebooksum = Math.floor(facebookcount / 1000);
  const youtubesum = Math.floor(youtubecount / 1000);
  const twittersum = Math.floor(twittercount / 1000);
  const linkedinsum = Math.floor(linkedincount / 1000);
  return (
    <div className="creator-card">
      <img src={image} alt={name} className="creator-image" />
      <div className="creator-info">
        <div className="creator">
          <div className="creator-total">
            <h3 className="creator-name">{name}</h3>
            <p className="total-followers">
              {selectedFilter === "all" || selectedFilter === ""
                ? `Total Followers ${totalk ? `${totalk}K` : totalsum}`
                : selectedFilter === "insta"
                ? `Instagram Followers ${
                    instasum ? `${instasum}K` : instacount
                  }`
                : selectedFilter === "linkedin"
                ? `LinkedIn Followers ${
                    linkedinsum ? `${linkedinsum}K` : linkedincount
                  }`
                : selectedFilter === "facebook"
                ? `Facebook Followers ${
                    facebooksum ? `${facebooksum}K` : facebookcount
                  }`
                : selectedFilter === "twitter"
                ? `Twitter Followers ${
                    twittersum ? `${twittersum}K` : twittercount
                  }`
                : selectedFilter === "youtube"
                ? `YouTube Followers ${
                    youtubesum ? `${youtubesum}K` : youtubecount
                  }`
                : null}
            </p>
          </div>
          {/* <div className="highest">
            <p className="follower"> {totalk}</p>
            <p className="platform">Instagram</p>
          </div> */}
        </div>

        <div className="contact">
          <div className="social-icons">
            {instaurl && (
              <a href={instaurl} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            )}
            {facebookurl && (
              <a href={facebookurl} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            )}
            {youtubeurl && (
              <a href={youtubeurl} target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            )}
            {linkedinurl && (
              <a href={youtubeurl} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            )}
            {twitterurl && (
              <a href={youtubeurl} target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare />
              </a>
            )}
          </div>
          {sessionStorage.getItem("State") === "logout" ? (
            <button
              type="button"
              className="contact-btn"
              onClick={() => alert("Please Login First!")}
            >
              Contact
            </button>
          ) : (
            <Popup
              trigger={<button className="contact-btn">Contact</button>}
              modal
              onOpen={() => setIsBlurred(true)}
              onClose={() => setIsBlurred(false)}
              position="top center"
            >
              {(close) => (
                <ContactForm email={email} name={name} close={close} />
              )}
            </Popup>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;

