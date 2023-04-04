import './App.css';
import React, { useState, useEffect } from 'react'
import Messenger from './pages/Messenger/Messenger';
import Navbar from './components/Navbar/Navbar';
import Cards from './pages/Cards/Cards';
import Detail from './pages/Detail/Detail';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Landing from './pages/Landing/Landing';
import { getUser } from './utilities/users-service';
import { getFriendships, getUsers } from './utilities/users-api';
import Edit from './pages/Profile/Edit';
import AddProject from './pages/Profile/AddProject';

const App = () => {

  const [user, setUser] = useState(getUser())
  const [users, setUsers] = useState([])
  const [details, setDetails] = useState(getUser())

  useEffect(() => {
    async function fetchData() {
      setUsers(await getUsers())
    }
    fetchData()
  }, [])

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  
  return (
    <div className="App">
      <Navbar user={user} handleLogout={handleLogout} setDetails={setDetails}/>
      <Routes>
      {
        user ?
        <>
          { users && 
            <>        
              <Route path="/" element={<Cards users={users} setDetails={setDetails}/>} />
              <Route path="/messenger" element={<Messenger user={user} />} />      
              <Route path="/:id" element={<Detail details={details} user={user} setDetails={setDetails} setUser={setUser} />} />
              <Route path="/profile/edit" element={<Edit setUser={setUser} setDetails={setDetails} />} />
              <Route path="/profile/addProject" element={<AddProject setUser={setUser} setDetails={setDetails} />} />
            </>
          } 
        </>
    
        :
        <>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/signup" element={<Signup setUser={setUser}/>} /> 
        </>
      }
      </Routes>
    </div>
  );
}

export default App;
