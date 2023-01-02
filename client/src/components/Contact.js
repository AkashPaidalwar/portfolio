import React from "react";
import "./Contact.css";
export default function Contact() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [missingField, setMissingField] = React.useState(false);
  const [successPost, setSuccessPost] = React.useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!firstName || !email) {
      setMissingField(true);
    } else {
      try {
        const postData = {
          firstName,
          lastName,
          email,
          phone,
          message,
        };
        setMissingField(false);
        const res = await fetch("/api/", {
          method: "POST",
          body: JSON.stringify(postData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = res.json();
        if (data) {
          setSuccessPost(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="contactPageContainer" id="ContactMe">
      <div className="titleSection">
        <h2 className="contactMe">Contact me</h2>
        <p className="description">
          Please leave your contact below. I am waiting to get in touch with
          you.
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formTopRows">
          <div className="formSubContainer">
            <label for="firstName" className="Label">
              First name<span>*</span>
            </label>
            <input
              type="text"
              className="firstName"
              id="firstName"
              onChange={(event) => {
                setFirstName(event.target.value);
                setSuccessPost(false);
              }}
            />
          </div>
          <div className="formSubContainer">
            <label for="lastName" className="Label">
              Last name
            </label>
            <input
              type="text"
              className="lastName"
              id="lastName"
              onChange={(event) => {
                setLastName(event.target.value);
                setSuccessPost(false);
              }}
            />
          </div>
        </div>

        <div className="formTopRows">
          <div className="formSubContainer">
            <label for="email" className="Label">
              Email<span>*</span>
            </label>
            <input
              type="email"
              className="email"
              id="email"
              onChange={(event) => {
                setEmail(event.target.value);
                setSuccessPost(false);
              }}
            />
          </div>
          <div className="formSubContainer">
            <label for="phoneNumber" className="Label">
              Phone number
            </label>
            <input
              type="number"
              className="phoneNumber"
              id="phoneNumber"
              onChange={(event) => {
                setPhone(event.target.value);
                setSuccessPost(false);
              }}
            />
          </div>
        </div>
        <div className="messageInputContainer">
          <label for="textArea" className="Label">
            Message
          </label>
          <textarea
            className="textArea"
            placeholder="Type your message..."
            id="textArea"
            onChange={(event) => {
              setMessage(event.target.value);
              setSuccessPost(false);
            }}
          ></textarea>
        </div>
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
      {missingField && (
        <h2 className="MissingFieldMessage">
          Please input the required fields!
        </h2>
      )}
      {successPost && (
        <div className="successMessageContainer">
          <h2 className="successPostMessageLine1">
            Thank you for contacting me!
          </h2>
          <h2 className="successPostMessageLine2">
            I am looking forward to getting in touch with you shortly.
          </h2>
        </div>
      )}
    </div>
  );
}
