import React from "react";
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.main}>
      <div className={classes.header}>
          <ul>
              <li>
                  <NavLink to="/userinfo">User Info</NavLink>
              </li>
              <li>
                  <NavLink to="/userpost">User Posts</NavLink>
              </li>
          </ul>
      </div>
        <ProfileInfo/>
      </div>
    </div>
  )
}

export default Profile