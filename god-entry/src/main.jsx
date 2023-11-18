import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import ChamberofPosts from '../pages/ChamberofPosts'
import Chamber1 from '../pages/Chamber1'
import Chamber2 from '../pages/Chamber2'
import Profile from "../pages/Profile"
import PostsMore from "../pages/PostsMore" 
import EditPosts from '../pages/EditPosts.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='chamber1' element={<Chamber1 />} />
          <Route path='chamber2' element={<Chamber2 />} />
        </Route>
        <Route path='chamberofposts' element={<ChamberofPosts />} />
        <Route path='profile' element={<Profile />} />
        <Route path='/edit/:id' element={<EditPosts/>} />
        <Route path='/posts/:id' element={<PostsMore />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
