import { useState, useRef, useEffect } from "react";
import EnglandFlag from "../assets/Img/england.jpg";
import IndiaFlag from "../assets/Img/ind-flag.jpg";
import PakistanFlag from "../assets/Img/pakistan.png";

const CountryDropdown = () => {
  const [selectedFlag, setSelectedFlag] = useState(EnglandFlag);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const flags = [
      { flag: EnglandFlag, alt: "UK" },
      { flag: IndiaFlag, alt: "India" },
    { flag: PakistanFlag, alt: "Pakistan" },
  ];

  const handleSelect = (flag) => {
    setSelectedFlag(flag);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <span ref={dropdownRef} className="hidden md:block relative inline-block">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center"
      >
        <img src={selectedFlag} className="w-12 xl:w-20 2xl:w-40" alt="Selected Flag" />
        <span className="ml-1">▼</span>
      </button>

      {/* Dropdown Menu (Fixed) */}
      {isOpen && (
        <span className="absolute left-0 top-full mt-1 w-16 bg-white shadow-lg rounded-lg z-50 border">
          {flags.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSelect(item.flag)}
              className="flex items-center p-1 hover:bg-gray-100 justify-center"
            >
              <img src={item.flag} className=" w-16" alt={item.alt} />
            </button>
          ))}
        </span>
      )}
    </span>
  );
};

export default CountryDropdown;
