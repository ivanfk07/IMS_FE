import axios from "axios";
import React, { useEffect, useState } from "react";
import API_PATHS from "../../.conf/.api_paths";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const NAVIGATE = useNavigate();

  const login = async () => {
    console.log(user);

    const formData = new URLSearchParams();
    formData.append("email", user.email);
    formData.append("password", user.password);

    const result = await axios.post(API_PATHS.POST.LOGIN, formData);

    if (result.data.user.authentication) {
      Cookies.set("auth", result.data.user.authentication, { expires: 7 });
      Cookies.set("user_id", result.data.user.id, { expires: 7 });
      Cookies.set("level", result.data.user.level, { expires: 7 });
      Cookies.set("username", result.data.user.username, { expires: 7 });
      Cookies.set("email", result.data.user.email, { expires: 7 });
      Cookies.set("password", result.data.user.password, { expires: 7 });
      Cookies.set("company_id", result.data.user.company_id, { expires: 7 });
      Cookies.set("company_name", result.data.user.company_name, {
        expires: 7,
      });

      console.log(result.data.user);
      NAVIGATE(`/${result.data.user.company_name}`);
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center item-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="font-bold text-blue-900 uppercase text-xl md:text-2xl ">
            INVENTORY ASSETS MANAGEMENT
          </h1>
          <div className="w-[90%] md:w-1/2 lg:w-1/4 h-auto p-8 m-4 flex border shadow-lg rounded-lg">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                login();
              }}
              className="w-full"
            >
              <h1 className="font-bold text-blue-900 text-xl md:2xl lg:2xl ">
                Login
              </h1>

              <div className="flex flex-col my-8 w-full">
                <Input
                  label="Email"
                  type="email"
                  color="indigo"
                  className="font-medium text-gray-700 text-sm mb-2"
                  onChange={({ target }) => {
                    setUser({ ...user, email: target.value });
                  }}
                />
              </div>

              <div className="flex flex-col my-8">
                <Input
                  label="Password"
                  type="password"
                  color="indigo"
                  className="font-medium text-gray-700 text-sm mb-2"
                  onChange={({ target }) => {
                    setUser({ ...user, password: target.value });
                  }}
                />
              </div>

              <div className="flex">
                <label className="text-gray-700 text-sm ml-2">
                  Don't have account yet?
                </label>
              </div>

              <button
                type="submit"
                className="w-full font-medium text-white text-sm bg-blue-900 rounded-md p-2 my-6"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
