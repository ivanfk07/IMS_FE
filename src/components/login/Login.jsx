import axios from "axios";
import React, { useEffect, useState } from "react";
import API_PATHS from "../../.conf/.api_paths";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const NAVIGATE = useNavigate()

    const login = async () => {
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
            Cookies.set("company_name", result.data.user.company_name, { expires: 7 });

            console.log(result.data.user);
            NAVIGATE(`/${result.data.user.company_name}`)
        }
    };

    return (
        <>
            <div className="h-screen w-screen flex justify-center item-center">
                <div className="w-4/5 md:w-full lg:w-1/2 flex flex-col justify-center items-center">
                    <h1 className="font-bold text-blue-900 uppercase text-xl md:text-3xl lg:text-3xl">
                        INVENTORY TOOLS & ASSETS
                    </h1>
                    <div className="w-80 md:w-1/2 lg:w-1/2 h-auto p-8 m-4 flex border shadow-lg rounded-lg">
                        <form
                            action=""
                            onSubmit={(e) => {
                                e.preventDefault();
                                login();
                            }}
                        >
                            <h1 className="font-bold text-blue-900 text-xl md:2xl lg:2xl ">Login</h1>

                            <div className="flex flex-col my-8 w-full">
                                <label
                                    htmlFor=""
                                    className="font-semibold text-blue-900 text-md mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="nama@gmail.com"
                                    className="bg-gray-100 w-64 md:w-80 lg:w-80 rounded-lg p-2 lg:p-3"
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            email: e.target.value,
                                        });
                                    }}
                                />
                            </div>

                            <div className="flex flex-col my-8">
                                <label htmlFor="" className="font-medium text-gray-700 text-sm mb-2">Password</label>
                                <input type="password" placeholder="*****" className="bg-gray-100 w-80 rounded-lg p-2" 
                                onChange={(e) => {
                                    setUser({
                                        ...user,
                                        password: e.target.value,
                                    });
                                }}
                                />
                            </div>

                            <div className="flex">
                                <input type="checkbox" />
                                <label htmlFor="Remember Me" className="text-gray-700 text-sm ml-2">Remember Me</label>
                            </div>

                            <button type="submit" className="font-medium text-white text-sm bg-blue-900 w-20 rounded-md p-2 my-6">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
