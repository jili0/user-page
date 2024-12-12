import { useContext, useRef } from "react";
import { userContext } from "../App";

const DisplayUser = () => {
  const { user, setUser } = useContext(userContext);
  const nameRef = useRef();
  const emailRef = useRef();
  const infoRef = useRef();
  const handleClick = () => {
    event.preventDefault();
    setUser({ name: nameRef.current.value, email: emailRef.current.value });
    infoRef.current.textContent = "Set User successfully!";
    infoRef.current.style.backgroundColor = "green";
    setTimeout(() => {
      infoRef.current.textContent = "";
      infoRef.current.style.backgroundColor = "";
      nameRef.current.value = "";
      emailRef.current.value = "";
    }, 5000);
  };

  return (
    <>
      <div className="current-user">
        <h2>Current User</h2>
        <p className="nowrap">Username: {user.name}</p>
        <p className="nowrap">Email: {user.email}</p>
      </div>

      <form action="">
        <label htmlFor="name">New User Name:</label>
        <input type="text" ref={nameRef} id="name" />
        <label htmlFor="email">New User Email:</label>
        <input type="text" ref={emailRef} id="email" />
        <button onClick={handleClick}>Change User</button>
      </form>
      <p ref={infoRef} className="info"></p>
    </>
  );
};

export default DisplayUser;
