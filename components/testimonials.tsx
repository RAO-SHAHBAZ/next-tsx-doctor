"use client"

import { useState, useEffect } from "react"
import { Circle } from "lucide-react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Emma Stephon",
      testimonial:
        "I am glad to share that I have the best dentist ever. They did an amazing job. I love my new smile!' I had an excellent experience at City Dental Care, and the Invisalign process was smooth and seamless. I highly recommend it!",
      image: "/client_1.png",
    },
    {
      id: 2,
      name: "John Lary",
      testimonial:
        "Since my first visit, I have felt like family has surrounded me. The staff is friendly and qualified, and the work is of high quality. This was the best dental experience I've had!",
      image: "/client_2.jpg.png",
    },
    {
      id: 3,
      name: "Sarah Evans",
      testimonial:
        "That could be due to the fact that as soon as I entered the premises, I was welcomed like one of the family. I must note that all staff members are professional, friendly, and prompt with their work.",
      image: "/client_1.png",
    },
    {
      id: 4,
      name: "Michael Reid",
      testimonial:
        "With the help of City Dental Care, my smile became totally different. The staff's personalised approach is seen as a positive thing because it makes everyone feel like they are important.",
      image: "/client_2.jpg.png",
    },
    {
      id: 5,
      name: "Lily Green",
      testimonial:
        "If I may say so, my cosmetic treatment experience was remarkable. The results exceeded my expectations!",
      image: "/client_1.png",
    },
    {
      id: 6,
      name: "David Clark",
      testimonial:
        'I wish I could give them six stars. It has been the most comfortable and best dental experience I have ever had." Friendly staff, expert care, and a relaxing environment.',
      image: "/client_2.jpg.png",
    },
  ]

  const totalGroups = Math.ceil(testimonials.length / 3) // Groups of 3

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 3) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="container h-auto w-full max mx-auto px-4 py-10 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-center">What Do Our Patients Think?</h2>
      <p className="mb-25 text-center max-w-3xl text-gray-500">
        The real-life patient experiences and reviews demonstrate our dedication to delivering high-quality patient
        care. Our patients consistently validate the remarkable results and top-tier treatment they received at our
        facility for Invisalign and cosmetic procedures.
      </p>

      {/* Carousel - Always Show Exactly 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        {testimonials.slice(activeIndex, activeIndex + 3).map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative bg-[#e0f2ed] rounded-lg p-6 pt-16 pb-10 transition-all duration-300 hover:shadow-2xl min-h-[250px]"
          >
            {/* Profile Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-md">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="px-4 text-center">
              <q className="text-gray-800 mb-6 italic text-sm md:text-base leading-relaxed">
                {testimonial.testimonial}
              </q>
              <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots - One Dot Per 3 Cards */}
      <div className="hidden md:flex justify-center gap-4 mt-12">
        {[...Array(totalGroups)].map((_, groupIndex) => (
          <button
            key={groupIndex}
            onClick={() => setActiveIndex(groupIndex * 3)}
            className={`transition-all duration-300 ${
              Math.floor(activeIndex / 3) === groupIndex ? "text-[#1d5c5c]" : "text-gray-400"
            }`}
          >
            <Circle size={12} />
          </button>
        ))}
      </div>
    </div>
  )
}

