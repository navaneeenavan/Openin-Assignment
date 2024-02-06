import React from "react";
import { AiFillApple, AiFillTwitterCircle } from "react-icons/ai";
import { DiEnvato } from "react-icons/di";
import { MdSpaceDashboard, MdInsertChart } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa6";
import { IoMdListBox, IoIosNotifications, IoMdSettings } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";

import { GrUserManager } from "react-icons/gr";

function Home() {
  return (
    <div className="flex flex-row">
      <div className="w-1/5 block z-50 bg-white  h-screen overflow-hidden">
        <div className="flex flex-col justify-start h-screen">
          <div className="flex  flex-row justify-center mt-5 w-full items-center space-x-3">
            <DiEnvato size={60} className="text-blue-500" />
            <h6 className="font-poppins font-light text-3xl">BASE </h6>
          </div>

          <div className="space-y-12 mt-10 w-full flex flex-col ml-7">
            <Logotext
              logo={<MdSpaceDashboard size={27} />}
              text={"Dashboard"}
            />
            <Logotext logo={<MdInsertChart size={27} />} text={"Upload"} />
            <Logotext logo={<FaFileInvoice size={27} />} text={"Invoice"} />
            <Logotext logo={<IoMdListBox size={27} />} text={"Schedule"} />
            <Logotext logo={<FaRegCalendarAlt size={27} />} text={"Calender"} />
            <Logotext
              logo={<IoIosNotifications size={27} />}
              text={"Notifications"}
            />
            <Logotext logo={<IoMdSettings size={27} />} text={"Settings"} />
          </div>
        </div>
      </div>
      <div className="w-screen  bg-[#F8FAFF] flex flex-col overflow-y-scroll">
        <div className="w-full h-32 flex justify-between px-10 py-10">
          <h6 className="font-poppins text-2xl"> Upload CSV </h6>
          <div className="flex space-x-5 ">
            <CiBellOn size={40} />
            <div className="h-15 w-12 rounded-full border border-1 items-center flex justify-center pb-2">
              <GrUserManager size={35} />{" "}
            </div>
          </div>
        </div>
        <div className="h-auto mx-auto items-center justify-center bg-white  rounded-lg flex flex-col pt-5 ">
          <div class="max-w-xl items-center flex justify-center px-32 mx-auto">
            <label class="flex justify-center  px-56 h-56 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span class="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span class="font-medium text-gray-600">
                  Drop files to Attach, or
                  <span class="text-blue-600 underline">browse</span>
                </span>
              </span>
              <input type="file" name="file_upload" class="hidden" />
            </label>
          </div>

          <button className=" bg-blue-400 rounded-lg space-x-3  mt-5 h-14 w-full">
            Upload
          </button>
        </div>
        <h6 className="font-poppins font-light text-xl ml-10 items-end ">
          Uploads{" "}
        </h6>

        <table className="min-w-full divide-y divide-gray-200  p-48">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                SI No.
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Links
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Prefix
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Add Tags
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Selected Tags
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 px-20">
            <tr className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {" "}
                1
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                https://google.com
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ...
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {" "}
                1
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                https://google.com
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ...
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {" "}
                1
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                https://google.com
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ...
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {" "}
                1
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                https://google.com
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ...
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Logotext({ logo, text }) {
  return (
    <div className="w-full  flex flex-row justify-start space-x-5 text-gray-500 text-center items-center hover:bg-gradient-to-r to-blue-500">
      <div>{logo} </div>
      <div className="flex justify-center items-center">{text}</div>
    </div>
  );
}
export default Home;
