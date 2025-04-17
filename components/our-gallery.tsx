import React from "react";

const galleryImages = [
  "/A7402951.jpg",
  "/A7402990.jpg",
  "/A7402954.jpg",
  "/A7402973.jpg",
  "/A7402957.jpg",
  "/A7402987.jpg",
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div className="md:w-1/2">
            <h2 className="uppercase text-[#1D5C5C] lg:text-left text-center text-base  mb-2">
              Gallery
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-left text-center leading-snug ">
            Witness Real Smile Transformations
            </h3>
          </div>
          <div className="md:w-1/2 text-gray-600 text-base leading-relaxed ">
            <p>
            Check out the before-and-after pictures of smiling and below of some aesthetic dental procedures with us. Such success stories enlighten us on the benefits of gaining self-confidence in real life through treatments such as Invisalign, veneers, and smile makeovers.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
