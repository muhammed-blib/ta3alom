import React from "react";
import navStyle from "./navStyle.css";
import colors from "../../config/colors.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DropDownProfile from "../Shared/DropDownProfile.js";
import DropDownNotification from "../Shared/DropDownNotification.js";
import NativeBaseProvider from "native-base";
export default class Links extends React.Component {
  state = {
    Login: true,
  };
  login = () => {
    this.setState({
      Login: !this.state.Login,
    });
  };

  LinksStyle = {
    textDecoration: "none",
    padding: 20,
    color: colors.linksColor,
  };
  ButtonStyle = {
    backgroundColor: colors.Login,
    borderRadius: 15,
    color: colors.linksColor,

    width: 80,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    border: this.props.border,
    margin: 3,
  };
  Signup = {
    backgroundColor: colors.Signup,
  };

  render() {
    if (this.state.Login)
      return (
        <Router>
          <div className="main">
            <ul>
              <li>
                {" "}
                <Link style={this.LinksStyle} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link style={this.LinksStyle} to="/Explore">
                  Explore
                </Link>
              </li>
              <li>
                <Link style={this.LinksStyle} to="/About">
                  About
                </Link>
              </li>
            </ul>

            <div className="log-signup">
              <button onClick={this.login} style={this.ButtonStyle}>
                Log in
              </button>
              <button style={{ ...this.ButtonStyle, ...this.Signup }}>
                Sign up
              </button>
            </div>
            <Switch>
              {/* <Route path="/">
            <Home />
          </Route>
          <Route path="/Explore">
            <Explore />
          </Route>
          <Route path="/about">
            <About />
          </Route> */}
            </Switch>
          </div>
        </Router>
      );
    else
      return (
        <Router>
          <div className="main">
            <ul>
              <li>
                {" "}
                <Link style={this.LinksStyle} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link style={this.LinksStyle} to="/Explore">
                  Explore
                </Link>
              </li>
              <li>
                <Link style={this.LinksStyle} to="/About">
                  About
                </Link>
              </li>
            </ul>

            <div className="after-log">

              <DropDownNotification />
 
              <DropDownProfile />
            </div>
            <Switch>
              {/* <Route path="/">
          <Home />
        </Route>
        <Route path="/Explore">
          <Explore />
        </Route>
        <Route path="/about">
          <About />
        </Route> */}
            </Switch>
          </div>
        </Router>
      );
  }
}
