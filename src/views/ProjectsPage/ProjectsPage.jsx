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

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import gcInteriorImage from "../../assets/img/projects/GCInteriors.png";
import audioReactiveTunnelImage from "../../assets/img/projects/AudioReactiveTunnel.jpeg";
import deflectThatBallImage from "../../assets/img/projects/DeflectThatBall.jpeg";
import flappyHumanImage from "../../assets/img/projects/FlappyHuman.jpeg";
import reelWorldImage from "../../assets/img/projects/ReelWorld.png";

var projects = [
    {
        name: "GC Interiors Portfolio",
        description:
            "React.js based responsive portfolio website for an Interior Design professional with pinch zoom and virtual reality 360° image viewer.",
        image: gcInteriorImage,
        link: "https://geetuchaurasiya.netlify.app/"
    },
    {
        name: "Reel World",
        description:
            "A web based video conferencing app within a virtual world, brings online meeting experience closer to physical meetings.",
        image: reelWorldImage,
        link: "https://github.com/pranav0281999/ReelWorld"
    },
    {
        name: "Deflect That Ball",
        description:
            "Experimentation with Processing and Xbox Kinect V2 to create a game of deflecting the virtual balls so that they don't touch the ground.",
        image: deflectThatBallImage,
        link: "https://github.com/pranav0281999/ProcessingKinectExperiments/tree/master/DeflectThatBall"
    },
    {
        name: "Flappy Human Image",
        description:
            "Experimentation with Processing and Xbox Kinect V2 to create Flappy Birds like game but with human and motion detection.",
        image: flappyHumanImage,
        link: "https://github.com/pranav0281999/ProcessingKinectExperiments/tree/master/FlappyHuman"
    },
    {
        name: "Audio Reactive Tunnel",
        description:
            "Experimentation with three.js where intensity of tunnel lights increases with increasing average frequency of background audio.",
        image: audioReactiveTunnelImage,
        link: "https://github.com/pranav0281999/AudioReactiveTunnel"
    },
];

class ProfilePage extends React.Component {
    render() {
        const {classes, ...rest} = this.props;

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Pranav"
                    rightLinks={<HeaderLinks/>}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax small filter image={require("assets/img/projects-bg.jpg")}/>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                {projects.map(project => {
                                    return (
                                        <div style={{justifyContent: "center"}}>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <Card style={{width: "15rem"}}>
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
                <Footer/>
            </div>
        );
    }
}

ProfilePage.propTypes = {
    classes: PropTypes.object
};

export default withStyles(profilePageStyle)(ProfilePage);
