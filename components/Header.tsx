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
    <header className="relative z-10 text-white w-full">
      {/* 데스크톱 레이아웃(≥sm) */}
      <div className="hidden sm:flex justify-around items-center h-[150px] text-xl sm:text-3xl">
        <div
          className="flex items-center relative group cursor-pointer"
          onClick={() => handleNavClick("about")}
        >
          <span>About</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </div>
        <div
          className="flex items-center relative group cursor-pointer"
          onClick={() => handleNavClick("projects")}
        >
          <span>Projects</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </div>
        <div
          className="flex items-center relative group cursor-pointer"
          onClick={() => handleNavClick("contact")}
        >
          <span>Contact</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </div>
      </div>

      {/* 모바일 레이아웃(<sm) - 상단에 햄버거 버튼 */}
      <div className="sm:hidden flex items-center justify-end w-full h-[60px] px-4">
        <button onClick={toggleMenu} className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center z-50">
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={toggleMenu}
          >
            ✕
          </button>

          <div className="relative">
            <div
              className="my-4 text-2xl cursor-pointer group"
              onClick={() => handleNavClick("about")}
            >
              About
            </div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </div>

          <div className="relative">
            <div
              className="my-4 text-2xl cursor-pointer"
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </div>

          <div className="relative">
            <div
              className="my-4 text-2xl cursor-pointer"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
