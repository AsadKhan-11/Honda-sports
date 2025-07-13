import { div } from "framer-motion/client";
import logo from "../../assets/Honda-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

const NavMenu = [
  { link: "Home" },
  { link: "About" },
  { link: "Contact Us" },
  { link: "Privacy Policy" },
];

const Navbar = () => {
  return (
    <main className="text-white absolute top-0 left-0 z-20 w-full ">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="w-[80px] invert">
            <img src={logo} alt="Honda logo" />
          </div>
          {/* Links section */}
          <div className="hidden md:block ">
            <ul className="flex gap-4">
              {NavMenu.map((links, index) => (
                <li className="" key={index}>
                  <a
                    href="#"
                    className="inline-block uppercase py-2 px-6 rounded-md hover:bg-[#2b9de6] duration-200 hover:shadow-[0px_0px_20px_8px_#d2e6ff]"
                  >
                    {links.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="rounded-icons ">
              {" "}
              <GiHamburgerMenu className="text-xl" />
            </div>
            <div className="rounded-icons">
              {" "}
              <FaSearch className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
