import React from "react";

export default function Login() {
    return (
        <>
            <div className="h-screen w-screen flex justify-center item-center">
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h1 className="font-bold text-gray-700 uppercase text-3xl">INVENTORY TOOLS & ASSETS</h1>
                    <div className="w-1/2 h-auto p-8 m-4 flex border shadow-lg rounded-lg">
                        <form action="">
                            <h1 className="font-bold text-gray-700 text-xl ">Login</h1>
                            <div className="flex flex-col my-7">
                                <label htmlFor="" className="font-medium text-gray-700 text-sm mb-2">Email</label>
                                <input type="email" placeholder="nama@gmail.com" className="bg-gray-100 w-80 rounded-lg p-2" />
                            </div>

                            <div className="flex flex-col my-8">
                                <label htmlFor="" className="font-medium text-gray-700 text-sm mb-2">Password</label>
                                <input type="password" placeholder="*****" className="bg-gray-100 w-80 rounded-lg p-2" />
                            </div>

                            <div className="flex">                               
                                <input type="checkbox" />
                                <label htmlFor="Remember Me" className="text-gray-700 text-sm ml-2">Remember Me</label>
                            </div>

                            <button type="submit" className="font-medium text-white text-sm bg-blue-900 w-20 bg-red-800 rounded-md p-2 my-6">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
