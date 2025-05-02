import React, { Suspense, lazy } from 'react';
const Hero = lazy(() => import('./sections/Hero/Hero'));
import Navbar from './sections/Navbar/Navbar'
import Footer from './sections/Footer/Footer'
import Carousel from './sections/ImageSlider/Carousel'
import Loader from './components/Loader/Loader';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
    <section>
      <Navbar />
      <Hero />
      <Carousel />
      <Footer />
    </section>
    </Suspense>
  )
}

export default App