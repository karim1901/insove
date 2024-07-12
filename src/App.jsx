import Appiontement from "./components/appiontement"
import Blog from "./components/blog"
import Brands from "./components/brands"
import Departments from "./components/departments"
import Faq from "./components/faq"
import Footer from "./components/footer"
import Header from "./components/header"
import Hero from "./components/hero"
import Newsletter from "./components/newLetter"
import Services from "./components/services"
import Stats from "./components/stats"
import Team from "./components/team"
import Testimonials from "./components/testimonials"

function App() {


  return <div>
    <Header/>
    <Hero/>
    <Stats/>
    <Services/>
    <Appiontement/>
    <Testimonials/>
    <Team/>
    <Faq/>
    <Departments/>
    <Blog/>
    <Brands/>
    <Newsletter/>
    <Footer/>
  </div>
}

export default App
