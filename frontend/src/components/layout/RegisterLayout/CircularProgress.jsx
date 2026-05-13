import { useFormContext } from "../../../contexts/formProvider";

const CircularProgress = ({progress}) => {

  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[150px] aspect-square flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2}>
      {/* Background Circle */}
      <circle
        stroke="#1c1c1c"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {/* Progress Circle */}
      <circle
        stroke="#f5ff00"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{ transition: 'stroke-dashoffset 0.3s ease' }}
      />
      {/* Text */}
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fill="#f5ff00"
        fontSize="20"
        fontWeight="bold"
      >
        {`${progress}%`}
      </text>
    </svg>

      </div>
    </div>
  );
};

export default CircularProgress;
