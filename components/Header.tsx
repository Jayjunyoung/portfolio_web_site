"use client";

interface HeaderProps {
  handleNavClick: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ handleNavClick }) => {
  return (
    <div className="flex justify-around items-center w-full h-[150px] text-3xl z-10">
      <div
        className="flex items-center relative group"
        onClick={() => handleNavClick("about")}
      >
        <span>About</span>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
      </div>
      <div
        className="flex items-center relative group"
        onClick={() => handleNavClick("projects")}
      >
        <span>Projects</span>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
      </div>
      <div
        className="flex items-center relative group"
        onClick={() => handleNavClick("contact")}
      >
        <span>Contact</span>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
      </div>
    </div>
  );
};

export default Header;
