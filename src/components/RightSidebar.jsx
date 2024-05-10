import React, { useState } from "react";

import { AiOutlineDelete } from "react-icons/ai";
import { TiCreditCard } from "react-icons/ti";
import { RiPaypalLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
const RightSidebar = () => {
  const [confirm, setConfirm] = useState(false);
  const [close, setClose] = useState(true);
  const cartProducts = JSON.parse(localStorage.getItem("addToCart"));
  console.log(cartProducts);
  const [activeButton, setActiveButton] = useState("Dine In");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const [activeMethod, setActiveMethod] = useState("Credit Card");

  const handleMethodClick = (method) => {
    setActiveMethod(method);
  };
  let startValue = 1;
  const [add, setAdd] = useState(startValue);

  return (
    <div className="h-[850px] rounded-2xl bg-[#1F1D2B]">
      <div className="h-[850px] w-[409px] rounded-lg bg-[#1F1D2B] p-6">
        {close && (
          <div className="">
            <h3 className="mb-6 text-xl font-semibold leading-[140%] text-white">
              Orders #34562
            </h3>
            <div className="mb-6 flex gap-2">
              <button
                className={`rounded-lg border ${activeButton === "Dine In" ? "border-[#EA7C69] bg-[#EA7C69] text-white" : "border-[#393C49] text-[#EA7C69]"} px-3 py-[7px] text-sm font-semibold`}
                onClick={() => handleButtonClick("Dine In")}
              >
                Dine In
              </button>
              <button
                className={`rounded-lg border ${activeButton === "To Go" ? "border-[#EA7C69] bg-[#EA7C69] text-white" : "border-[#393C49] text-[#EA7C69]"} px-3 py-[7px] text-sm font-semibold transition-all hover:border-[#EA7C69] hover:bg-[#EA7C69] hover:text-white`}
                onClick={() => handleButtonClick("To Go")}
              >
                To Go
              </button>
              <button
                className={`rounded-lg border ${activeButton === "Delivery" ? "border-[#EA7C69] bg-[#EA7C69] text-white" : "border-[#393C49] text-[#EA7C69]"} px-3 py-[7px] text-sm font-semibold transition-all hover:border-[#EA7C69] hover:bg-[#EA7C69] hover:text-white`}
                onClick={() => handleButtonClick("Delivery")}
              >
                Delivery
              </button>
            </div>

            <div>
              <div className="mb-6 flex gap-[225px] border-b-[1px] border-b-[#393C49] pb-6">
                <p className="font-semibold leading-[140%] text-white">Item</p>
                <div className="flex gap-[43px]">
                  <p className="font-semibold leading-[140%] text-white">Qty</p>
                  <p className="font-semibold leading-[140%] text-white">
                    Price
                  </p>
                </div>
              </div>
              <div className="addTo flex h-[454px] flex-col gap-y-6 overflow-y-scroll">
                <div>
                  <h1 className="text-center text-2xl font-lg text-white">
                    Your card
                  </h1>
                </div>
              </div>
              <div className="pt-5">
                <div className="mb-4 flex justify-between">
                  <p className="text-sm font-normal leading-[140%] text-[#ABBBC2]">
                    Discount
                  </p>
                  <p className="font-medium leading-[140%] text-white">$0</p>
                </div>
                <div className="mb-[42px] flex justify-between">
                  <p className="text-sm font-normal leading-[140%] text-[#ABBBC2]">
                    Sub total
                  </p>
                  <p className="font-medium leading-[140%] text-white"></p>
                </div>
              </div>
              <button
                onClick={() => {
                  setConfirm(true);
                  setClose(false);
                }}
                className="shadow-btn mb-6 h-12 w-[361px] rounded-lg bg-[#EA7C69] p-[14px] text-sm font-semibold leading-[140%] text-white"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        )}
        {confirm && (
          <div className="pt-10">
            <div className="mb-6 w-[357px] border-b border-b-[#393C49]">
              <h1 className="mb-2 text-[28px] font-semibold leading-[140%] text-white">
                Payment
              </h1>
              <p className="mb-6 font-medium leading-[140%] text-[#ABBBC2]">
                3 payment method available
              </p>
            </div>
            <div>
              <div>
                <h2 className="mb-4 text-xl font-semibold text-white">
                  Payment Method
                </h2>
                <div className="mb-4 flex gap-2">
                  <div
                    onClick={() => handleMethodClick("Credit Card")}
                    className={`flex h-[64px] w-[101px] cursor-pointer flex-col items-center justify-center rounded-lg border border-[#393C49] hover:border-white hover:bg-[#252836] ${
                      activeMethod === "Credit Card"
                        ? "border-white bg-[#252836]"
                        : ""
                    }`}
                  >
                    <TiCreditCard className="mb-[2px] h-[20px] w-6 text-white" />
                    <p className="text-sm font-medium leading-[130%] text-white">
                      Credit Card
                    </p>
                  </div>
                  <div
                    onClick={() => handleMethodClick("Paypal")}
                    className={`flex h-[64px] w-[101px] cursor-pointer flex-col items-center justify-center rounded-lg border border-[#393C49] hover:border-white hover:bg-[#252836] ${
                      activeMethod === "Paypal"
                        ? "border-white bg-[#252836]"
                        : ""
                    }`}
                  >
                    <RiPaypalLine className="mb-[2px] h-[20px] w-6 text-white" />
                    <p className="text-sm font-medium leading-[130%] text-white">
                      Paypal
                    </p>
                  </div>
                  <div
                    onClick={() => handleMethodClick("Cash")}
                    className={`flex h-[64px] w-[101px] cursor-pointer flex-col items-center justify-center rounded-lg border border-[#393C49] hover:border-white hover:bg-[#252836] ${
                      activeMethod === "Cash" ? "border-white bg-[#252836]" : ""
                    }`}
                  >
                    <CiWallet className="mb-[2px] h-[20px] w-6 text-white" />
                    <p className="text-sm font-medium leading-[130%] text-white">
                      Cash
                    </p>
                  </div>
                </div>
                <form className="mb-4 flex flex-col">
                  <label
                    htmlFor="name"
                    className="mb-2 text-sm font-medium leading-[130%] text-white"
                  >
                    Cardholder Name
                  </label>
                  <input
                    className="h-12 w-[357px] rounded-lg border border-[#393C49] bg-[#2D303E] p-[14px] text-sm font-normal leading-[140%] text-[#E0E6E9] outline-slate-300"
                    type="text"
                    placeholder="Levi Ackerman"
                  />
                </form>
                <form className="mb-6 flex flex-col">
                  <label
                    htmlFor="name"
                    className="mb-2 text-sm font-medium leading-[130%] text-white"
                  >
                    Card Number
                  </label>
                  <input
                    className="h-12 w-[357px] rounded-lg border border-[#393C49] bg-[#2D303E] p-[14px] text-sm font-normal leading-[140%] text-[#E0E6E9] outline-slate-300"
                    type="text"
                    placeholder="2564 1421 0897 1244"
                  />
                </form>
                <div className="mb-4 flex gap-[13px] border-b border-b-[#393C49] pb-4">
                  <form className="flex flex-col">
                    <label
                      className="mb-2 text-sm font-medium leading-[130%] text-white"
                      htmlFor="date"
                    >
                      Expiration Date
                    </label>
                    <input
                      className="h-12 w-[172px] rounded-lg border border-[#393C49] bg-[#2D303E] p-[14px] text-sm font-normal leading-[140%] text-[#E0E6E9] outline-slate-300"
                      placeholder="02/2022"
                      type="date"
                    />
                  </form>
                  <form className="flex flex-col">
                    <label
                      className="mb-2 text-sm font-medium leading-[130%] text-white"
                      htmlFor="password"
                    >
                      CVV
                    </label>
                    <input
                      className="h-12 w-[172px] rounded-lg border border-[#393C49] bg-[#2D303E] p-[14px] text-sm font-normal leading-[140%] text-[#E0E6E9] outline-slate-300"
                      type="password"
                      placeholder="⚪⚪⚪"
                    />
                  </form>
                </div>
                <div className="mb-[89px] flex gap-[13px]">
                  <form className="flex flex-col">
                    <label className="mb-2 text-sm font-medium leading-[130%] text-white">
                      Order Type
                    </label>
                    <select
                      name="type"
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                      className="h-12 w-[172px] rounded-lg border border-[#393C49] bg-[#1F1D2B] p-[14px] text-sm font-medium text-white outline-none"
                    >
                      <option value="dineIn">Dine In</option>
                      <option value="togo">To Go</option>
                      <option value="delivery">Delivery</option>
                    </select>
                  </form>
                  <form className="flex flex-col">
                    <label className="mb-2 text-sm font-medium leading-[130%] text-white">
                      Table no.
                    </label>
                    <input
                      className="h-12 w-[172px] rounded-lg border border-[#393C49] bg-[#2D303E] p-[14px] text-sm font-normal leading-[140%] text-[#E0E6E9] outline-slate-300"
                      type="text"
                      placeholder="140"
                    />
                  </form>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setClose(true);
                      setConfirm(false);
                    }}
                    className="cancel h-12 w-[175px] rounded-lg border border-[#EA7C69] text-sm font-semibold leading-[140%] text-[#EA7C69] hover:bg-[#EA7C69] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button className="confirm h-12 w-[175px] rounded-lg border border-[#EA7C69] bg-[#EA7C69] text-sm font-semibold leading-[140%] text-white">
                    Confirm Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
