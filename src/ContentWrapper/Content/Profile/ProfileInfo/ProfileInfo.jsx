import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
  return (
        <div className={classes.info}>
          <div className={classes.userImg}></div>
          <h1>
            Gor Hovakimyan
          </h1>
          <div className={classes.contactInfo}>
            <h3>
              Phone Number - 094766749
            </h3>
            <h3>
              Email Adress - gorhovakimyan26@gmail.com
            </h3>
          </div>
        </div>
  )
}

export default ProfileInfo
