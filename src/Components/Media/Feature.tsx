import type { FeatureProps } from "../../Utils/Interfaces";

const Feature: React.FC<FeatureProps> = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-start gap-3 bg-custom-violet-900 p-5 rounded-sm shadow-md">
      <div className="flex items-center gap-3">
        <div className="bg-custom-teal-500/20 p-2 rounded-sm">
          <Icon width={40} fill="#5fe1c5" />
        </div>
        <h1 className="text-xl font-share-tech-mono">{title}</h1>
      </div>
      <p className="text-md">{description}</p>
    </div>
  );
};

export default Feature;
