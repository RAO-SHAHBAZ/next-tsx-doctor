  import Footer from "@/components/footer"
  import Navbar from "@/components/navbar"
import Link from "next/link"
  
  function NotFound() {
    return (
  <>
      <Navbar/>
      <section className="flex justify-center items-center flex-col min-h-[500px]">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, the page you're looking for doesn’t exist.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back home
        </Link>
      </section>
      <Footer/>
  
  
  </>
    )
  }
  
  export default NotFound
  