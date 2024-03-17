import React from "react";

export default function Login() {
    return (
        <>
            <div className="h-screen w-screen flex justify-center item-center">
                <div className="w-4/5 md:w-full lg:w-1/2 flex flex-col justify-center items-center">
                    <h1 className="font-bold text-blue-900 uppercase text-xl md:text-3xl lg:text-3xl">INVENTORY TOOLS & ASSETS</h1>
                    <div className="w-80 md:w-1/2 lg:w-1/2 h-auto p-8 m-4 flex border shadow-lg rounded-lg">
                        <form action="">
                            <h1 className="font-bold text-blue-900 text-xl md:2xl lg:2xl ">Login</h1>
                            
                            <div className="flex flex-col my-8 w-full">
                                <label htmlFor="" className="font-semibold text-blue-900 text-md mb-2">Email</label>
                                <input type="email" placeholder="nama@gmail.com" className="bg-gray-100 w-64 md:w-80 lg:w-80 rounded-lg p-2 lg:p-3" />
                            </div>

                            <div className="flex flex-col my-8 w-full">
                                <label htmlFor="" className="font-semibold text-blue-900 text-md  mb-2">Password</label>
                                <input type="password" placeholder="*****" className="bg-gray-100 w-64 md:w-80 lg:w-80 rounded-lg p-2 lg:p-3" />
                            </div>

                            <div className="flex">                               
                                <input type="checkbox" />
                                <label htmlFor="Remember Me" className="text-blue-900 font-medium text-md ml-2">Remember Me</label>
                            </div>

                            <button type="submit" className="font-medium text-white text-sm bg-blue-900 w-20 rounded-md p-2 my-6">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
