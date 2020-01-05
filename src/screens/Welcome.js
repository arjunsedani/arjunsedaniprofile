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
import unifiedgamification from "../assets/unifiedgamification.png";
import CardTravel from "@material-ui/icons/CardTravel";
import Extension from "@material-ui/icons/Extension";
import Fingerprint from "@material-ui/icons/Fingerprint";
import FlightLand from "@material-ui/icons/FlightLand";
import Build from "@material-ui/icons/Build";
import Place from "@material-ui/icons/Place";
import Language from "@material-ui/icons/Language";
import styles from "../components/MaterialComponents/styles/materialStyles/views/dashboardStyle.js";
import Timeline from "../components/MaterialComponents/Timeline/Timeline.js";
import Slider from "react-slick";
import styled, { css } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles(theme => ({
  ...styles,
  root: {},
  background: {
    backgroundImage: `url(${topphoto})`,
    minHeight: 400,
    backgroundColor: "#152238", // Average color of the background image.
    backgroundPosition: "right"
  },
  paddingCarousel: {
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  iconimage: {
    width: "100%",
    height: "400px"
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

const PrevArrow = styled.div`
  display: block;
  position: absolute;
  &.slick-prev {
    left: 11px;
    z-index: 10;
  }
  &.slick-prev::before {
    color: black;
  }
  &.slick-prev::after {
    color: black;
  }
  &.slick-prev:hover::before {
    color: black;
  }
  &.slick-prev:hover::after {
    color: black;
  }
`;

const NextArrow = styled.div`
  display: block;
  position: absolute;
  &.slick-next {
    right: 5px;
  }
  &.slick-next::before {
    color: black;
  }
  &.slick-next::after {
    color: black;
  }
  &.slick-next:hover::before {
    color: black;
  }
  &.slick-next:hover::after {
    color: black;
  }
`;

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
      title: "Health point Hospital Management Portal ",
      titleColor: "danger",
      body: (
        <p>
          1.Developed health care theme based web app for clients such as
          Walmart and Optimis by integrating multiple EMR and hospital
          management system capable to handle over 4000 clinics and over 2
          million Providers across US.
          <br />
          2.Developed progressive web app compatible with multiple browsers and
          mobile as well
          <br />
          3.Used latest React features like react hooks, ES7 and developing
          custom hooks in react hooks.
          <br />
          4.Developed landing pages, dashboards and online applications using
          ReactJS, styled-components and developing common components from
          scratch
        </p>
      )
      // footerTitle: "11 hours ago via Twitter"
    },
    {
      // Second story
      inverted: true,
      badgeColor: "success",
      badgeIcon: Extension,
      title: "Propertygram",
      titleColor: "success",
      body: (
        <p>
          About Project: <br />
          Propertygram is an attempt to build a gamification framework that can
          be integrated into any property management software to gamify regular
          tasks in the application.It also provides basic intelligence for task
          allocation and analytics for measuring property managers
          efficiency/work life balance and overall building health
          <br />
          Roles and Responsibilties: <br />
          1.Developed gamification framework using React Native, Firebase
          database, Python for Company level Innovation challenge and customer
          meet during Period 1st January15th March 2019
          <br />
          2.Developing a new framework from scratch to support existing
          application and data
          <br />
          3.Developing modal using ML and AI KNN to predict likes and dislikes
          of property managers
          <br />
          4.Developing reusable components to be used throughout the new version
          of application
        </p>
      )
    },
    {
      // Third story
      inverted: true,
      badgeColor: "info",
      badgeIcon: Fingerprint,
      title: "CBRE Host Mobile ",
      titleColor: "info",
      body: (
        <div>
          <p>
            About: <br /> CBRE Host is a smart building solutions app, one of
            the premier customers is Nike, which is designed in SAAS model This
            project includes way finding, people finding, room booking,
            reminders, creating service requests and tracking status Technical
            challenges include integration with multiple CMMS systems, AD and
            Office Integration
          </p>
          <p>
            Roles and Responsibilties: <br />
            1.Developing React Native common components using glamorous-native,
            HTML5,CSS
            <br />
            2.Fetching data from Rest APIs using Promise and setting data using
            Redux
            <br />
            3.App navigation using react-navigation and react-hooks
          </p>
        </div>
      )
    }
  ];

  const settings = {
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
      <Slider {...settings}>
        <div className={classes.paddingCarousel}>
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
                  A-Frame in Health Care
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                {/* The place is close to Metro Station and bus stop just 2 min by
                walk and near to {'"'}Naviglio{'"'} where you can enjoy the
                night life in London, UK. */}
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>{/* <h4>$1.119/night</h4> */}</div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                {/* <Place /> London, UK */}
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className={classes.paddingCarousel}>
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
                  A-Frame in React in Real Estate
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                Smart Real Estate is a solution that integrates AR and VR to
                assist real estate companies in creating immersive virtual
                property tours and Augmented Property information for their end
                customers and prospects thus helping them feel lifelike
                simulation of properties from anywhere in the world.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>{/* <h4>$1.119/night</h4> */}</div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                {/* <Place /> London, UK */}
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className={classes.paddingCarousel}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  className={classes.iconimage}
                  src={unifiedgamification}
                  alt="..."
                />
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
                  Propertygram
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                Propertygram is an attempt to build a gamification framework
                that can be integrated into any property management software to
                gamify regular tasks in the application.It also provides basic
                intelligence for task allocation and analytics for measuring
                property managers efficiency/work life balance and overall
                building health.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>{/* <h4>$1.119/night</h4> */}</div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                {/* <Place /> London, UK */}
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className={classes.paddingCarousel}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                {/* <iframe
                  // src="https://aframehome1.glitch.me/"
                  src="https://www.youtube.com/watch?v=-1nqzARfQI4"
                  width="100%"
                  height="400px"
                ></iframe> */}
                <iframe
                  src="http://media.licdn.com/embeds/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F-1nqzARfQI4&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-1nqzARfQI4&amp;type=text%2Fhtml&amp;schema=youtube"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  width="100%"
                  height="400px"
                />
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
                  CBRE Host Mobile
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
                {/* <h4>$1.119/night</h4> */}
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                {/* <Place /> London, UK */}
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className={classes.paddingCarousel}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
              <iframe
                   src="https://www.youtube.com/embed/aR7nt91wRQk"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  width="100%"
                  height="400px"
                />
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
                  Smart Real Estate
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                Smart Real Estate is a solution that integrates AR and VR to
                assist real estate companies in creating immersive virtual
                property tours and Augmented Property information for their end
                customers and prospects thus helping them feel lifelike
                simulation of properties from anywhere in the world.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                {/* <h4>$1.119/night</h4> */}
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                {/* <Place /> London, UK */}
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className={classes.paddingCarousel}>
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
                {/* <h4>$1.119/night</h4> */}
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                {/* <Place /> London, UK */}
              </div>
            </CardFooter>
          </Card>
        </div>
      </Slider>
      <Box m="4rem" />
      <Grid alignItems="center" direction="column" container justify="center">
        <Grid item>
          <Typography align="center" variant="h6" marked="center">
            Projects
          </Typography>
          <hr className={classes.aboutMe} />
        </Grid>
      </Grid>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}></GridItem>
        <Timeline simple stories={widgetStories} />
      </GridContainer>
    </div>
  );
}

export default Welcome;
