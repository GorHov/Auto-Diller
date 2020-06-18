import React from 'react'
import classes from './Btn.module.css'
import { NavLink } from 'react-router-dom'

const Btn = (props) => {
  return (
    <div className={classes.btn}>
      <button>
        <NavLink to={props.link}>{props.value}</NavLink>
      </button>
    </div>
  )
}
export default Btn