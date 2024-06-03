import React from "react";
import { useOutletContext } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

export default function AssetList() {
  const user = useOutletContext();
  return (
    <>
      <div className="flex flex-col m-2">
        <div className="w-full flex flex-col gap-10">
          <div className="flex justify-between">
            <h1 className="font-extrabold text-sm lg:text-xl text-blue-900">
              ASSET LIST
            </h1>
            <button
              className="w-[3%] rounded p-2 bg-blue-900 lg:text-xl text-white"
              type=""
            >
                +
            </button>
          </div>

          <div className="w-full overflow-auto">
            <table className=" min-w-max w-full text-center text-neutral-500">
              <thead>
                <tr className="border-b border-b-gray-200 text-xs font-semibold bg-gray-50">
                  <th className="px-6 py-3">No</th>
                  <th className="px-6 py-3">Inventory No</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Brand</th>
                  <th className="px-6 py-3">Year</th>
                  <th className="px-6 py-3">Model</th>
                  <th className="px-6 py-3">Made In</th>
                  <th className="px-6 py-3">Quantity</th>
                  <th className="px-6 py-3">Input By</th>
                  <th className="px-6 py-3">Input Date</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>

              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
