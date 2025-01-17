import React from "react";
import {
  home1,
  location,
  rect106,
  rect2896,
  rect2895,
  rect2894,
  fridge,
  layer1,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
} from "./Icons";

import { GoHeart } from "react-icons/go";
import { IoMdCall } from "react-icons/io";

function Right() {
  return (
    <div className="right lg:col-span-8 md:col-span-12  grid md:grid-rows-10 sm:my-0 my-8 px-4">
      <div className="grid grid-cols-3  md:row-span-4 gap-4  border border-borderGray3 p-4">
        {/* //left col */}
        <div className="col-span-1 ">
          <img src={home1} alt="" />

          <div className="row-span-1 flex justify-center items-center gap-4 md:my-4 my-2 ">
            <img src={location} alt="" />
            <h1 className="font-gilroy_regular md:text-sm text-xs border-b border-black">
              Bangalore,HSR Layout B40 001 10
            </h1>
          </div>
        </div>

        {/* //center col */}
        <div className="col-span-1 md:grid-rows-2 ">
          <img src={rect106} alt="" />
          <img src={rect2896} alt="" className="mt-8" />
        </div>

        {/* //right col */}

        <div className="col-span-1 md:grid-rows-2 gap-4">
          <img src={rect2895} alt="" className="row-span-1 object-cover" />
          <img src={rect2894} alt="" className="mt-8" />
        </div>
      </div>

      <div className="md:row-span-6 my-8 px-4">
        <div className="grid sm:grid-cols-4 my-8 grid-cols-2 sm:flex justify-start items-center md:gap-12 sm:gap-8 gap-4 ">
          <div className="rounded-full px-4 py-2   bg-iconsWhite font-gilroy_semi_bold md:tect-lg text-base ">
            Ammenities
          </div>
          <div className="rounded-full px-4 py-2 bg-iconsWhite  font-gilroy_semi_bold md:text-lg border-borderGray border">
            Features
          </div>
          <div className="rounded-full px-4 py-2 bg-iconsWhite  font-gilroy_semi_bold md:text-lg border-borderGray border">
            Mobility
          </div>
          <div className="rounded-full px-4 py-2  bg-iconsWhite font-gilroy_semi_bold md:text-lg border-borderGray border">
            Connectivity
          </div>
        </div>

        <div className="grid md:grid-cols-12  gap-4 my-16 border-b border-borderGray pb-12 bg-iconsWhite">
          <div className="icons lg:col-span-8 md:col-span-12 lg:border-r  border-borderGray2 md:my-4  p-2">
            <div className="flex flex-wrap  items-center gap-8">
              <div className="">
                <img src={fridge} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Refrigerator</h3>
              </div>

              <div className="">
                <img src={layer1} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Wardrobe</h3>
              </div>
              <div className="">
                <img src={icon3} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">TV</h3>
              </div>
              <div className="">
                <img src={icon4} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Desk Table</h3>
              </div>
              <div className="">
                <img src={icon5} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Curtains</h3>
              </div>
              <div className="">
                <img src={icon6} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Washing..</h3>
              </div>
              <div className="">
                <img src={icon7} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Office chair</h3>
              </div>
              <div className="">
                <img src={icon8} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Dining Table</h3>
              </div>
              <div className="">
                <img src={icon9} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Single Bed</h3>
              </div>
              <div className="">
                <img src={icon10} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Table Lamp</h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 md:col-span-12 m-auto flex flex-col justify-center items-center ">
            <h1 className="font-gilroy_semi_bold md:text-base font-bold text-center mx-auto ">
              Furnish your space by your Hand
            </h1>
            <button className="px-4 py-2 font-gilroy_medium border border-borderblack my-4">
              Customize with avatar
            </button>
          </div>
        </div>
        <div className="flex lg:justify-end  justify-center items-center gap-4 ">
          <button className="p-2 border border-iconborder">
            {<GoHeart className="text-2xl" />}
          </button>
          <button className="p-2 border border-iconborder">
            {<IoMdCall className="text-2xl" />}
          </button>
          <button className="rounded-xl px-12 py-2 bg-black text-white">
            connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default Right;
