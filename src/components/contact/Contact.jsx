import {React, useState } from "react"
import "./contact.scss"
import emailjs from "emailjs-com"


export default function Contact() {
  const [msg, setMsg] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email is Valid");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is not Valid");
    } else {
      setMessage("");
    }
  };
  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    setMsg(true);

   await emailjs
      .sendForm(
        "service_ifqq6eo",
        "template_8krtj7i",
        e.target,
        "SPDpEZrttpg4vIFsq"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input
            type="text"
            name="user_email"
            placeholder="email@email.com"
            value={email}
            onChange={handleOnChange}
            required
          />
          <textarea name="message" placeholder="Message" required></textarea>
          <button onClick={emailValidation}>Send</button>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
};

