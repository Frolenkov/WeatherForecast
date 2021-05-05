import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import history from "./history";
import NotFound from "./pages/NotFound";
import CSideBar from './layouts/SideBar';
import CCityInfo from "./layouts/CityInfo";
import CSearch from "./layouts/Search";
import { Provider } from "react-redux";
import { store } from "./store/reducers";

function App() { 
  return (
  <Provider store={store}>
    <Router history = {history}>
       <div className="mainWrapper">
         <CSideBar/>
          <Switch>
             <Route path="/search" component = {CSearch} />
             <Route path="/:city" component = { CCityInfo}/>             
             <Route component = { NotFound } />            
           </Switch>
       </div>
    </Router>
  </Provider>
  );
}

export {store};

export default App;
