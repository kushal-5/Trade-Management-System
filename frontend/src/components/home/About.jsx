import BnB from "@/assets/images/BnB.svg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-6 md:px-12 lg:px-20 py-24 font-[Poppins]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Section Label */}
        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-[#F1F510] font-medium">
          About the Platform
        </p>

        {/* Heading */}
        <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl">
          <span className="text-[#F1F510]">
            Empowering Traders,
          </span>{" "}
          Simplifying Success
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
          SWIVT TMS is an advanced online trading platform designed to empower
          traders with intuitive tools, powerful analytics, and a seamless
          trading experience for users of all levels.
        </p>

        {/* Image */}
        <div className="mt-16 w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
          <img
            src={BnB}
            alt="Trading Dashboard"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;