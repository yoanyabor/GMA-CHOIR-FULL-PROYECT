import React, { useRef } from "react";
import classes from "./form.module.css";

const ip = "13.59.10.120";

function Form() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const parentName = usernameRef.current.value;
    const email = emailRef.current.value;
    const childAge = ageRef.current.value;
    const formData = { parentName, email, childAge };

    try {
      const response = await fetch(`http://${ip}:3001/formpost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");

        // Handle successful submission (e.g., showing a success message)
      } else {
        console.error("Form submission failed");
        // Handle errors
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle network errors
    }
  };

  // console.log(dataBase);
  return (
    <main>
      <form onSubmit={handleSubmit} className={classes.signUpForm}>
        <div className="mb-3">
          <label htmlFor="parentsEmail" className="form-label">
            Email
          </label>

          <input
            type="email"
            ref={emailRef}
            className="form-control"
            id="parentsEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="parentsName" className="form-label">
            Parent's Name / Tutor's Name
          </label>

          <input
            type="text"
            ref={usernameRef}
            className="form-control"
            id="parentsName"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="childAge" className="form-label">
            Child's Age
          </label>
          <input
            type="number"
            ref={ageRef}
            className="form-control"
            id="childAge"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          SEND INFO
        </button>
      </form>
    </main>
  );
}

// const jsonData = JSON.stringify(dataBase);

export default Form;
