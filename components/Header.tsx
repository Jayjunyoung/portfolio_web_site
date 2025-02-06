"use client";

interface HeaderProps {
  handleNavClick: (section: string) => void;
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  handleNavClick,
  menuOpen,
  toggleMenu,
}) => {
  return (
    <div className="flex justify-around items-center w-full h-[150px] text-xl sm:text-3xl z-10 relative">
      <div className="hidden sm:flex space-x-8 justify-around items-center w-full h-full">
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

      <div
        className="sm:hidden flex items-center cursor-pointer absolute right-8"
        onClick={toggleMenu}
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
