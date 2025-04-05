import BredCrumb from "@/components/BredCrumb";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import OurTeam from "@/components/our-team";

function OurStaff() {
  return (
    <>
      <Navbar />
      <BredCrumb  title="Our Staff" subtitle="Home - Our wStaff"/>
      <OurTeam />
      <ContactUs />

      <Footer />
    </>
  );
}

export default OurStaff;
