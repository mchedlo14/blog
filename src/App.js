import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import CreatePosts from './pages/CreatePosts'
import Home from './pages/Home'
import './App.css'
import Login from './pages/Login'
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {auth} from './firebase-config'



const App = () => {
  const [isAuth,setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname='/login'
    })
  }

  return (
    <Router>
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/create'> Create Post</Link>
        {!isAuth ? <Link to='/login'> Login </Link> : <button onClick={signUserOut}>Log Out</button>}
      </nav>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/createpost'  element={<CreatePosts />}/>
        <Route path='/login'  element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  )
}

export default App