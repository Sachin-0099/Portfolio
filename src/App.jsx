import React from 'react'


import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
<Nav />
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
