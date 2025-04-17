  "use client"

  import { useEffect, useRef } from "react"

  export default function PartnerLogos() {
    const logo1 = "boutique-whitening.jpg"
    const logo2 = "bioclear.jpg"
    const logo3 = "straumann.jpg"
    const logo4 = "nhs-scotland.jpg"
    const logo5 = "neodent.jpg"
    const logo6 = "itero.jpg"
    const logo7 = "dentsply-sirona.jpg"
    const bg = "/bg.png"

    // Logos for Mobile
    const logom1 = "/logo-m.png"
    const logom2 = "/logo-m2.png"

    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7] // Duplicated for seamless loop
    const mobileLogos = [logo1, logo2, logo3, logo4] // Mobile logos
    const scrollRef = useRef<HTMLDivElement>(null)
    const mobileScrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const scrollContainer = scrollRef.current
      if (!scrollContainer) return

      let scrollAmount = 0
      const scrollSpeed = 1 // Adjust speed if needed
      const maxScroll = scrollContainer.scrollWidth / 2

      const scroll = () => {
        scrollAmount += scrollSpeed
        if (scrollAmount >= maxScroll) {
          scrollContainer.scrollLeft = 0
          scrollAmount = 0
        } else {
          scrollContainer.scrollLeft = scrollAmount
        }
        requestAnimationFrame(scroll)
      }

      const animation = requestAnimationFrame(scroll)
      return () => cancelAnimationFrame(animation)
    }, [])

    // Mobile scrolling effect
    useEffect(() => {
      const mobileContainer = mobileScrollRef.current
      if (!mobileContainer) return

      let scrollAmount = 0
      const scrollSpeed = 0.8
      const maxScroll = mobileContainer.scrollWidth / 2

      const scroll = () => {
        scrollAmount += scrollSpeed
        if (scrollAmount >= maxScroll) {
          mobileContainer.scrollLeft = 0
          scrollAmount = 0
        } else {
          mobileContainer.scrollLeft = scrollAmount
        }
        requestAnimationFrame(scroll)
      }

      const animation = requestAnimationFrame(scroll)
      return () => cancelAnimationFrame(animation)
    }, [])

    return (
      <div className="relative w-full">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#1D5C5C] opacity-91"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative container mx-auto py-16">
          {/* Desktop Carousel */}
          <div className="hidden md:block">
            <div
              ref={scrollRef}
              className="flex items-center gap-16 whitespace-nowrap overflow-hidden w-full"
            >
              {logos.concat(logos).map((logo, index) => (
                <img key={index} src={logo || "/placeholder.svg"} alt={`Partner ${index}`} className="h-10 md:h-20" />
              ))}
            </div>
          </div>

          {/* Mobile Scrolling Logos */}
          <div className="md:hidden overflow-hidden w-full">
            <div
              ref={mobileScrollRef}
              className="flex items-center gap-4 whitespace-nowrap overflow-hidden w-full"
            >
              {mobileLogos.concat(mobileLogos).map((logo, index) => (
                <img key={index} src={logo || "/placeholder.svg"} alt={`Mobile Partner ${index}`} className="h-12" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }