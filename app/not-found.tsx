import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";


export default function NOTFOUND() {
  return (

    <>
    
    <Navbar/>
    <section className="w-full relative  ">
      <div className="md:col-span-9 relative">
        <div className="absolute inset-0 bg-[#1d5c5c]/80 z-10"></div>
        <div
          className="w-full h-[200px] md:h-[550px] bg-cover bg-center"
          style={{ backgroundImage: `url(/story.jpeg)` }}
        ></div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
            404 <br /> Page Not Found
          </h2>
          <p>
            Sorry The Page You Are Looking For Dosen't Exist.
          </p>
          <br />
          <Link href="/" className="bg-[#319684] text-[#FFFFFF] px-20 py-4 inline-block uppercase font-medium">
            Go to Home
          </Link>
          
        </div>
      </div>
    </section>

    <Footer/>
    
    </>
  );
}
