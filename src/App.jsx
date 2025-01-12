import React from 'react'


import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'

import Experience from './components/Experience'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Portfolio from "./components/Portfolio";

import Skills from './components/Skills'


const App = () => {
  return (
    <div>
<Nav />
<Home/>
<About/>
<Skills/>
<Portfolio />
<Experience/>
<Contact/>

<SocialLinks/>


    </div>
  )
}

export default App
