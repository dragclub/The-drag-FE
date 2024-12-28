import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./DealCard.css";
import Contact from "../Contact/Contact";
import DealDetails from "../DealDetails/DealDetails";
import ContactForm from "../Contact/ContactForm";
import { GoShareAndroid } from "react-icons/go";

const DealCard = ({ prop, setIsBlurred }) => {

  const { followers, creatorType, dealDescription } = prop;
  const iscreator = sessionStorage.getItem("creator") || "false";
  const follk = Math.floor(followers / 1000);
  const maxLength = 60;
  const max = 30;
  const trimDesc =
    dealDescription.length > maxLength
      ? dealDescription.slice(0, maxLength) + "..."
      : dealDescription;
  const trimcrea =
    creatorType.length > max ? creatorType.slice(0, max) + "..." : creatorType;
  const handleDelete = async (e) => {
    await fetch(`${process.env.REACT_APP_BASE_URL}v1/apis/deals`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: prop.email,
        id: prop._id,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.message);
        window.location.reload();
      });

      
  };
const currentUrl = window.location.href;

// Check if the URL contains an ID (e.g., part of the URL or pathname)
const urlContainsId = currentUrl
  .split("/")
  .some((segment) => segment.match(/[a-fA-F0-9]{24}/)); // Match a MongoDB ObjectId pattern

// Construct the share URL based on whether the URL already contains an ID
const shareUrl = urlContainsId ? currentUrl : `${currentUrl}/${prop._id}`;

  // Handle share action
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: prop.companyName,
          url: shareUrl,
        })
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert(`Share this link: ${shareUrl}`); // Fallback if Web Share API is not supported
    }
  };
  return (
    <div className="deal-card">
      <h2>
        {prop.companyName}
        <span className="share">
          <GoShareAndroid onClick={handleShare} className="svg" />
        </span>
      </h2>
      <p>{trimDesc}</p>

      <div className="deal-info">
        <div>
          <p>
            {" "}
            <strong>Creator Type:</strong>
          </p>
          <p>{trimcrea}</p>
        </div>
        <div>
          <p>
            {" "}
            <strong>Minimum Req.:</strong>
          </p>
          <p>{follk ? `${follk}K` : followers} Followers</p>
        </div>
        <div>
          <p>
            {" "}
            <strong>Deal:</strong>
          </p>
          <p>{prop.dealType}</p>
        </div>
      </div>

      <div className="deal-actions">
        {prop.email === sessionStorage.getItem("email") ? (
          <button
            className="apply-button"
            id="delete"
            onClick={(e) => {
              handleDelete(e);
            }}
          >
            Delete
          </button>
        ) : (
          // iscreator ==="true" ? (
          // <Popup
          //   trigger={<button className="apply-button">Apply</button>}
          //   modal
          // >
          //   {(close) => {
          //     return (
          //       <Contact
          //         close={close}
          //         email={prop.email}
          //         name={prop.companyName}
          //       />
          //     );
          //   }}
          // </Popup>):<></>
          <Popup
            trigger={<button className="apply-button">Apply</button>}
            modal
            onOpen={() => setIsBlurred(true)}
            onClose={() => setIsBlurred(false)}
          >
            {(close) => {
              return iscreator === "true" ? (
                <ContactForm
                  close={close}
                  email={prop.email}
                  name={prop.companyName}
                />
              ) : (
                <div className="modal-content">
                  <h2>Please login and become a creator to apply</h2>
                  <button className="modal-content-btn" onClick={close}>
                    Close
                  </button>
                </div>
              );
            }}
          </Popup>
        )}

        <Popup
          trigger={<button className="details-button">Details</button>}
          modal
          onOpen={() => setIsBlurred(true)}
          onClose={() => setIsBlurred(false)}
        >
          {(close) => {
            return (
              <DealDetails
                props={{
                  ...prop,
                  followers: follk ? `${follk}K` : followers,
                  iscreator,
                }}
              />
            );
          }}
        </Popup>
      </div>
    </div>
  );
};

export default DealCard;
