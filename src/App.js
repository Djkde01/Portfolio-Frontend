import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter} from 'react-router-dom';
import Transition from './components/Transition';
import About from './pages/About';
import Landing from './pages/Landing';
import Projects from './pages/Projects';


export default withRouter (function App ({ location }) { 
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const { pathname } = location;
    console.log("New path:", pathname, "Previous path: ", currentPath);
    setCurrentPath(pathname);
  }, [location.pathname]);

  return (
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/Transition" component={Transition}/>
      </Switch>
  );
});
