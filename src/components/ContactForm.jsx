import { useState, useRef } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();
  const infoRef = useRef();

  const handleSubmit = () => {
    event.preventDefault();
    if (name.length && email.length && msg.length) {
      infoRef.current.textContent = "Success submitting the form!";
      infoRef.current.style.backgroundColor = "green";
      console.log(`Name: ${name}, Email: ${email}, Message: ${msg}`);
      setName("");
      setEmail("");
      setMsg("");
    } else {
      infoRef.current.textContent = "Please fill all fields before submitting!";
      infoRef.current.style.backgroundColor = "red";
    }
  };

  return (
    <form>
      <p ref={infoRef}></p>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        ref={nameRef}
        value={name}
        onChange={() => setName(nameRef.current.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        ref={emailRef}
        value={email}
        onChange={() => setEmail(emailRef.current.value)}
      />
      <label htmlFor="msg">Your message:</label>
      <textarea
        name="msg"
        id="msg"
        rows="8"
        ref={msgRef}
        value={msg}
        onChange={() => setMsg(msgRef.current.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default ContactForm;
