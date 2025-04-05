export default function Maps() {
  return (
    <section className="w-full relative">
      <div className="relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1d5c5c]/60 z-10 pointer-events-none"></div>
        {/* Google Maps Iframe */}
        <iframe
          title="City Dental Care Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.272867963509!2d-3.2069951230280327!3d55.94464237315582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c798b47205cb%3A0x2774b54f62097fea!2sCity%20Dental%20Care%20-%20NHS%20%26%20Private%20Dental%20Care!5e0!3m2!1sen!2s!4v1743893563223!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[200px] md:h-[450px]"
        ></iframe>
      </div>
    </section>
  );
}