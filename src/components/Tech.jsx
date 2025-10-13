import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="w-24 h-24 rounded-2xl bg-tertiary/60 ring-1 ring-white/10 shadow-card flex items-center justify-center overflow-hidden"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-12 h-12 object-contain opacity-90"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
