import { useState } from 'react'
import BootScreen from './components/BootScreen'
import Background from './components/Background'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Identity from './components/Identity'
import Builds from './components/Builds'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'

export default function App() {
  const [booted, setBooted] = useState(false)
  return (
    <>
      <BootScreen onComplete={() => setBooted(true)} />
      {booted && (
        <>
          <Cursor />
          <Background />
          <div style={{ position: 'relative', zIndex: 10 }}>
            <Navbar />
            <main>
              <Hero />
              <SectionDivider />
              <Identity />
              <SectionDivider />
              <Builds />
              <SectionDivider />
              <Contact />
            </main>
            <SectionDivider />
            <Footer />
          </div>
        </>
      )}
    </>
  )
}
