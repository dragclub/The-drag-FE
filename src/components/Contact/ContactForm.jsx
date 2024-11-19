import React from "react";
import "./ContactFrom.css";
import close_icon from "../../assets/close_icon.svg";
import dotenv from "dotenv";
import { IoClose } from "react-icons/io5";
dotenv.config();

const ContactForm = ({ email, name, close }) => {
  const handleContact = async (e) => {
    document.getElementById("email-btn").setAttribute("disabled", "true");
    e.preventDefault();
    const data = {
      subject: document.getElementById("subject").value,
      body: document.getElementById("body").value,
      attachment: document.getElementById("attachment").files[0],
      creatormail: email,
    };
    const formdata = new FormData();
    for (let key in data) {
      formdata.append(key, data[key]);
    }
    await fetch(e.target.action, {
      method: "post",
      body: formdata,
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          alert(res.message);
          window.location.reload();
        } else {
          alert(res.error || res.message);
          window.location.reload();
        }
      });
  };

  return (
    <div className="contact-container">
      <div className="email">
        <p>To:</p>
        <p className="email-main">{`${name}`}</p>
      </div>
      <form
        className="contact-form"
        action={`${process.env.REACT_APP_BASE_URL}v1/apis/contact`}
        method="post"
        encType="multipart/form-data"
        onSubmit={(e) => {
          handleContact(e);
        }}
      >
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject"
            className="contact-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Message:</label>
          <textarea
            id="body"
            name="body"
            placeholder="Write your message here..."
            rows="5"
          ></textarea>
        </div>
        <div className="form-group attachment">
          <p>Attachment:</p>
          <label htmlFor="attachment" className="file-label">
            Upload Your Files Here
          </label>
          <input
            type="file"
            name="attachment"
            id="attachment"
            className="contact-file"
          />
        </div>
        <button type="submit" id="email-btn">
          SEND
        </button>
      </form>
      {/* <img
        src={close_icon}
        alt="Close"
        className="close-icon"
        onClick={close}
      /> */}
      <div className="close-icon">
        <IoClose onClick={close} fontSize={24}/>
      </div>
    </div>
  );
};

export default ContactForm;
