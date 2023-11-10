import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-xl font-inter font-bold uppercase ${
              isActive ? "text-[#EEFF25]" : "text-white"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            `text-xl font-inter font-bold uppercase ${
              isActive ? "text-[#EEFF25]" : "text-white"
            }`
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            `text-xl font-inter font-bold uppercase ${
              isActive ? "text-[#EEFF25]" : "text-white"
            }`
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            `text-xl font-inter font-bold uppercase ${
              isActive ? "text-[#EEFF25]" : "text-white"
            }`
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            `text-xl font-inter font-bold uppercase ${
              isActive ? "text-[#EEFF25]" : "text-white"
            }`
          }
        >
          <div className="relative inline-block bg-green-700 rounded-full p-1">
            <GiShoppingCart className="text-3xl block" />
            <div className="absolute -bottom-2 -right-0.5 flex justify-center items-center">
              <div className="rounded-full font-normal flex justify-center items-center text-xs bg-red-400 w-5 h-5">
                1
              </div>
            </div>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `text-xl font-inter font-bold uppercase ${
              isActive ? "text-[#EEFF25]" : "text-white"
            }`
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );
};

export default Navbar;

/**
 * <NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink>;
 */
