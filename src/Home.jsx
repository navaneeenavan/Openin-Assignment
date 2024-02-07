import React, { useState } from "react";

import { DiEnvato } from "react-icons/di";
import {
  MdSpaceDashboard,
  MdInsertChart,
  MdOutlineClose,
} from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa6";
import { IoMdListBox, IoIosNotifications, IoMdSettings } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

import { GrUserManager } from "react-icons/gr";
import { table } from "./data";

function Home() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="flex flex-row w-screen lg:space-x-96">
      {isOpen && (
        <div className="flex flex-col  items-center lg:hidden w-full h-screen absolute top-1 bg-white">
          <div className="flex flex-row w-full justify-between px-7 py-10">
            <div className="flex   w-full items-center ">
              <DiEnvato size={40} className="text-blue-500" />
              <h6 className="font-poppins font-light text-2xl">BASE </h6>
            </div>
            <div className="flex  justify-end  w-full items-center">
              <MdOutlineClose
                onClick={() => setIsOpen(!isOpen)}
                size={30}
                className="text-gray-300 "
              />
            </div>
          </div>
          <div className=" flex flex-col space-y-12 justify-start w-full px-12 py-5 text-xl ">
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
      )}

      <div className=" hidden lg:w-1/5 lg:block z-50 bg-white  h-screen overflow-hidden lg:fixed">
        <div className="flex flex-col justify-start h-screen">
          <div className="flex  flex-row justify-center mt-5 w-full items-center space-x-3">
            <DiEnvato size={60} className="text-blue-500" />
            <h6 className="font-poppins font-light text-3xl">BASE </h6>
          </div>

          <div className="space-y-8 mt-10 w-full flex flex-col  ">
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
      <div className="w-screen  bg-[#F8FAFF] flex flex-col overflow-x-scroll">
        <div className="w-full h-28 flex justify-between px-10 py-10 bg-white lg:bg-transparent items-center">
          <h6 className="hidden lg:flex font-poppins text-2xl"> Upload CSV </h6>
          {/* ham menu  */}
          <div className="flex flex-row lg:hidden space-x-5 ">
            <RxHamburgerMenu onClick={() => setIsOpen(!isOpen)} size={30} />
            <div className="flex  flex-row justify-center  w-full items-center gap-3">
              <DiEnvato size={30} className="text-blue-500" />
              <h6 className="font-poppins font-light text-2xl">BASE </h6>
            </div>
          </div>

          <div className="flex space-x-2 justify-evenly">
            <CiBellOn size={40} />
            <div className="h-12 w-12 rounded-full border border-1 items-center flex justify-center pb-1">
              <GrUserManager size={28} />{" "}
            </div>
          </div>
        </div>
        <div className="lg:hidden p-10 text-xl"> Upload CSV </div>
        <div class="h-auto items-center justify-center bg-white rounded-lg flex flex-col  mx-auto max-w-screen-sm overflow-hidden lg:mt-5">
          <div class="lg:max-w-xl items-center flex justify-center py-10 px-10 md:px-12 lg:px-32 mx-auto">
            <label class="flex justify-center px-7 md:px-8 h-36 md:h-56 transition bg-white border-2 overflow-x-scroll border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span class="flex items-center">
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

          <button class="bg-blue-400 rounded-lg space-x-3 mt-5 h-14 w-full">
            Upload
          </button>
        </div>

        <h6 className="font-poppins font-light text-xl ml-10 items-end  mt-10">
          Uploads{" "}
        </h6>
        <div className="w-full lg:w-auto overflow-x-scroll lg:overflow-x-hidden">
          <table className=" m-10 w-auto lg:w-full divide-y divide-gray-200  p-48 overflow-x-scroll">
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
              {table.map((value, key) => (
                <TableField
                  no={value.no}
                  link={value.link}
                  prefix={value.prefix}
                  Tags={value.tag}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Logotext({ logo, text }) {
  return (
    <div className="w-full h-full py-3 flex flex-row justify-start space-x-5 text-gray-500 text-center items-center pl-10 hover:bg-blue-100 hover:font-bold hover:text-blue-400">
      <div>{logo} </div>
      <div className="flex justify-center items-center">{text}</div>
    </div>
  );
}
function TagBar({ number, onRemove }) {
  return (
    <div className="h-6 rounded-md w-20 text-white bg-blue-500 flex items-center justify-center">
      Tag {number} <MdOutlineClose className="text-white ml-3" size={15} onClick={onRemove} />
    </div>
  );
}


function Dropdown1({ onTagSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleTagSelect = (tag) => {
    onTagSelect(tag);
    closeDropdown();
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center text-grey-300 "
      >
        Select Tag{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className=" z-20 origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {[1, 2, 3, 4].map((tag) => (
              <a
                href="#"
                key={tag}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleTagSelect(tag)}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
function TableField({ no, link, prefix, Tags }) {
  const [selectedTags, setSelectedTags] = useState(Tags);

  const addTag = (tag) => {
    setSelectedTags([...selectedTags, tag]);
  };

  const removeTag = (tag) => {
    const updatedTags = selectedTags.filter((t) => t !== tag);
    setSelectedTags(updatedTags);
  };

  return (
    <tr className="bg-white">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {no}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {prefix}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {link}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <Dropdown1 onTagSelect={addTag} />
      </td>
      <td className="px-6 py-4 flex space-x-2 whitespace-nowrap text-sm text-gray-500">
        {selectedTags.map((value, key) => (
          <TagBar key={key} number={value} onRemove={() => removeTag(value)} />
        ))}
      </td>
    </tr>
  );
}

export default Home;
