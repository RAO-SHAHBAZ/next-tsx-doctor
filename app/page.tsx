import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import AboutUs from "@/components/about-us"
import ContactUs from "@/components/contact-us"
import FinanceSection from "@/components/finance-section"
import Footer from "@/components/footer"
import Services from "@/components/services"
import ShareStory from "@/components/share-story"
import Testimonials from "@/components/testimonials"
import EmergencyRepairs from "@/components/emergency-repairs"
import PartnerLogos from "@/components/partner-logos"
import LatestNews from "@/components/latest-news"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services/>
      <ShareStory/>
      <Testimonials/>
      <EmergencyRepairs/>
      <FinanceSection />
      <ContactUs />
      <PartnerLogos/>
      <LatestNews/>
      <Footer />
    </main>
  )
}

