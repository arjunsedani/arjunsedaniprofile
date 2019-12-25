import React, { useState, useEffect } from "react";
import { Button, Typography, Grid, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import topphoto from "../assets/topphoto.png";
import arjunpic from "../assets/arjunpic.jpg";
const useStyles = makeStyles(theme => ({
  root: {},
  background: {
    backgroundImage: `url(${topphoto})`,
    minHeight: 400,
    backgroundColor: "#152238", // Average color of the background image.
    backgroundPosition: "right"
  },
  button: {
    minWidth: 200
  },
  aboutMe: {
    height: 4,
    width: 70,
    textAlign: "center",
    position: "relative",
    background: "#7bc3d1",
    border: 0
  },
  nameTitle: {
    marginLeft: 109,
    marginTop: 112
  },
  nameTitle2: {
    marginLeft: 109,
    marginTop: 20
  },
  typography1: {
    color: theme.palette.whitish.main
  },
  whiteColor: {
    color: theme.palette.whitish.main
  }
}));

function Welcome(props) {
  const classes = useStyles();

  const handleScrollToStats = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth"
    });
  };

  return (
    <div className="App">
      <div className={classes.background}>
        <img
          style={{ display: "none" }}
          src={topphoto}
          alt="increase priority"
        />
        <Grid
          alignItems="flex-start"
          direction="column"
          container
          justify="flex-start"
        >
          <Grid item className={classes.nameTitle}>
            <Typography
              className={classes.typography1}
              align="center"
              variant="h2"
              marked="center"
            >
              Hello, I'm Arjun Sedani
            </Typography>
          </Grid>
          <Grid item className={classes.nameTitle2}>
            <Typography
              color="inherit"
              align="center"
              variant="h5"
              className={classes.typography1}
            >
              React Developer | React Developer | UX Developer
            </Typography>
          </Grid>
          <Grid item className={classes.nameTitle2}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleScrollToStats()}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </div>
      <Box m="4rem" />
      <Grid
        alignItems="center"
        direction="column"
        container
        justify="center"
        spacing={2}
      >
        <Grid item>
          <Typography align="center" variant="h6" marked="center">
            About Me
          </Typography>
          <hr className={classes.aboutMe} />
        </Grid>
        <Grid item>
          <img
            style={{ borderRadius: 100, width: 200, height: 200 }}
            src={arjunpic}
            alt="increase priority"
          />
        </Grid>
      </Grid>
      <Box m="4rem" />
      <Grid
        alignItems="center"
        direction="column"
        container
        justify="center"
        spacing={2}
      >
        <Grid item>
          <Container maxWidth="md">
            <Typography align="flex-start" variant="body2" marked="flex-start">
              <li>
                Full stack developer with 3 years 2 months of experience in
                development on React Native,ReactJS, HTM5, CSS, Javascript,
                NodeJS, NoSQL and various other technologies
              </li>
              <li>
                Presently associated with Robert Bosch Engineering and Business
                Solutions Private Limited. as Senior Software Engineer since
                August 2019
              </li>
              <li>
                Previously associated with EVRY India Pvt. Ltd. as Software
                Engineer from October 2016 -August 2019
              </li>
              <li>
                Effective Individual contributor and Team Player Scrum
                Fundamentals certified in end-to-end SDLC Process (Requirement
                analysis, System Study, Designing, Coding, Testing, Deployment
                and Implementation)
              </li>
              <li>
                Understand technical concepts and quick in converting them into
                meaningful results.
              </li>
              <li>
                Exposure to DevOps tools like JIRA, GitHub, Bitbucket, Jenkins
                and Cli..
              </li>
            </Typography>
          </Container>
        </Grid>
      </Grid>

      <Box m="4rem" />
      <Grid
        alignItems="center"
        direction="column"
        container
        justify="center"
        spacing={2}
      >
        <Grid item>
          <Typography align="center" variant="h6" marked="center">
            Achievements
          </Typography>
          <hr className={classes.aboutMe} />
        </Grid>
      </Grid>
      <Grid
        alignItems="center"
        direction="column"
        container
        justify="center"
        spacing={2}
      >
        <Grid item>
          <Container maxWidth="md">
            <Typography align="flex-start" variant="body2" marked="flex-start">
              <li>
                Secured place among the top 11 innovations at "Microsoft
                Incubate Hackathon 2019" for the idea "3d House Hunting using
                Map My India"
              </li>
              <li>
                Honored as Employee of the Month award for the month of March
                2018 for development of chat-bot android application using
                Amazon Lex within a short duration from the Employer (EVRY India
                Pvt. Ltd.)
              </li>
              <li>
                Honored for "PropertyGram" as among the top 10 innovations at
                "TECHUTSAV 2019" EVRY's annual technical innovation expo and
                client meet
              </li>
              <li>
                Honored for "Smart Real Estate" as the best innovation at
                "TECHUTSAV 2018", EVRY's annual technical innovation expo and
                client meet
              </li>
              <li>
                Honored "3-30-300 rule of facility management business"as one of
                the best ideas at Evry's hackathon 2018
              </li>
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Welcome;
