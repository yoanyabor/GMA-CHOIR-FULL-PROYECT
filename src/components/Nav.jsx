import React, { useRef, useEffect, useState } from "react";
import logo from "./images/GMA_LOGO_CIRCLE.png";
import classes from "./Nav.module.css";
function Nav(props) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const LogInHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    localStorage.setItem("isLoggedIn", "1");
    props.onSetIsLoggedIn(true);
  };

  const logOutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");

    props.onSetIsLoggedIn(false);
  };

  const [isClicked, SetIsClicked] = useState(false);
  useEffect(() => {
    if (isClicked) {
      // Perform your action here
      console.log("Action performed");
      SetIsClicked(true);
      // setPerformAction(false); // Reset the flag
    }
  }, [isClicked, SetIsClicked]);

  return (
    <div>
      <img className={classes.logo} src={logo} alt="" />
    </div>
  );
}

export default Nav;
