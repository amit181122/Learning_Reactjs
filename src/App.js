import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BlogList from './Components/BlogList';
import BlogPost from './Components/BlogPost';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import About from './Components/About';
import Contact from './Components/Contact';



function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/blog" component={BlogList} />
        <Route path="/blog/:id" component={BlogPost} />
        <Route exact path="/notfound" component={NotFound} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
