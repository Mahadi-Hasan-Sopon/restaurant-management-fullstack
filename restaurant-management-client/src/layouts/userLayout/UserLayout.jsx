import { Outlet } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Navbar from "../../components/shared/navbar/Navbar";

const UserLayout = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <div className="w-full max-w-[1920px] mx-auto">
      <div className="drawer block">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
          checked={toggleSideBar}
          onChange={() => setToggleSideBar(!toggleSideBar)}
        />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-red-500 px-14">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost bg-slate-100 hover:text-slate-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <div className="flex flex-col">
                <span className="uppercase text-3xl font-black text-white block">
                  Bistro Boss
                </span>
                <span className="uppercase text-2xl text-white font-bold tracking-[.35rem] block">
                  Restaurant
                </span>
              </div>
            </div>
            <div className="flex-none hidden lg:block">
              <div className="flex justify-between items-center list-none gap-4">
                {/* Navbar menu content here */}
                <Navbar />
              </div>
            </div>
          </div>
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-6 w-full max-w-xs min-h-full bg-base-200 relative">
            {/* Sidebar content here */}
            <div className="absolute top-0 right-0 flex justify-end p-2">
              <AiOutlineClose
                onClick={() => setToggleSideBar(!toggleSideBar)}
                className="text-2xl hover:animate-spin hover:text-red-600 cursor-pointer"
              />
            </div>
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
