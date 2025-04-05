import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import OurTeam from '@/components/our-team';
import ContactUs from '@/components/contact-us';
import BredCrumb from '@/components/BredCrumb';


export default function AboutUsPage() {
  return (
    <div>
        
        
        <Navbar/>
        <BredCrumb  title="About Us"/>
        <OurTeam/>
        <ContactUs/>
      <Footer/>
    </div>
  );
}