import { motion } from "framer-motion";

interface MenuIconProps {
  isOpen: boolean;
  className:string
}

const MenuIcon: React.FC<MenuIconProps> = ({ isOpen,className }) => {
  const color = isOpen ? "#51463E" : "#F9F5F0";
  const middleColor = isOpen ? "#51463E" : "#E2D3C3";

  return (
    <svg width="44" height="32" viewBox="0 0 44 32"
  className={className} fill="none">
      {/* Top */}
      <motion.line
        x1="0"
        y1="1"
        x2="44"
        y2="1"
        stroke={color}
        strokeWidth="2"
        animate={{
          y: isOpen ? 15 : 0,
          rotate: isOpen ? 45 : 0,
        }}
        style={{ transformOrigin: "22px 1px" }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Middle */}
      <motion.line
        x1="0"
        y1="16"
        x2="44"
        y2="16"
        stroke={middleColor}
        strokeWidth="2"
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Bottom */}
      <motion.line
        x1="0"
        y1="31"
        x2="44"
        y2="31"
        stroke={color}
        strokeWidth="2"
        animate={{
          y: isOpen ? -15 : 0,
          rotate: isOpen ? -45 : 0,
        }}
        style={{ transformOrigin: "22px 31px" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />
    </svg>
  );
};

export default MenuIcon;