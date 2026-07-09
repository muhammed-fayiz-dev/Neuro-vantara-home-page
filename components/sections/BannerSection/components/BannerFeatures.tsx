import { FC } from "react";

interface BannerFeatureProps {
  id: string;
  title: string;
}

const BannerFeature: FC<BannerFeatureProps> = ({ id, title }) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs text-white/60">{id}</span>

      <h3 className="text-sm font-medium text-white">
        {title}
      </h3>

      <div className="h-px w-full bg-gradient-to-r from-white/30 via-white/10 to-black/20" />
    </div>
  );
};

export default BannerFeature;