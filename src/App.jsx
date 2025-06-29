import { useState } from 'react'

import './App.css'
import { About } from './components/sections/About'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { Home } from './components/sections/Home'
import { MobileMenu } from './components/MobileMenu'
import { Navbar } from './components/Navbar'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { Publication } from './components/sections/Publication'
import { ProfileDetails } from './components/sections/ProfileDetails'
import { SkillsSection } from './components/sections/SkillsSection'
import { Accomplishments } from './components/sections/Accomplishments'
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // FIXED: camelCase

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
<div
  className={`min-h-screen transition-opacity duration-700 ${
    isLoaded ? "opacity-100" : "opacity-0"
  } bg-blue-50 text-gray-900`}
>



        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> {/* FIXED */}
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> {/* FIXED */}
      
      <Home/>
        <About/>
         <ProfileDetails/>
      <SkillsSection/>
      <Projects/>
      <Publication/>
      <Contact/>
      </div>
    </>
  );
}


export default App
