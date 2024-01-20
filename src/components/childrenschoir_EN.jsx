// import React from "react";
import React, { useRef } from "react";

import heroPic from "./images/choirContent/choir.png";
import choirKids from "./images/choirContent/bg_kids.png";
import Nav from "./Nav";

import Form from "./form";
import claudiaHeadShot from "./images/claudia-headshot2020-02-scaled.jpeg";
import classes from "./childrenschoir_EN.module.css";

function ChildrensChoir() {
  // const usernameRef = useRef();
  // const emailRef = useRef();
  // const ageRef = useRef();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Parent's Name:", usernameRef.current.value);
  //   console.log("Email:", emailRef.current.value);
  //   console.log("age:", ageRef.current.value);
  // process form data
  return (
    <main className={classes.main}>
      <section className={classes.section}>
        <Nav />
        <hr style={{ marginTop: "0px" }} />
        <div className={classes.block}></div>

        <div className={classes.containerGrid}>
          {/* 1  headlines */}
          {/* <div className={classes.gridItem}> */}
          <div className={`${classes.headlines} ${classes.gridItem}`}>
            <h1 className={`${classes.padT} ${classes.HeadLine}`}>
              A Children's Choir For Our Community
            </h1>
            <p className={`${classes.padB} ${classes.subHeadLine}`}>
              Inwood & Washington Heights (NYC)
            </p>
          </div>

          {/* </div> */}
          {/* 2  hero pic */}
          <img className={classes.hero} src={heroPic} alt="choir" />
          {/* 3 join with form*/}
          <div className={classes.joinForm}>
            <hr style={{ marginTop: "0px" }} />
            <h3
              className={`${classes.joinTittle} ${classes.padB} ${classes.displayTuggleIpad}`}
            >
              Join Us!
            </h3>

            <div className={`${classes.padB} ${classes.displayTuggleIpad}`}>
              {/* <form onSubmit={handleSubmit} className={classes.signUpForm}>
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
              </form> */}

              <Form />
            </div>
          </div>
          {/* 4 description */}
          <div>
            <div className={`${classes.gridItem} ${classes.displayTuggleIpad}`}>
              <hr style={{ marginTop: "0px" }} />

              <p>
                Our purpose is to create a Children's Choir for our vibrant
                community of Inwood and Washington Heights, a initiative
                designed to bring together the little one voices in celebration
                of Latino heritage and culture, fostering an environment of
                joyous learning and musical exploration. Please, fill out the
                form and hit the SEND INFO button to let us know about your
                interest in being part.
              </p>
            </div>
          </div>
        </div>

        {/* // MOBILE FORM */}
        <div className={classes.gridItem}>
          <h3
            className={
              (classes.joinTittle,
              classes.padT,
              classes.padB,
              classes.displayTuggleMobile)
            }
          >
            Join Us!
          </h3>
          <div className={`${classes.padB} ${classes.displayTuggleMobile}`}>
            <Form />
          </div>
        </div>
        <div className={`${classes.gridItem} ${classes.displayTuggleMobile}`}>
          <p>
            Our purpose is to create a Children's Choir for our vibrant
            community of Inwood and Washington Heights, a initiative designed to
            bring together the little one voices in celebration of Latino
            heritage and culture, fostering an environment of joyous learning
            and musical exploration. Please, fill out the form and hit the SEND
            INFO button to let us know about your interest in being part.
          </p>
        </div>

        <div className={classes.block}></div>

        <hr style={{ marginTop: "0px" }} />

        <div className={classes.block}></div>

        <img
          id="imageOpen"
          className={`${classes.images} ${classes.padB}`}
          src={choirKids}
          alt="choir"
        />

        <p>
          This choir aims to unite children through the power of music, allowing
          them to delve into their Latino roots while creating lasting
          friendships and memorable experiences.
        </p>
        <div className={classes.block}></div>

        <hr />

        <div className={classes.block}></div>

        <h3 className={classes.padB}>
          Benefits of Choir Participation for Children
        </h3>

        <div className={classes.benefitsContainer}>
          <div>
            <h5>Cultural Enrichment and Identity</h5>
            <p>
              Understanding and celebrating their cultural roots through music
              can enhance their self-esteem and provide a stronger connection to
              their community and heritage.
            </p>
          </div>
          <div>
            <h5>Social and Emotional Growth</h5>
            <p>
              Singing in a choir offers an emotional outlet, allowing children
              to express themselves, manage stress, and experience joy and
              satisfaction in a supportive environment.
            </p>
          </div>

          <div>
            <h5>Cognitive and Academic Enhancement</h5>
            <p>
              Music education has been linked to better performance in areas
              such as math and reading, as it involves understanding patterns,
              rhythm, and counting.
            </p>
          </div>
        </div>
        <div className={classes.block}></div>

        <hr />
        <div className={classes.block}></div>

        <div className={classes.bioClaudia}>
          <div>
            <h3 className={classes.padB}>Who wants to create the choir?</h3>
            <p className={classes.displayTuggleIpad}>
              Claudia Govantes is a award-winning choir conductor, pianist and
              singer, founder of
              <a href="http://www.govantesmusicacademy.com/">
                Govantes Music Academy
              </a>
              that teaches piano and voice lessons in Inwood, NY. Claudia was
              first soprano of the National Choir of Cuba, as well as several
              choirs for more than 20 years of career making tours to countries
              like Germany, Spain, Venezuela, Colombia, Ecuador and others.{" "}
              <br />
              With this new project, Claudia wants to bring choral music to the
              community focusing in our Latino Roots and heritage.
            </p>
            <button
              className={`btn btn-primary mb-3 ${classes.displayTuggleIpad}`}
              href="http://www.govantesmusicacademy.com/"
            >
              Learn More abour GMA
            </button>
          </div>

          <div>
            <img
              className={`${classes.claudiaHeadShot} ${classes.padB} ${classes.displayTuggleIpad}`}
              src={claudiaHeadShot}
              alt="Claudia_Govantes"
            />
          </div>

          <img
            className={`${classes.claudiaHeadShot} ${classes.padB} ${classes.displayTuggleMobile}`}
            src={claudiaHeadShot}
            alt="Claudia_Govantes"
          />
          <p className={classes.displayTuggleMobile}>
            Claudia Govantes is a award-winning choir conductor, pianist and
            singer, founder of
            <a href="http://www.govantesmusicacademy.com/">
              Govantes Music Academy
            </a>
            that teaches piano and voice lessons in Inwood, NY. Claudia was
            first soprano of the National Choir of Cuba, as well as several
            choirs for more than 20 years of career making tours to countries
            like Germany, Spain, Venezuela, Colombia, Ecuador and others. <br />
            With this new project, Claudia wants to bring choral music to the
            community focusing in our Latino Roots and heritage.
          </p>

          <button
            className={`btn btn-primary mb-3 ${classes.displayTuggleMobile}`}
            href="http://www.govantesmusicacademy.com/"
          >
            Learn More abour GMA
          </button>
        </div>
        <div className={classes.block}></div>
        <hr />
        <div className={classes.block}></div>

        <h3 className={classes.padB}>Haven't Join Us Yet? Fill out the Form</h3>
        <div className={`${classes.padB} ${classes.formTwo}`}>
          {/* <form className={`${classes.signUpForm} }`}>
            <div className="mb-3">
              <label htmlFor="parentsEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="parentsEmail"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="parentsName" className="form-label">
                Parent's Name / Tutor's Name
              </label>
              <input type="text" className="form-control" id="parentsName" />
            </div>

            <div className="mb-3">
              <label htmlFor="childAge" className="form-label">
                Child's Age
              </label>
              <input type="number" className="form-control" id="childAge" />
            </div>

            <button type="submit" className="btn btn-primary">
              SEND INFO
            </button>
          </form> */}
          <Form />
        </div>
      </section>
      <footer className={classes.footer}>
        <div>
          <p className={classes.footerText}>
            This is an initiative of Govantes Music Academy to create a choir
            for the Inwood and Washington Heights Community in New York City. If
            you are interested in help us in any way, please contact us at :
            <a href="mailto:govantesmusicacademy@gmail.com" target="_blank">
              govantesmusicacademy@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default ChildrensChoir;
