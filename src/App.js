import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Landing from './pages/Landing';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
