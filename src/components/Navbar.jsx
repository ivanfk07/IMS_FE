import React, { useEffect, useState } from "react";
import ks_logo_single from "../assets/images/ks_logo_single.png";
import { Input } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";

import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Cookies from "js-cookie";

export default function Navbar() {
  const { company_name } = useParams();
  const [displaySideBar, setDisplaySideBar] = useState();
  const [sideBarShow, setSideBar] = useState(false);
  const [logedIn, setLogedIn] = useState(false);
  const [user, setUser] = useState({
    user_id: "",
    username: "",
    email: "",
    password: "",
    level: "",
    company_name: "",
    company_id: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLogedIn(Cookies.get("auth"));
    setUser({
      user_id: Cookies.get("user_id"),
      username: Cookies.get("username"),
      email: Cookies.get("email"),
      password: Cookies.get("password"),
      level: Cookies.get("level"),
      company_name: Cookies.get("company_name"),
      company_id: Cookies.get("company_id"),
    });

    // if (user.company_name !== company_name) {
    //     navigate('/login')
    // }

    const handleResize = () => {
      const width = window.innerWidth;
      setDisplaySideBar(width);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full h-max flex items-center justify-center shadow bg-white">
          <div className="w-[90%] flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={ks_logo_single}
                alt="Kokoh Semesta"
                className="w-[40px] md:w-[50px] mx-3 my-4"
              />
              <h1 className="hidden md:block text-[24px] font-extrabold text-blue-900">
                INVENTORY MANAGEMENT SYSTEM
              </h1>
              <h1 className="text-[14px] md:text-[24px] font-extrabold text-gray-800"></h1>
            </div>

            <div className="flex items-center justify-between w-[30%]">
              <div className="w-3/4">
                <Input icon={<FaSearch />} label="search" type="text" />
              </div>

              <div className="flex">
                <div
                  onClick={() => {
                    setSideBar(!sideBarShow);
                  }}
                  className="w-12 flex flex-col gap-1 p-2 hover:bg-neutral-400/30 hover:cursor-pointer"
                >
                  <div className="w-full h-1 bg-black/60 rounded"></div>
                  <div className="w-full h-1 bg-black/60 rounded"></div>
                  <div className="w-full h-1 bg-black/60 rounded"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CONTENT BODY */}
        <div
          className={`flex w-full ${
            displaySideBar <= 767 ? "justify-center" : "justify-evenly"
          }`}
        >
          <div className="w-[90%] md:w-[85%] min-h-screen py-5">
            <Outlet context={user}/>
          </div>

          <div
            onClick={() => {
              setSideBar(false);
            }}
            className={`${
              sideBarShow ? "fixed" : "hidden"
            } w-screen h-screen bottom-0`}
          ></div>

          <div
            className={`fixed left-0 bg-white border-r h-screen w-[240px] ${
              sideBarShow ? "translate-x-0" : "-translate-x-full"
            } md:w-[320px] bottom-0 py-4 shadow transition-all duration-500 z-30`}
          >
            <div className="flex flex-col w-full gap-2 text-[#3C4043] font-semibold">
              <div
                className={`flex w-full items-center gap-2 p-3 px-5 duration-100`}
              >
                <img src={ks_logo_single} className="w-5" />
                IMS
              </div>
              {logedIn ? (
                <>
                  <div
                    className={`flex w-full items-center gap-2 p-3 px-5 duration-100`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="fill-[#404399] w-5"
                    >
                      <g>
                        <circle cx="256" cy="128" r="128" />
                        <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z" />
                      </g>
                    </svg>
                    {user.username}
                  </div>
                  <div
                    className={`flex w-full items-center gap-2 border ${
                      location.pathname === `/${user.company_name}`
                        ? "border-[#2E3192] bg-[#2E3192]/20"
                        : "hover:border-[#2E3192] hover:bg-[#2E3192]/20"
                    } p-3 px-5 duration-100 hover:cursor-pointer`}
                    onClick={() => {
                      navigate(`/${user.company_name}`);
                    }}
                  >
                    Summary
                  </div>
                  <div
                    className={`flex w-full items-center gap-2 border ${
                      location.pathname === `/${user.company_name}/assets`
                        ? "border-[#2E3192] bg-[#2E3192]/20"
                        : "hover:border-[#2E3192] hover:bg-[#2E3192]/20"
                    } p-3 px-5 duration-100 hover:cursor-pointer`}
                    onClick={() => {
                      navigate(`/${user.company_name}/assets`);
                    }}
                  >
                    Assets List
                  </div>
                  <div
                    className={`flex w-full items-center gap-2 border ${
                      location.pathname === "/receive"
                        ? "border-[#2E3192] bg-[#2E3192]/20"
                        : "hover:border-[#2E3192] hover:bg-[#2E3192]/20"
                    } p-3 px-5 duration-100 hover:cursor-pointer`}
                    onClick={() => {
                      navigate("/receive");
                    }}
                  >
                    Receive
                  </div>
                  <div
                    className={`flex w-full items-center gap-2 border ${
                      location.pathname === "/issued"
                        ? "border-[#2E3192] bg-[#2E3192]/20"
                        : "hover:border-[#2E3192] hover:bg-[#2E3192]/20"
                    } p-3 px-5 duration-100 hover:cursor-pointer`}
                    onClick={() => {
                      navigate("/issued");
                    }}
                  >
                    Issued
                  </div>
                  <div
                    className={`flex w-full items-center gap-2 border ${
                      location.pathname === "/transaction"
                        ? "border-[#2E3192] bg-[#2E3192]/20"
                        : "hover:border-[#2E3192] hover:bg-[#2E3192]/20"
                    } p-3 px-5 duration-100 hover:cursor-pointer`}
                    onClick={() => {
                      navigate("/transaction");
                    }}
                  >
                    Transaction
                  </div>
                  <div
                    className={`flex w-full items-center gap-2 border ${
                      location.pathname === "/history"
                        ? "border-[#2E3192] bg-[#2E3192]/20"
                        : "hover:border-[#2E3192] hover:bg-[#2E3192]/20"
                    } p-3 px-5 duration-100 hover:cursor-pointer`}
                    onClick={() => {
                      navigate("/history");
                    }}
                  >
                    History
                  </div>
                  {user.level > 4 ? (
                    <div
                      className={`flex w-full items-center gap-2 border ${
                        location.pathname === "/panel"
                          ? "border-[#2E3192] bg-[#2E3192]/20"
                          : "hover:border-[#2E3192] hover:bg-[#2E3192]/20"
                      } p-3 px-5 duration-100 hover:cursor-pointer`}
                      onClick={() => {
                        navigate("/panel");
                      }}
                    >
                      Super Admin Panel
                    </div>
                  ) : null}
                  {/* <div
                    className={`flex w-full items-center gap-2 border ${
                      location.pathname === "/root"
                        ? "border-[#2E3192] bg-[#2E3192]/20"
                        : "hover:border-[#2E3192] hover:bg-[#2E3192]/20"
                    } rounded-e-full p-3 px-5 duration-100 hover:cursor-pointer`}
                    onClick={() => {                      
                      navigate("/root");
                    }}
                  >                    
                    Root
                  </div> */}
                  <div
                    onClick={() => {
                      navigate("/login");
                    }}
                    className={`flex w-full items-center gap-2 border hover:border-[#2E3192] hover:bg-[#2E3192]/20  p-3 px-5 duration-100 hover:cursor-pointer`}
                  >
                    Log Out
                  </div>
                </>
              ) : (
                <>
                  <div
                    onClick={() => {
                      navigate("/login");
                    }}
                    className={`flex w-full items-center gap-2 border hover:border-[#2E3192] hover:bg-[#2E3192]/20 rounded-e-full p-3 px-5 duration-100 hover:cursor-pointer`}
                  >
                    Login
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="w-full mt-12 flex flex-col items-center justify-center h-[200px] border-t">
          <h1 className="text-[8px] md:text-[12px] text-center font-semibold text-black">
            Copyright © 2023 Syikha Creative Production. All Right Reserved
          </h1>
        </div>
      </div>
    </>
  );
}
