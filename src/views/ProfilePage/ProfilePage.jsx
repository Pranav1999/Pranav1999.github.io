/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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

class ProfilePage extends React.Component {
    render() {
        const {classes, ...rest} = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );

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
                <Parallax small filter image={require("assets/img/profile-bg.jpg")}/>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src={profile} alt="..." className={imageClasses}/>
                                        </div>
                                        <div className={classes.name}>
                                            <h3 className={classes.title}>Pranav Bhardwaj</h3>
                                            <h6>SOFTWARE DEVELOPER</h6>
                                            <Button
                                                justIcon
                                                link
                                                className={classes.margin5}
                                                target="_blank"
                                                href="https://www.github.com/pranav0281999"
                                            >
                                                <i className={"fab fa-github"}/>
                                            </Button>
                                            <Button
                                                justIcon
                                                link
                                                className={classes.margin5}
                                                target="_blank"
                                                href="https://www.youtube.com/channel/UC4rckcU1W_qsBAPX0cU6jrA"
                                            >
                                                <i className={"fab fa-youtube"}/>
                                            </Button>
                                            <Button
                                                justIcon
                                                link
                                                className={classes.margin5}
                                                target="_blank"
                                                href="https://www.linkedin.com/in/pranav0281999/"
                                            >
                                                <i className={"fab fa-linkedin"}/>
                                            </Button>
                                            <Button
                                                justIcon
                                                link
                                                className={classes.margin5}
                                                target="_blank"
                                                href="mailto:pranavbhardwaj1999@gmail.com"
                                            >
                                                <i
                                                    className={classes.socialIcons + " fas fa-envelope"}
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>
                            <div className={classes.description}>
                                <p>
                                    Software developer working mainly on website development using React.js with a
                                    serious interest in web based AR/VR technologies. Also have experience in mobile app
                                    development using both native languages and React Native and Flutter frameworks.
                                </p>
                            </div>
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
