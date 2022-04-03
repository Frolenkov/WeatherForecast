import history from "../../history";
import classNames from 'classnames';

import css from './NotFound.module.css';

const NotFound = ({rootClassName, className}) => {

  setTimeout(() => {
    history.push("/");
  }, 5000);

  const rootClass = rootClassName || css.root;
  const classes = classNames(rootClass, className);
  return (
    <div className={classes}>      
      <b>404</b>
      <span>Sorry, please try another way</span>
    </div>
  );
};
export default NotFound;
