import React from "react";
import classes from "./Header.module.css"
import Btn from "../Btn/Btn";
import {NavLink} from "react-router-dom";

const Header = props => (

  <div className={classes.header}>
    <div className={classes.top_info}>
      <div className={classes.head}>
        <div className={classes.logo}>
          <div>Auto<span>Dealer</span>
          </div>
        </div>
        <div className={classes.acount}>
          <Btn value="Login" link="/login"/>
          <Btn value="Sign Up" link="/signup"/>
        </div>
      </div>
      <div className={classes.bg_navigation}>
        <div className={classes.navigation_wrapper}>
          <div className={classes.navigation}>
            <ul>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/partners">Partners</NavLink>
              <NavLink to="/about">About us</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

)

export default Header