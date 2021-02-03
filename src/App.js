import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Posts from './components/Posts'
import Project from './components/Project'
import Navbar from './components/Navbar';
import "./styles/app.css"

function App() {
  return (
    <>
      <div className="App">
        <div className="sidebar">

          <Navbar />
        </div>
        {/* <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div> */}
        <div className="main-content">
          <div className="content">
            <Switch>
              <Route component={Home} path='/' exact />
              <Route component={About} path='/about' />
              <Route component={SinglePost} path='/post/:slug' />
              <Route component={Posts} path='/posts' />
              <Route component={Project} path='/project' />
            </Switch>
          </div>
        </div>
      </div>
    </>




    // <Router>
    //   <div className="maincontent">
    //     <div className="leftside">
    //       <Navbar />
    //     </div>
    //     <div className="rightside">
    //       <Switch>
    //         <Route component={Home} path='/' exact />
    //         <Route component={About} path='/about' />
    //         <Route component={SinglePost} path='/post/:slug' />
    //         <Route component={Posts} path='/posts' />
    //         <Route component={Project} path='/project' />
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
  )
}

export default App;
