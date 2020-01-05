import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Grid,
  Box,
  Container,
  Tooltip
} from "@material-ui/core";
import Card from "../components/MaterialComponents/Card/Card.js";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import CardFooter from "../components/MaterialComponents/Card/CardFooter.js";
import CardHeader from "../components/MaterialComponents/Card/CardHeader.js";
import CardBody from "../components/MaterialComponents/Card/CardBody.js";
import GridContainer from "../components/MaterialComponents/Grid/GridContainer.js";
import GridItem from "../components/MaterialComponents/Grid/GridItem.js";
import ArtTrack from "@material-ui/icons/ArtTrack";
import { makeStyles } from "@material-ui/styles";
import topphoto from "../assets/topphoto.png";
import arjunpic from "../assets/arjunpic.jpg";
import card2 from "../assets/card2.jpeg";
import CardTravel from "@material-ui/icons/CardTravel";
import Extension from "@material-ui/icons/Extension";
import Fingerprint from "@material-ui/icons/Fingerprint";
import FlightLand from "@material-ui/icons/FlightLand";
import Build from "@material-ui/icons/Build";
import Place from "@material-ui/icons/Place";
import Language from "@material-ui/icons/Language";
import styles from "../components/MaterialComponents/styles/materialStyles/views/dashboardStyle.js";
import Timeline from "../components/MaterialComponents/Timeline/Timeline.js";
import scenegltf from "../assets/scene.glb";

const useStyles = makeStyles(theme => ({
  ...styles,
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
  maxSize: {
    position: "relative",
    maxWidth: 300,
    maxHeight: 300
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

  const widgetStories = [
    {
      // First story
      inverted: true,
      badgeColor: "danger",
      badgeIcon: CardTravel,
      title: "Some Title",
      titleColor: "danger",
      body: (
        <p>
          Wifey made the best Father{"'"}s Day meal ever. So thankful so happy
          so blessed. Thank you for making my family We just had fun with the
          “future” theme !!! It was a fun night all together ... The always rude
          Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in
          downtown.
        </p>
      ),
      footerTitle: "11 hours ago via Twitter"
    },
    {
      // Second story
      inverted: true,
      badgeColor: "success",
      badgeIcon: Extension,
      title: "Another One",
      titleColor: "success",
      body: (
        <p>
          Thank God for the support of my wife and real friends. I also wanted
          to point out that it’s the first album to go number 1 off of
          streaming!!! I love you Ellen and also my number one design rule of
          anything I do from shoes to music to homes is that Kim has to like
          it....
        </p>
      )
    },
    {
      // Third story
      inverted: true,
      badgeColor: "info",
      badgeIcon: Fingerprint,
      title: "Another Title",
      titleColor: "info",
      body: (
        <div>
          <p>
            Called I Miss the Old Kanye That’s all it was Kanye And I love you
            like Kanye loves Kanye Famous viewing @ Figueroa and 12th in
            downtown LA 11:10PM
          </p>
          <p>
            What if Kanye made a song about Kanye Royère doesn{"'"}t make a
            Polar bear bed but the Polar bear couch is my favorite piece of
            furniture we own It wasn’t any Kanyes Set on his goals Kanye
          </p>
        </div>
      )
    }
  ];

  return (
    <div>
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
          <Grid item>
            <Box m="4rem" />
            <Container maxWidth="md">
              <Typography
                className={classes.typography1}
                align="center"
                variant="h2"
                marked="center"
              >
                Hello, I'm Arjun Sedani
              </Typography>
            </Container>
          </Grid>
          <Grid item>
            <Box m="1rem" />
            <Container maxWidth="md">
              <Typography
                color="inherit"
                align="center"
                variant="h5"
                className={classes.typography1}
              >
                React Developer | React Developer | UX Developer
              </Typography>
            </Container>
          </Grid>
          <Grid item>
            <Box m="2rem" />
            <Container>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleScrollToStats()}
              >
                Learn More
              </Button>
            </Container>
            <Box m="1rem" />
          </Grid>
        </Grid>
      </div>
      <Box m="4rem" />
      <Grid alignItems="center" direction="column" container justify="center">
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
      <Grid alignItems="center" direction="column" container justify="center">
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
      <Grid alignItems="center" direction="column" container justify="center">
        <Grid item>
          <Typography align="center" variant="h6" marked="center">
            Achievements
          </Typography>
          <hr className={classes.aboutMe} />
        </Grid>
      </Grid>
      <Grid alignItems="center" direction="column" container justify="center">
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
            {/* <Heart /> */}
          </Container>
        </Grid>
      </Grid>

      <Box m="4rem" />
      <Grid alignItems="center" direction="column" container justify="center">
        <Grid item>
          <Typography align="center" variant="h6" marked="center">
            Portfolio
          </Typography>
          <hr className={classes.aboutMe} />
        </Grid>
      </Grid>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover}>
          <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
              <iframe
                // src="https://aframehome1.glitch.me/"
                src="https://aframeheart.glitch.me/"
                width="100%"
                height="400px"
              ></iframe>
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Office Studio
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                The place is close to Metro Station and bus stop just 2 min by
                walk and near to {'"'}Naviglio{'"'} where you can enjoy the
                night life in London, UK.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>$1.119/night</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> London, UK
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
              <iframe
                // src="https://aframehome1.glitch.me/"
                src="https://aframeappartment.glitch.me/"
                width="100%"
                height="400px"
              ></iframe>
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Office Studio
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                The place is close to Metro Station and bus stop just 2 min by
                walk and near to {'"'}Naviglio{'"'} where you can enjoy the
                night life in London, UK.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>$1.119/night</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> London, UK
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}></GridItem>
        <Timeline simple stories={widgetStories} />
      </GridContainer>
    </div>
  );
}

export default Welcome;
