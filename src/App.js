import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import alanBtn from '@alan-ai/alan-sdk-web'

import Home from './pages/Home'
import About from './pages/About'
import SinglePost from './pages/SinglePost'
import Portfolio from './pages/Portfolio'
import Project from './pages/Project'
import Navbar from './pages/Navbar';
import "./styles/app.css"

const alanKey = '1734afdc8af12e2f9d5ab5c7259cba732e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === 'testCommand')
          window.open(`http://localhost:3000/about`, "_self")
      }
    })
  }, [])

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
              <Route component={SinglePost} path='/portfolio/:slug' />
              <Route component={Portfolio} path='/portfolio' />
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
