import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Categories from './components/Categories'
import Internships from './components/Internships'
import Courses from './components/Courses'
import Reviews from './components/Reviews'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Internships/>
      <Courses/>
      <Reviews/>
      <Footer/>
    </main>
  )
}
