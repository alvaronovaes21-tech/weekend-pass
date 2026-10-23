import { Audience } from './components/Audience'
import { ComboSpecial } from './components/ComboSpecial'
import { Courses } from './components/Courses'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { FloatingCta } from './components/FloatingCta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Identification } from './components/Identification'
import { Instructor } from './components/Instructor'
import { Offer } from './components/Offer'
import { Schedule } from './components/Schedule'
import { Toast } from './components/Toast'
import { VideoSection } from './components/VideoSection'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <VideoSection />
        <Identification />
        <Courses />
        <ComboSpecial />
        <Schedule />
        <Audience />
        <Instructor />
        <Offer />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCta />
      <Toast />
    </>
  )
}
