"use client";

export default function Header() {
  return (
    <div className="flex justify-evenly items-center w-full h-[150px] text-3xl z-10">
      <div className="flex items-center w-auto relative group">
        <span>FrontEnd-Engineer</span>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
      </div>
      <div className="flex items-center relative group">
        <span>about</span>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
      </div>
      <div className="flex items-center relative group">
        <span>projects</span>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
      </div>
      <div className="flex items-center relative group">
        <span>contact</span>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
      </div>
    </div>
  );
}
