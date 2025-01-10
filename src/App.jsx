import React from 'react'
import NavBar from './Components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
<NavBar/>
<Home/>
<About/>
<Portfolio/>
<Experience/>
<Contact/>

<SocialLinks/>


    </div>
  )
}

export default App
