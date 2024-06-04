import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { MdAddBox } from "react-icons/md";
import { Dialog, Select, Input } from "@material-tailwind/react";
import Cookies from "js-cookie";

import API_PATHS from "../../.conf/.api_paths";
import axios from "axios";

export default function AssetList() {
  const user = useOutletContext();
  const [open, setOpen] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [remove, setRemove] = useState({
    id: "",
    company_id: "",
  });
  const [data, setData] = useState([]);

  const user_id = Cookies.get("user_id");
  const company_id = Cookies.get("company_id");

  const [add, setAdd] = useState({
    inventoryNo: "",
    name: "",
    brand: "",
    year: "",
    model: "",
    madeIn: "",
    qty: "",
    condition: "",
  });

  const addAssets = async () => {
    console.log(user_id);
    console.log(company_id);
    console.log(add);
    const data = new URLSearchParams();
    const currentDate = new Date().toISOString();

    data.append("INVENTORY_NO", add.inventoryNo);
    data.append("NAME", add.name);
    data.append("BRAND", add.brand);
    data.append("YEAR", add.year);
    data.append("MODEL", add.model);
    data.append("MADE_IN", add.madeIn);
    data.append("COMPANY_ID", company_id);
    data.append("QTY", add.qty);
    data.append("INPUT_BY", user_id);
    data.append("INPUT_DATE", currentDate);
    data.append("ASSETS_CONDITION", add.condition);

    const result = await axios.post(`${API_PATHS.POST.ADD_ASSETS}`, data);

    console.log(result.data);
    getData();
  };

  const getData = async () => {
    const result = await axios.get(
      `${API_PATHS.GET.ASSETS_LIST}/${user_id}/${company_id}`
    );
    setData(result.data);
  };

  const sendDataDelete = async () => {
    const data = new URLSearchParams();
    const currentDate = new Date().toISOString();

    data.append("ID", remove.id);

    const result = await axios.post(
      `${API_PATHS.POST.DELETE_ASSETS}`,
      data
    );

    getData();   
    setOpenRemove(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Dialog
        open={open}
        handler={setOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="md"
        className="rounded-md"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addAssets();
          }}
          className="flex flex-col w-full justify-center items-center gap-2 bg-white shadow-xl rounded-lg p-3 pt-1 z-20"
        >
          <div className="w-full flex items-start justify-between mb-3">
            <div className="w-full">
              <h1 className="font-semibold text-[#2E3192]">Tambah Asset</h1>
            </div>
            <div className="flex w-full justify-end">
              <div
                onClick={() => {
                  setOpen(false);
                }}
                className="group p-1 -mr-2 rounded hover:bg-red-500 transition-all duration-100 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  className="w-[20px] md:w-[25px] fill-[#2E3192] group-hover:fill-white transition-all duration-100"
                >
                  <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col">
            <div className="flex w-full gap-5">
              <div className="w-full mb-5">
                <Input
                  required
                  color="indigo"
                  label="Inventory No"
                  onChange={(e) => {
                    setAdd({
                      ...add,
                      inventoryNo: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="w-full mb-5">
                <Input
                  required
                  color="indigo"
                  label="Name"
                  onChange={(e) => {
                    setAdd({
                      ...add,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <div className="w-full flex gap-5">
              <div className="w-full mb-5">
                <Input
                  required
                  color="indigo"
                  label="Brand"
                  onChange={(e) => {
                    setAdd({
                      ...add,
                      brand: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="w-full mb-5">
                <Input
                  required
                  color="indigo"
                  label="Year"
                  onChange={(e) => {
                    setAdd({
                      ...add,
                      year: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <div className="w-full flex flex-col">
              <div className="mb-5">
                <Input
                  required
                  color="indigo"
                  label="Model"
                  onChange={(e) => {
                    setAdd({
                      ...add,
                      model: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="mb-5">
                <Input
                  required
                  color="indigo"
                  label="Made In"
                  onChange={(e) => {
                    setAdd({
                      ...add,
                      madeIn: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="mb-5">
                <Input
                  required
                  color="indigo"
                  label="Quantity"
                  onChange={(e) => {
                    setAdd({
                      ...add,
                      qty: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="mb-5">
                <Input
                  required
                  color="indigo"
                  label="Condition"
                  onChange={(e) => {
                    setAdd({
                      ...add,
                      condition: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* INPUT BUTTON OF ADDED RECEIVE ITEMS */}
            <div className="">
              <button
                type="submit"
                className="w-full rounded-md p-1 bg-[#2E3192]/90 hover:bg-[#2E3192]/70 text-white font-medium"
              >
                Input
              </button>
            </div>

            <div className="w-full flex flex-col mb-3"></div>
          </div>
        </form>
      </Dialog>

      <Dialog
        open={openRemove}
        handler={setOpenRemove}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="md"
        className="rounded-md"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendDataDelete();
          }}
          className="flex flex-col w-full justify-center items-center gap-2 bg-white shadow-xl rounded-lg p-3 pt-1 z-20"
        >
          <div className="w-full flex items-start justify-between mb-3">
            <div className="w-full">
              <h1 className="font-semibold text-red-500">Delete</h1>
            </div>
            <div className="flex w-full justify-end">
              <div
                onClick={() => {
                  setOpenRemove(false);
                }}
                className="group p-1 -mr-2 rounded hover:bg-red-500 transition-all duration-100 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  className="w-[20px] md:w-[25px] fill-[#2E3192] group-hover:fill-white transition-all duration-100"
                >
                  <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col">
            <div className="mb-5">
              Menghapus barang akan mengakibatkan barang tersebut tidak tersedia
              di dalam data gudang. Apakah Anda yakin ingin menghapus barang
              tersebut?
            </div>

            {/* INPUT BUTTON OF ADDED RECEIVE ITEMS */}
            <div className="flex gap-3">
              <button
                type="submit"
                className="w-full rounded-md p-1 bg-red-500 hover:bg-red-500/70 text-white font-medium"
              >
                Ya
              </button>
              <button
                type="reset"
                onClick={() => setOpenRemove(false)}
                className="w-full rounded-md p-1 bg-[#AC2734] hover:bg-red-500/70 text-white font-medium"
              >
                Tidak
              </button>
            </div>

            <div className="w-full flex flex-col mb-3"></div>
          </div>
        </form>
      </Dialog>

      <div className="flex flex-col m-2">
        <div className="w-full flex flex-col gap-10">
          <div className="flex justify-between">
            <h1 className="font-extrabold text-sm lg:text-xl text-blue-900">
              ASSET LIST
            </h1>
            <button
              onClick={() => setOpen(true)}
              className="rounded p-2 bg-blue-900 lg:text-xl text-white"
            >
              <MdAddBox />
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
                  <th className="px-6 py-3">Condition</th>
                  <th className="px-6 py-3">Input By</th>
                  <th className="px-6 py-3">Input Date</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {data.length > 0
                  ? data.map((items, index) => {
                      return (
                        <tr
                          key={index}
                          className="border-b border-b-gray-200 text-sm hover:bg-gray-400/10"
                        >
                          <td>{index + 1}</td>
                          <td>{items.INVENTORY_NO}</td>
                          <td>{items.NAME}</td>
                          <td>{items.BRAND}</td>
                          <td>{items.YEAR}</td>
                          <td>{items.MODEL}</td>
                          <td>{items.MADE_IN}</td>
                          <td>{items.QTY}</td>
                          <td>{items.ASSETS_CONDITION}</td>
                          <td>{items.INPUT_BY}</td>
                          <td>{items.INPUT_DATE}</td>
                          <td className="">
                            <button className="p-2 bg-[#6226EF]/30 rounded">
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.79297 2.70728H3.1263C2.77268 2.70728 2.43354 2.84775 2.18349 3.0978C1.93344 3.34785 1.79297 3.68699 1.79297 4.04061V13.3739C1.79297 13.7276 1.93344 14.0667 2.18349 14.3168C2.43354 14.5668 2.77268 14.7073 3.1263 14.7073H12.4596C12.8133 14.7073 13.1524 14.5668 13.4024 14.3168C13.6525 14.0667 13.793 13.7276 13.793 13.3739V8.70728"
                                  stroke="#6226EF"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M12.793 1.70718C13.0582 1.44197 13.4179 1.29297 13.793 1.29297C14.168 1.29297 14.5278 1.44197 14.793 1.70718C15.0582 1.9724 15.2072 2.33211 15.2072 2.70718C15.2072 3.08226 15.0582 3.44197 14.793 3.70718L8.45964 10.0405L5.79297 10.7072L6.45964 8.04052L12.793 1.70718Z"
                                  stroke="#6226EF"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>

                            <button
                              onClick={() => {
                                setRemove({ id: items.ID });
                                setOpenRemove(true);
                              }}
                              className="p-2 bg-[#EF3826]/30 rounded"
                            >
                              <svg
                                width="20"
                                height="16"
                                viewBox="0 0 23 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.25 5.5H5.08333H19.75"
                                  stroke="#EF3826"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M17.9166 5.49992V18.3333C17.9166 18.8195 17.7234 19.2858 17.3796 19.6296C17.0358 19.9734 16.5695 20.1666 16.0833 20.1666H6.91659C6.43035 20.1666 5.96404 19.9734 5.62022 19.6296C5.27641 19.2858 5.08325 18.8195 5.08325 18.3333V5.49992M7.83325 5.49992V3.66659C7.83325 3.18036 8.02641 2.71404 8.37022 2.37022C8.71404 2.02641 9.18035 1.83325 9.66659 1.83325H13.3333C13.8195 1.83325 14.2858 2.02641 14.6296 2.37022C14.9734 2.71404 15.1666 3.18036 15.1666 3.66659V5.49992"
                                  stroke="#EF3826"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.66675 10.0833V15.5833"
                                  stroke="#EF3826"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.3333 10.0833V15.5833"
                                  stroke="#EF3826"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
