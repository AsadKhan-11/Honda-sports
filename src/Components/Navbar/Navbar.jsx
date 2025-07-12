import { div } from "framer-motion/client";
import logo from "../../assets/Honda-logo.png";

const NavMenu = [
  { link: "Home" },
  { link: "About" },
  { link: "Contact Us" },
  { link: "Privacy Policy" },
];

const Navbar = () => {
  return (
    <main className="text-white ">
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
        </div>
      </div>
    </main>
  );
};

export default Navbar;
