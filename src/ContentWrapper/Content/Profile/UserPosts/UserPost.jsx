import React from "react";
import classes from "./UserPost.module.css"


const UserPost = (props) => {
  return (
    <div className={classes.car_cart}>
    <div className={classes.car_img}>IMG</div>
    <div className={classes.car_info}>
    <h3>{props.name}</h3>
        <div className={classes.year_price}>
            <p><strong>{props.year}</strong></p>
            <p><strong>{props.price}</strong></p>
        </div>
    </div>
  </div>
  )
}

export default UserPost