import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Landing from './pages/Landing';
import Projects from './pages/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
