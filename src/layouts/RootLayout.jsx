import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SubHero from "../components/SubHero"
import ContentCards from "../components/ContentCards"
import Footer from "../components/Footer"

export default function RootLayout() {
  return (
    <div style={{ height: '100%' }}>
      <Navbar />
      <Hero />
      <SubHero />
      <ContentCards />
      <Footer />
    </div>
  )
}
