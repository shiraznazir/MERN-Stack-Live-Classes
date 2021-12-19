import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  BrowserRouter as Router,
} from "react-router-dom";
import routes from './routes';
import Routes from './routes';

function App() {
  return(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  );
}

export default App;
