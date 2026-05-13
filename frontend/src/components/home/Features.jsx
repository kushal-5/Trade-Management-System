import Frame from "@/assets/images/frame.png";
import Checked from "@/assets/images/Checked.png";
import Real from "@/assets/icons/Real.png";
import Security from "@/assets/icons/Security.png";
import Portfolio from "@/assets/icons/Portfolio.png";
import User from "@/assets/icons/User.png";
import FeatureCard from "./shared/FeaturesCard";

const features = [
  "Get paid within 24 hours",
  "Realtime Trading",
  "Best Trading Platform",
];

const Features = () => {
  return (
    <section
      id="features"
      className="w-full px-6 md:px-12 lg:px-20 py-24 font-[Poppins]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Feature Banner */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#101826] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          
          {/* Left Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#F1F510] font-medium">
              Features
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
                <span className="text-[#F1F510]">Why Trading</span> With Our TMS
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
              Experience a smarter way to trade with powerful tools, secure
              transactions, and real-time market insights designed for modern
              traders.
            </p>

            {/* Feature Checklist */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img
                    src={Checked}
                    alt="checked"
                    className="w-5 h-5"
                  />
                  <p className="text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={Frame}
              alt="Trading Dashboard"
              className="w-full max-w-xl object-contain"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          <FeatureCard
            title="Real Time Trading"
            description="Live prices, charts, and alerts to help you react instantly to market changes."
            icon={Real}
          />

          <FeatureCard
            title="Secure Transactions"
            description="Advanced encryption and security systems keep your assets protected at all times."
            icon={Security}
          />

          <FeatureCard
            title="Portfolio Management"
            description="Track, manage, and optimize your investments from one unified dashboard."
            icon={Portfolio}
          />

          <FeatureCard
            title="User-Friendly Dashboard"
            description="Clean and intuitive interface designed for both beginners and experienced traders."
            icon={User}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;