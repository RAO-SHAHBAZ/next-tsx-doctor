"use client"


import BlogList from "@/components/BlogList"
import BredCrumb from "@/components/BredCrumb"


const Home = () => {
  return (
    <>

     {/* <Header/>  */}
     <BredCrumb title="News & Blogs" />
    <BlogList/>
    
    {/* <Footer/> */}
    </>
  )
}

export default Home
