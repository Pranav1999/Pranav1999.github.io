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
/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link, Redirect, withRouter } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  state = {
    redirect: false,
    redirectTo: "/"
  };

  render() {
    const { classes } = this.props;

    if (this.state.redirect) {
      return <Redirect push to={this.state.redirectTo} />;
    }

    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            className={
              window.location.pathname == "/"
                ? classes.navLink + " " + classes.navLinkActive
                : classes.navLink
            }
            color="transparent"
            onClick={() => {
              if (window.location.pathname == "/") {
                return;
              }
              this.setState(prev => {
                return {
                  ...prev,
                  redirect: true,
                  redirectTo: "/"
                };
              });
            }}
          >
            Home
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            className={
              window.location.pathname == "/resume"
                ? classes.navLink + " " + classes.navLinkActive
                : classes.navLink
            }
            color="transparent"
            onClick={() => {
              if (window.location.pathname == "/resume") {
                return;
              }
              this.setState(prev => {
                return {
                  ...prev,
                  redirect: true,
                  redirectTo: "/resume"
                };
              });
            }}
          >
            Resume
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            className={
              window.location.pathname == "/projects"
                ? classes.navLink + " " + classes.navLinkActive
                : classes.navLink
            }
            color="transparent"
            onClick={() => {
              if (window.location.pathname == "/projects") {
                return;
              }
              this.setState(prev => {
                return {
                  ...prev,
                  redirect: true,
                  redirectTo: "/projects"
                };
              });
            }}
          >
            Projects
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Follow me on Twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.twitter.com/pranav0281999"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-angellist"
            title="See me on AngelList"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://angel.co/pranav0281999"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-angellist"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-linkedin"
            title="Contact me on LinkedIn"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.linkedin.com/in/pranav0281999/"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-linkedin"} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
