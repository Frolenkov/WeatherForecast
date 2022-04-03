import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { gsap } from "gsap";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { WelcomePage, NotFound, SideBar } from "./containers";
import { Search, CityInfo } from "./components";

import { Provider } from "react-redux";
import { store } from "./store/reducers";

function App() {
  const Circle = forwardRef(({ size, delay }, ref) => {
    const el = useRef();

    useImperativeHandle(
      ref,
      () => {
        return {
          moveTo(x, y) {
            gsap.to(el.current, { x, y, delay });
          },
        };
      },
      [delay]
    );

    return <div className={`circle ${size}`} ref={el}></div>;
  });

  const circleRefs = useRef([]);

  circleRefs.current = [];

  useEffect(() => {
    if (window) {
      circleRefs.current.forEach((ref) =>
        ref.moveTo(window.innerWidth / 2, window.innerHeight / 2)
      );

      const onMove = ({ clientX, clientY }) => {
        circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
      };

      window.addEventListener("pointermove", onMove);

      return () => window.removeEventListener("pointermove", onMove);
    }
  }, []);

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="mainWrapper">
          <SideBar />
          <Switch>
            <Route exact path="/search" component={Search} />
            <Route exact path="/city/:city" component={CityInfo} />
            <Route exact path="/" component={WelcomePage} />
            <Route component={NotFound} />
          </Switch>
          <Circle size="sm" ref={addCircleRef} delay={0} />
          <Circle size="md" ref={addCircleRef} delay={0.1} />
          <Circle size="lg" ref={addCircleRef} delay={0.2} />
        </div>
      </Router>
    </Provider>
  );
}

export { store };

export default App;
