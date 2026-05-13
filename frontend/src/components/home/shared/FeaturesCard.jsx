import PropTypes from "prop-types";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="group bg-[#101826] border border-white/10 rounded-2xl p-8 text-white transition-all duration-300 hover:border-[#F1F510] hover:-translate-y-1 hover:shadow-2xl">
      
      {/* Icon */}
      {icon && (
        <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
          <img
            className="w-8 h-8 object-contain"
            src={icon}
            alt={title}
          />
        </div>
      )}

      {/* Content */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default FeatureCard;