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
import { getUsers } from './utilities/users-api';
import Edit from './pages/Profile/Edit';
import AddProject from './pages/Profile/AddProject';

const App = () => {

  const [user, setUser] = useState(getUser())

  const [users, setUsers] = useState([
    {
      name: 'Lara Croft',
      pic: 'https://img.freepik.com/premium-photo/beauty-blogger-nice-female-filming-daily-make-up-routine-tutorial-camera-influencer-young-woman-live-streaming-cosmetics-product-review-home-studio-vlogger-job-diy-putting-makeup_341052-3107.jpg',
      role: 'influencer',
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      github: 'https://github.com/lehitutoring',
      instagram: 'https://www.instagram.com/obiwannicola',
      portfolio: 'https://www.martinnicola.com',
      email: 'martinnicola89@gmail.com',
      projects: [
        {
          name: 'Pokemon Adventures',
          img: 'https://github.com/lehitutoring/pokedex/raw/main/public/images/team.png',
          description: 'Pokemon Adventures (a.k.a. The Pokedex app) is a single-player adventure game in which players have access upon login to every single pokemon across all different regions. Users can catch and release pokemon as they please.',
          github: 'https://github.com/lehitutoring/pokedex',
          technologies: ['Express.js', 'Node.js', 'Google Oauth', 'Bootstrap', 'PokeAPI'],
          deployed: 'https://pokemon-adventures.up.railway.app/pokedex'
        },
        {
          name: 'Connect Four',
          img: 'https://github.com/lehitutoring/connect-four/blob/main/img/main-gameplay.png?raw=true',
          description: 'Connect Four is a two-player strategy game in which players take turns dropping colored discs into a vertical grid. The first player to connect four discs of their color in a row, either horizontally, vertically, or diagonally, wins the game.',
          github: 'https://github.com/lehitutoring/connect-four',
          technologies: ['HTML', 'CSS', 'JS'],
          deployed: 'https://lehitutoring.github.io/connect-four/'
        }
      ]
    },
    {
      name: 'Ashley Olsen',
      pic: 'https://media.istockphoto.com/id/1210513797/photo/tv-reporter-at-the-airport.jpg?s=612x612&w=0&k=20&c=VgjIKuXd428Mi6QdNXMFcLVBSjbtXYBJ0j6tOC_Mwxo=',
      role: 'journalist',
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      github: 'https://github.com/lehitutoring',
      instagram: 'https://www.instagram.com/obiwannicola',
      portfolio: 'https://www.martinnicola.com',
      email: 'martinnicola89@gmail.com',
      projects: [
        {
          name: 'Pokemon Adventures',
          img: 'https://github.com/lehitutoring/pokedex/raw/main/public/images/team.png',
          description: 'Pokemon Adventures (a.k.a. The Pokedex app) is a single-player adventure game in which players have access upon login to every single pokemon across all different regions. Users can catch and release pokemon as they please.',
          github: 'https://github.com/lehitutoring/pokedex',
          technologies: ['Express.js', 'Node.js', 'Google Oauth', 'Bootstrap', 'PokeAPI'],
          deployed: 'https://pokemon-adventures.up.railway.app/pokedex'
        },
        {
          name: 'Connect Four',
          img: 'https://github.com/lehitutoring/connect-four/blob/main/img/main-gameplay.png?raw=true',
          description: 'Connect Four is a two-player strategy game in which players take turns dropping colored discs into a vertical grid. The first player to connect four discs of their color in a row, either horizontally, vertically, or diagonally, wins the game.',
          github: 'https://github.com/lehitutoring/connect-four',
          technologies: ['HTML', 'CSS', 'JS'],
          deployed: 'https://lehitutoring.github.io/connect-four/'
        }
      ]
    },
    {
      name: 'Kate Moss',
      pic: 'https://images.unsplash.com/photo-1618053448748-b7251851d014?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBzY2llbnRpc3R8ZW58MHx8MHx8&w=1000&q=80',
      role: 'scientist',
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      github: 'https://github.com/lehitutoring',
      instagram: 'https://www.instagram.com/obiwannicola',
      portfolio: 'https://www.martinnicola.com',
      email: 'martinnicola89@gmail.com',
      projects: [
        {
          name: 'Pokemon Adventures',
          img: 'https://github.com/lehitutoring/pokedex/raw/main/public/images/team.png',
          description: 'Pokemon Adventures (a.k.a. The Pokedex app) is a single-player adventure game in which players have access upon login to every single pokemon across all different regions. Users can catch and release pokemon as they please.',
          github: 'https://github.com/lehitutoring/pokedex',
          technologies: ['Express.js', 'Node.js', 'Google Oauth', 'Bootstrap', 'PokeAPI'],
          deployed: 'https://pokemon-adventures.up.railway.app/pokedex'
        },
        {
          name: 'Connect Four',
          img: 'https://github.com/lehitutoring/connect-four/blob/main/img/main-gameplay.png?raw=true',
          description: 'Connect Four is a two-player strategy game in which players take turns dropping colored discs into a vertical grid. The first player to connect four discs of their color in a row, either horizontally, vertically, or diagonally, wins the game.',
          github: 'https://github.com/lehitutoring/connect-four',
          technologies: ['HTML', 'CSS', 'JS'],
          deployed: 'https://lehitutoring.github.io/connect-four/'
        }
      ]
    },
    {
      name: 'John Doe',
      pic: 'https://media.istockphoto.com/id/1134698162/photo/successful-teacher.jpg?s=612x612&w=0&k=20&c=6QxvrMitNZNEaSrWKH7CdckkIk8Z2Qkxpxq7zw1oRBc=',
      role: 'teacher',
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      github: 'https://github.com/lehitutoring',
      instagram: 'https://www.instagram.com/obiwannicola',
      portfolio: 'https://www.martinnicola.com',
      email: 'martinnicola89@gmail.com',
      projects: [
        {
          name: 'Pokemon Adventures',
          img: 'https://github.com/lehitutoring/pokedex/raw/main/public/images/team.png',
          description: 'Pokemon Adventures (a.k.a. The Pokedex app) is a single-player adventure game in which players have access upon login to every single pokemon across all different regions. Users can catch and release pokemon as they please.',
          github: 'https://github.com/lehitutoring/pokedex',
          technologies: ['Express.js', 'Node.js', 'Google Oauth', 'Bootstrap', 'PokeAPI'],
          deployed: 'https://pokemon-adventures.up.railway.app/pokedex'
        },
        {
          name: 'Connect Four',
          img: 'https://github.com/lehitutoring/connect-four/blob/main/img/main-gameplay.png?raw=true',
          description: 'Connect Four is a two-player strategy game in which players take turns dropping colored discs into a vertical grid. The first player to connect four discs of their color in a row, either horizontally, vertically, or diagonally, wins the game.',
          github: 'https://github.com/lehitutoring/connect-four',
          technologies: ['HTML', 'CSS', 'JS'],
          deployed: 'https://lehitutoring.github.io/connect-four/'
        }
      ]
    },
    {
      name: 'Alex Steward',
      pic: 'https://media.istockphoto.com/id/514236016/photo/successful-business-woman-or-lawyer.jpg?s=612x612&w=0&k=20&c=SPMlCdN-13Z9M2y3Qpjq7VJHeLqrrUpr62XV_Co5zhE=',
      role: 'lawyer',
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      github: 'https://github.com/lehitutoring',
      instagram: 'https://www.instagram.com/obiwannicola',
      portfolio: 'https://www.martinnicola.com',
      email: 'martinnicola89@gmail.com',
      projects: [
        {
          name: 'Pokemon Adventures',
          img: 'https://github.com/lehitutoring/pokedex/raw/main/public/images/team.png',
          description: 'Pokemon Adventures (a.k.a. The Pokedex app) is a single-player adventure game in which players have access upon login to every single pokemon across all different regions. Users can catch and release pokemon as they please.',
          github: 'https://github.com/lehitutoring/pokedex',
          technologies: ['Express.js', 'Node.js', 'Google Oauth', 'Bootstrap', 'PokeAPI'],
          deployed: 'https://pokemon-adventures.up.railway.app/pokedex'
        },
        {
          name: 'Connect Four',
          img: 'https://github.com/lehitutoring/connect-four/blob/main/img/main-gameplay.png?raw=true',
          description: 'Connect Four is a two-player strategy game in which players take turns dropping colored discs into a vertical grid. The first player to connect four discs of their color in a row, either horizontally, vertically, or diagonally, wins the game.',
          github: 'https://github.com/lehitutoring/connect-four',
          technologies: ['HTML', 'CSS', 'JS'],
          deployed: 'https://lehitutoring.github.io/connect-four/'
        }
      ]
    },
    {
      name: 'Danny Smith',
      pic: 'https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc=',
      role: 'computer scientist',
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      github: 'https://github.com/lehitutoring',
      instagram: 'https://www.instagram.com/obiwannicola',
      portfolio: 'https://www.martinnicola.com',
      email: 'martinnicola89@gmail.com',
      projects: [
        {
          name: 'Pokemon Adventures',
          img: 'https://github.com/lehitutoring/pokedex/raw/main/public/images/team.png',
          description: 'Pokemon Adventures (a.k.a. The Pokedex app) is a single-player adventure game in which players have access upon login to every single pokemon across all different regions. Users can catch and release pokemon as they please.',
          github: 'https://github.com/lehitutoring/pokedex',
          technologies: ['Express.js', 'Node.js', 'Google Oauth', 'Bootstrap', 'PokeAPI'],
          deployed: 'https://pokemon-adventures.up.railway.app/pokedex'
        },
        {
          name: 'Connect Four',
          img: 'https://github.com/lehitutoring/connect-four/blob/main/img/main-gameplay.png?raw=true',
          description: 'Connect Four is a two-player strategy game in which players take turns dropping colored discs into a vertical grid. The first player to connect four discs of their color in a row, either horizontally, vertically, or diagonally, wins the game.',
          github: 'https://github.com/lehitutoring/connect-four',
          technologies: ['HTML', 'CSS', 'JS'],
          deployed: 'https://lehitutoring.github.io/connect-four/'
        }
      ]
    }
  ])

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
            <Route path="/" element={<Cards users={users} setDetails={setDetails}/>} />
            <Route path="/messenger" element={<Messenger user={user} />} />      
            <Route path="/:id" element={<Detail details={details} user={user} setDetails={setDetails} setUser={setUser} />} />
            <Route path="/profile/edit" element={<Edit setUser={setUser} setDetails={setDetails} />} />
            <Route path="/profile/addProject" element={<AddProject setUser={setUser} setDetails={setDetails} />} />
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
