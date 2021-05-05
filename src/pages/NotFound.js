import history from "../history";

const NotFound = () => {
  setTimeout(() => {
    history.push("/");
  }, 5000);
  return (
    <div>
      <b>404</b>
      <span>Sorry, please try another way</span>
    </div>
  );
};
export default NotFound;
