import './App.css';
import React, { useEffect } from 'react'
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/footer';
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({
      offset:200,
      duration:500
    })
   }, [])
  const about = ([
    {
      line1:'I am Jomari G. Tiu, a fourth year student from Cavite State University-Carmona, live in GMA, Cavite, Philippines, A self-taught programmer, Im a Introvert person who do not want to talk much but to work more, a patience and focus person the things I want to finish, I learn programming because it amaze me every time I learn something new and the sensation of problem solving.',
      line2:" Here are the technologies Im working with:"
    }
  ])

  const skills = ([
    {
      key:1,
      name:'React JS'
    },
    {
      key:2,
      name:'Tailwind CSS'
    },
    {
      key:3,
      name:'CSS'
    },
    {
      key:4,
      name:'Javascript'
    },
    {
      key:5,
      name:'MYSQL'
    },
    {
      key:6,
      name:'PHP'
    },
    {
      key:7,
      name:'AJAX'
    },
    {
      key:8,
      name:'HTML'
    }
  ])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Project></Project>
      <About skill_tool={skills} aboutMe={about}></About>
      <Footer></Footer>
    </div>
  );

}

export default App;
