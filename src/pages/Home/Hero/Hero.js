import React from "react";
import classes from "./Hero.module.css";
import Search from "../../../components/Search/Search";

const Hero = () => {
  return (
    <div className={classes.Hero}>
      <Search />
      <h1 className={classes.H1}>
        Find the Perfect Space <br className={classes.Break} />
        for your next
      </h1>
      <div className={classes.Overlay}></div>
    </div>
  );
};

export default Hero;
