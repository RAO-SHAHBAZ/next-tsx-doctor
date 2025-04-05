export default function Maps() {
  return (
    <section className="w-full relative">
      <div className="md:col-span-9 relative">
        <div className="absolute inset-0 bg-[#1d5c5c]/60 z-10"></div>
        <div
          className="w-full h-[200px] md:h-[450px] bg-cover bg-center"
          style={{ backgroundImage: `url(/Map-Figma.png)` }}
        ></div>
      </div>
    </section>
  );
}
