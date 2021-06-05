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
import Parallax from "components/Parallax/Parallax.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import {PictureAsPdf} from "@material-ui/icons";

import resumeImage from "../../assets/img/content/Pranav's Resume.jpg"
import resumeIconImage from "../../assets/img/content/resume-icon-black.png"
import resumePDF from "../../assets/docs/Pranav's Resume.pdf"
import backgroundImage from "../../assets/img/resume-bg.jpg"

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
                        color: "black"
                    }}
                    {...rest}
                />
                <Parallax small filter image={backgroundImage}/>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>
                            <br/>
                            <br/>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "column",
                                            height: "100%",
                                            marginBottom: 50
                                        }}
                                    >
                                        <img
                                            src={resumeIconImage}
                                            style={{height: 100, width: 100}}
                                            alt={"Resume Icon"}
                                        />
                                        <br/>
                                        <h2>RESUME</h2>
                                        <br/>
                                        <Button
                                            color="dark"
                                            href={resumePDF}
                                        >
                                            <PictureAsPdf/>
                                            Download Resume
                                        </Button>
                                    </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <img
                                        src={resumeImage}
                                        className={classes.imgRaised + " " + classes.imgFluid}
                                        alt={"Resume"}
                                    />
                                </GridItem>
                            </GridContainer>
                            <br/>
                            <br/>
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
