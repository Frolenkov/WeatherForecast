import CityShortcut from "../components/CityShortcut";
import { connect } from "react-redux";
import { Fab } from "@material-ui/core";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import { Link } from "react-router-dom";

function SideBar({
  citiesToShow = {}
}) {
 let citiesToShowArr =  Object.values(citiesToShow)
  return (
    <div className="SideBar">
      {citiesToShowArr.map((city) => (
        <CityShortcut key={city.id} {...city} />
      )) }     
        <Link to="/search">
        <Fab color="primary" aria-label="add">
          <PlusOneIcon />
          </Fab>
        </Link>      
    </div>
  );
}

const CSideBar = connect(
  (s) => ({
    citiesToShow: s?.city,
  }),
  {}
)(SideBar);

export default CSideBar;
