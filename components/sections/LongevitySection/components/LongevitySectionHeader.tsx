import { ArrowUpRight } from "lucide-react";
import longevityCardData, {
  LongevityCardDataType,
} from "../data/longevityCardData";

interface LongevityHeaderProps {
  selectedIndex: number;
  selectCategory: (ind: number) => void;
}

const LongevitySectionHeader: React.FC<LongevityHeaderProps> = ({
  selectedIndex,
  selectCategory,
}) => {
  return (
    <header className="flex flex-col justify-between gap-7 md:gap-12 lg:flex-row lg:items-start">
      {/* Title */}
      <div className="flex self-stretch flex-col justify-center lg:w-2/5">
        <h2 className="text-section font-light uppercase tracking-tight text-neutral-700">
          LONGEVITY SYSTEMS
        </h2>
      </div>

      {/* Desktop Categories */}
      <div className="hidden flex-1 grid-cols-2 gap-x-10 md:grid">
        {longevityCardData.map((category: LongevityCardDataType, ind) => (
          <div
            key={category.id}
            onClick={() => selectCategory(ind)}
            className="group flex cursor-pointer items-center justify-between border-b border-neutral-200 py-3"
          >
            <p
              className={`text-19 transition-colors duration-200 ${
                selectedIndex === ind
                  ? "font-medium text-neutral-900"
                  : "text-neutral-600 group-hover:text-neutral-900"
              }`}
            >
              {category.title}
            </p>

            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              className={`transition-all duration-300 ${
                selectedIndex === ind
                  ? "translate-x-0 opacity-100"
                  : "translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Mobile Select */}
      <div className="md:hidden">
        <select
          className="w-full border-b border-neutral-200 bg-transparent py-4 text-18 outline-none"
          value={selectedIndex}
          onChange={(e) => selectCategory(Number(e.target.value))}
        >
          {longevityCardData.map((item, index) => (
            <option key={item.id} value={index}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default LongevitySectionHeader;