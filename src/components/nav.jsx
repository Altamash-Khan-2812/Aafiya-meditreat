import { useState, useEffect } from "react";

const NavContent = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/" },
  { name: "treatment +", link: "/" },
  { name: "Destinations +", link: "/" },
  { name: "Hospitals", link: "/" },
  { name: "FAQs", link: "/" },
  { name: "Blog", link: "/" },
  { name: "Request a Quote", link: "/" },
];

function MainNav() {
  const [isHambergunClicked, setIsHambergunClicked] = useState(false);

  return (
    <>
      <nav className="bg-blue-500 px-10 py-5 xl:py-0">
        <HambergunButton
          isHambergunClicked={isHambergunClicked}
          setIsHambergunClicked={setIsHambergunClicked}
        />

        {/* <div className="xl:hidden">{isHambergunClicked ? <Nav /> : null}</div> */}

        <div
          className={`${isHambergunClicked ? "xl:hidden" : "hidden md:block"} `}
        >
          <Nav />
        </div>
      </nav>
    </>
  );
}

const NavItem = ({ name, link }) => {
  return (
    <li className=" py-5 text-white text-xl">
      <a href={link}>{name}</a>
    </li>
  );
};

const HambergunButton = ({ isHambergunClicked, setIsHambergunClicked }) => {
  const handleHambergunClick = () => {
    setIsHambergunClicked(!isHambergunClicked);
  };

  return (
    <button
      className="md:hidden flex flex-col gap-2 ml-auto mr-2"
      onClick={handleHambergunClick}
    >
      <span className="h-1 w-10 block bg-white"></span>
      <span className="h-1 w-10 block bg-white"></span>
      <span className="h-1 w-10 block bg-white"></span>
    </button>
  );
};

function SearchButton() {
  return (
    <>
      <button className="flex bg-blue-600 p-2 gap-2 md:ml-8 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input type="text" placeholder="Search" className="bg-transparent" />
      </button>
    </>
  );
}

function Nav() {
  return (
    <>
      <ul className="grid sm:grid-cols-2 sm:justify-items-center xl:flex justify-between ">
        {NavContent.map((item) => {
          return <NavItem name={item.name} link={item.link} key={item.name} />;
        })}
        <SearchButton />
      </ul>
    </>
  );
}

export default MainNav;
