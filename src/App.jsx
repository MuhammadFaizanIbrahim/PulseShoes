import React from 'react'
import Hero from './sections/Hero/Hero'
import Navbar from './sections/Navbar/Navbar'
import Footer from './sections/Footer/Footer'
import Carousel from './sections/ImageSlider/Carousel'

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Carousel />
      <Footer />
    </section>
  )
}

export default App