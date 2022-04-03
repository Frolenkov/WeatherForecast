import classNames from "classnames";

import css from "./WelcomePage.module.css";

const WelcomePage = ({ rootClassName, className }) => {

  const rootClass = rootClassName || css.root;
  const classes = classNames(rootClass, className);
  return (
    <div  className={classes}>    
      <h1>Hello! Welcome to our amazing weather forecasting platform</h1>
      <h2>Please add your city</h2>
    </div>
  );
};
export default WelcomePage;
