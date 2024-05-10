import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { data } from "../../src/data.js";

const MiddleSidebar = ({ setType }) => {
  const [date, setDate] = useState(new Date());
  const [search, setSearch] = useState("");
  console.log(search);

  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <div className="bg-[#252836]">
      <div className="relative pl-[50px] pr-[150px] pt-6">
        <div className="mb-6 flex items-center gap-[240px]">
          <div>
            <h1 className=" text-3xl font-semibold text-white">Jaegar Resto</h1>
            <p className="font-normal text-[#E0E6E9]">{date.toDateString()}</p>
          </div>
          <div className="py-2">
            <form className="flex  items-center gap-2 rounded-lg border border-[#393C49] bg-[#2D303E] p-[14px] leading-[140%] hover:border-[#EA7C69] hover:bg-[#393C49] hover:text-white">
              <CgSearch className="h-5 w-5 text-[#ABBBC2]" />
              <input
                type="search"
                id="default-search"
                onChange={(e) => setSearch(e.target.value)}
                className="w-[164px] rounded-lg bg-transparent text-sm font-normal text-[#ABBBC2] placeholder-[#6B7280] outline-none transition-all duration-300 ease-in-out hover:text-white"
                placeholder="Search for food, coffee, etc.."
                required
              />
            </form>
          </div>
        </div>
        <header className="mb-6">
          <ul className="mb-2 flex gap-8">
            <li
              onClick={() => toggleTab(1)}
              className={`${
                toggle === 1
                  ? "activeIndicator relative pb-[13px] text-sm font-semibold leading-[140%] text-[#EA7C69] hover:text-[#EA7C69]"
                  : "indicator relative pb-[13px] text-sm font-semibold leading-[140%] text-white hover:text-[#EA7C69]"
              }`}
            >
              Hot Dishes
            </li>
            <li
              onClick={() => toggleTab(2)}
              className={`${
                toggle === 2
                  ? "activeIndicator relative pb-[13px] text-sm font-semibold leading-[140%] text-[#EA7C69] hover:text-[#EA7C69]"
                  : "indicator relative pb-[13px] text-sm font-semibold leading-[140%] text-white hover:text-[#EA7C69]"
              }`}
            >
              Cold Dishes
            </li>
            <li
              onClick={() => toggleTab(3)}
              className={`${
                toggle === 3
                  ? "activeIndicator relative pb-[13px] text-sm font-semibold leading-[140%] text-[#EA7C69] hover:text-[#EA7C69]"
                  : "indicator relative pb-[13px] text-sm font-semibold leading-[140%] text-white hover:text-[#EA7C69]"
              }`}
            >
              Soup
            </li>
            <li
              onClick={() => toggleTab(4)}
              className={`${
                toggle === 4
                  ? "activeIndicator relative pb-[13px] text-sm font-semibold leading-[140%] text-[#EA7C69] hover:text-[#EA7C69]"
                  : "indicator relative pb-[13px] text-sm font-semibold leading-[140%] text-white hover:text-[#EA7C69]"
              }`}
            >
              Grill
            </li>
            <li
              onClick={() => toggleTab(5)}
              className={`${
                toggle === 5
                  ? "activeIndicator relative pb-[13px] text-sm font-semibold leading-[140%] text-[#EA7C69] hover:text-[#EA7C69]"
                  : "indicator relative pb-[13px] text-sm font-semibold leading-[140%] text-white hover:text-[#EA7C69]"
              }`}
            >
              Appetizer
            </li>
            <li
              onClick={() => toggleTab(6)}
              className={`${
                toggle === 6
                  ? "activeIndicator relative pb-[13px] text-sm font-semibold leading-[140%] text-[#EA7C69] hover:text-[#EA7C69]"
                  : "indicator relative pb-[13px] text-sm font-semibold leading-[140%] text-white hover:text-[#EA7C69]"
              }`}
            >
              Dessert
            </li>
          </ul>
          <hr className="h-[1px] border-none bg-[#393C49]" />
        </header>
        <main>
          <div className="mb-[58px] flex relative items-center justify-between">
            <h2 className="text-xl font-semibold leading-[140%] text-white">
              Choose Dishes
            </h2>
            <select
              name="type"
              onChange={(e) => {
                setType(e.target.value);
              }}
              className="h-12 w-[100px] rounded-lg border border-[#393C49] bg-[#1F1D2B] p-[14px] text-sm font-medium text-white outline-none"
            >
              <option value="dineIn">Dine In</option>
              <option value="togo">To Go</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>
          <div className="apiData h-[518px] overflow-y-scroll pt-9">
            <div className=" grid grid-cols-3 gap-7 gap-y-14">
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search);
                })
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex h-[226px] w-[192px] relative flex-col items-center justify-center rounded-2xl bg-[#1F1D2B] pt-20"
                  >
                    <img
                      className="absolute top-0 mt-[-36px] h-[132px] w-[132px] rounded-full"
                      src={item.image}
                      alt="Food Img"
                    />
                    <p className="mb-2 text-sm font-medium leading-[130%] text-white">
                      {item.name}
                    </p>
                    <p className="mb-1 text-sm font-normal leading-[140%] text-white">
                      $ {item.price}
                    </p>
                    <p className="text-sm font-normal leading-[140%] text-[#ABBBC2]">
                      {item.count} Bowls available
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MiddleSidebar;
