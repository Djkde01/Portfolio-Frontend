import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter} from 'react-router-dom';
import Transition from './components/Transition';
import About from './pages/About';
import Contact from "./pages/Contact";
import Landing from './pages/Landing';
import Projects from './pages/Projects';


export default withRouter (function App ({ location }) { 
  const [currentPath, setCurrentPath] = useState(location.pathname);
  
  const [ position, setPosition ] = useState("down");
  
  useEffect(() => {
    const { pathname } = location;
    if (pathname !== currentPath){
      setPosition("up")
    }
    setCurrentPath(pathname);
    setTimeout(function(){setPosition("down")},2000);
  }, [location.pathname]);

  return (
    <>
      <Transition position={position}/>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </>
  );
});
