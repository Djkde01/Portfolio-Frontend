import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Header/>
      <Button text="Know my work" link="/"/>
      <Footer/>
    </div>
  );
}

export default App;
