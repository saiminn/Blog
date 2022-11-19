
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
// import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
    <div className="App">
    {/*  <Helmet>
                <meta charSet="utf-8" />
                <title>SM's Blog</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet> */}
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path='/create'>
              <Create/>
          </Route>
          <Route path='/blogs/:id'>
              <BlogDetails/> 
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;