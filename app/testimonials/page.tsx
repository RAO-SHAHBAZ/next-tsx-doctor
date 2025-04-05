import BredCrumb from "@/components/BredCrumb"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import Navbar from "@/components/navbar"
import Testimonials from "@/components/testimonials"

function Invisalign() {
  return (
<>
    <Navbar/>
    <BredCrumb title="Testimonials" />
    <Testimonials/>
    {/* <GoogleReviews /> */}
    <Footer/>


</>
  )
}

export default Invisalign