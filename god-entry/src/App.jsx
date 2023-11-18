import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import ReadPosts from '../components/ReadPosts'
import Search from '../components/Search'
import Logo from '../imgs/H.png'

import './App.css'
// Desc: This is the dependencies components/files for this React app.

/**
 * @file App.jsx is the root component for this React app.
 * @summary 
 */

function App() {

  return (
    <>
      <div className='App'>

        <div className='header-navbar'>
          <div className='header-logo'>
            <img id='Logo' src={Logo} alt="logo png" width={80} heigh={80} />
          </div>
            <Link to="/"><button className='headerBtn'>Home</button></Link>
            <Link to="/profile"><button className='headerBtn'>Profile</button></Link>
        </div>
        <div className='header'>
          {/* <div className='header-navbar'>*/}
          {/* <div for setting posts, filter, sorting  */}
          <div className='header-creator'>
            <h1> Jokes </h1>
            <Search />
            <Link to="/chamberofposts"><button id='creatorPost'>New Idea</button></Link>
            <div className='header-creator-option'>
              {/* <Link to="/chamber1"><button>Filter</button></Link> */}
              <button>Sort</button>
            </div>
          </div>
          <Outlet /> {/* Outlet enables the component to render its child routes.*/}
          <div className='body'>
            <ReadPosts />
          </div>
        </div>
      </div>
    </>
  )
}

export default App