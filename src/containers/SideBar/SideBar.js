import CityShortcut from "../components/CityShortcut";
import { connect } from "react-redux";
import { Fab } from "@material-ui/core";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import { Link } from "react-router-dom";
import classNames from "classnames";

import css from "./NotFound.module.css";

const SideBarComponent = ({ rootClassName, className, citiesToShow = {} }) => {
  const rootClass = rootClassName || css.root;
  const classes = classNames(rootClass, className);

  const citiesToShowArr = Object.values(citiesToShow);

  return (
    <div className={classes}>
      {citiesToShowArr.map((city) => (
        <CityShortcut key={city.id} {...city} />
      ))}
      <Link to="/search">
        <Fab color="primary" aria-label="add">
          <PlusOneIcon />
        </Fab>
      </Link>
    </div>
  );
};

const SideBar = connect(
  (s) => ({
    citiesToShow: s?.city,
  }),
  {}
)(SideBarComponent);

export default SideBar;
