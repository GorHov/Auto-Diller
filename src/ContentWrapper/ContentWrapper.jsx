import React from "react";
import classes from "./ContentWrapper.module.css"
import { Route } from "react-router-dom";
import Profile from "./Content/Profile/Profile";
import UserPost from "./Content/Profile/UserPosts/UserPost";

const ContentWrapper = () => {
    return (
        <div className={classes.contentWrapper}>
            <Route path="/profile" component={Profile}/>
            <Route path="/userpost" component={UserPost}/>
        </div>
    )
}

export default ContentWrapper