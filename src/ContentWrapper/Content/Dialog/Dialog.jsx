import React from "react";
import classes from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <NavLink to={"/dialogs/" + props.id }>{props.name}</NavLink>
  )
}

const Message = (props) => {
  return(
    <p>{props.message}</p>
  )
} 


const Dialog = () => {
  return (
    <div className={classes.content}>
      <div className={classes.users}>
        <DialogItem name="Gor" id="1"/>
        <DialogItem name="Eva" id="2"/>
        <DialogItem name="Tatev" id="3"/>
      </div>

      <div className={classes.message}>
        <Message message="Hello my name is Gor"/>
        <Message message="Hello Gor"/>
      </div>

    </div>
  )
}

export default Dialog