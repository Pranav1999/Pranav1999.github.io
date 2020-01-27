import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
//icons
import FileCopy from "@material-ui/icons/FileCopy";

import profile from "assets/img/faces/pranav.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";

var projects = [
  {
    name: "BioTrips",
    description:
      "Works as a travel buddy for drivers, who can manage trips allocated to them, and allows vendors to make quick decisions with real time info about trips and drivers.",
    image: require("assets/img/projects/biotrips.png"),
    link: "https://angel.co/projects/1008717-biotrips"
  },
  {
    name: "Content Talks",
    description:
      "Lets you share any type of document in HTML format and observe how individuals interact with your document in form of clicks, pointer movement, and scrolls.",
    image: require("assets/img/projects/content_talks.png"),
    link: "https://angel.co/projects/1009433-content-talks"
  },
  {
    name: "SimFa",
    description:
      "A simple face recognition app that lets you capture an image of a person or person's image and recognize that person in real time using that single image.",
    image: require("assets/img/projects/simfa.png"),
    link: "https://angel.co/projects/1009407-simfa"
  },
  {
    name: "Poshan",
    description:
      "A mobile application developed as a step towards helping the malnourished and underserved children of today to become the healthy youth of tomorrow.",
    image: require("assets/img/projects/poshan.jpeg"),
    link: "https://angel.co/projects/920194-poshan"
  },
  {
    name: "AmazonPriceTraqueur",
    description:
      "A python web scrapper that can track prices of multiple products and can send an email whenever price of selected product drops below a threshold.",
    image: require("assets/img/projects/amazon.png"),
    link: "https://github.com/Pranav1999/AmazonPriceTraqueur/"
  }
];

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    
    return (
      <div>
        <Header
          color="transparent"
          brand="Pranav"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/projects-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                {projects.map(project => {
                  console.log("assets/img/projects/biotrips.png");
                  console.log(project.image);
                  return (
                    <div style={{ justifyContent: "center" }}>
                      <GridItem xs={12} sm={12} md={4}>
                        <Card style={{ width: "15rem" }}>
                          <img
                            style={{
                              height: "220px",
                              width: "220px",
                              display: "block",
                              alignSelf: "center"
                            }}
                            className={classes.imgCardTop}
                            src={project.image}
                            alt="Card-img-cap"
                          />
                          <CardBody>
                            <h4 className={classes.cardTitle}>
                              {project.name}
                            </h4>
                            <p>{project.description}</p>
                            <Button
                              color="dark"
                              href={project.link}
                              target="_blank"
                            >
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </GridItem>
                    </div>
                  );
                })}
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(ProfilePage);
