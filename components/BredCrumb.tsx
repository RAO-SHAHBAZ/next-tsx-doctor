// BredCrumb.tsx

import Link from "next/link";
import React from "react";

type BredCrumbProps = {
  title: string;
};

export default function BredCrumb({ title }: BredCrumbProps) {
  return (
    <section className="w-full relative">
      <div className="md:col-span-9 relative">
        <div className="absolute inset-0 bg-[#1d5c5c]/80 z-10"></div>
        <div
          className="w-full h-[200px] md:h-[450px] bg-cover bg-center"
          style={{ backgroundImage: `url(/story.jpeg)` }}
        ></div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
            {title}
          </h2>
          <p><Link href="/" className="hover:underline">Home</Link> - {title}</p>
        </div>
      </div>
    </section>
  );
}
