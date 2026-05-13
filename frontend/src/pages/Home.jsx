import Bull from "@/assets/icons/Bull.png";
import About from "../components/home/About";
import Features from "../components/home/Features";
import Insights from "../components/home/Insights";
import Contacts from "../components/home/Contacts";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-center min-h-auto ml-35 my-30">
        <div className="flex flex-row w-full">
          <div className="flex flex-col items-start pt-20 text-left tracking-wide">
            <h1 className="text-[64px] font-bold text-[#F1F510] sm:text-3xl lg:text-6xl my-4">
              Trade Smarter
            </h1>
            <h1 className="text-[64px] font-bold text-[#f3f2f2] sm:text-3xl lg:text-6xl my-4">
              Faster Seamlessly
            </h1>

            <p className="text-[#f3f2f2] text-xl/10 my-5">
              TMS Trading simplifies investing with intuitive tools,
              real-time data, and streamlined management to help you maximize
              your portfolio.
            </p>

            <div className="flex items-center justify-start space-x-4 mb-15">
              <a
                href="/signin"
                className="text-white px-12 py-[30px] border rounded-full hover:bg-[#F1F510] hover:text-black transition-colors duration-300"
              >
                Get Started Now
              </a>
              <a
                href="/signin"
                className="text-white px-12 py-[30px] border rounded-full hover:bg-[#F1F510] hover:text-black transition-colors duration-300"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end h-auto scale-110">
          <img src={Bull} alt="Bull" className="object-cover" />
        </div>
      </div>

      <About />
      <Features />
      <Insights />
      <Contacts />
    </div>
  );
};

export default Home;
