import {BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import Index from './Pages/Index'
import About from './Pages/about/About'
import { ThemeContext } from './Components/context/context';
import { useContext } from 'react';
import './index.css'

function App() {
     const dark = useContext(ThemeContext)

  return (
    <div style={dark}>
      <Router>
        <div>
          <h1>Welcome to my first react app!</h1>
          <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/about/" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
