"use client";

import Image from "next/image";
import React, { useState } from "react";
import points from "@/data/product_car_suv_battery.json";
import faqs from "@/data/product_truck_tractor_battery.json";
import Link from "next/link";
import { motion } from "framer-motion";

function TruckTractorBatteryPage() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  return (
    <main className="flex font-saira flex-col justify-start bg-white">
      {/* hero section  */}
      <div className="product-hero sub-products-home-bg px-5 py-20 lg:p-24 flex justify-center items-center h-[200px]">
        <h2 className="text-white text-center text-3xl lg:text-4xl font-bold">
          {" "}
          Our Products
        </h2>
      </div>

      {/* info secction  */}
      <div className="info bg-white px-5 py-10 lg:p-24 flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-10">
        <div className="lg:w-[30%]">
          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716297239/elito-batteries/products/qerfxql66xf5jyje3m7r.svg"
            }
            alt="product-image"
            height={485}
            width={622}
          />
        </div>

        <div className="lg:w-[70%] flex flex-col justify-center gap-y-4">
          <h2 className="text-themeBlue text-3xl lg:text-4xl font-bold">
            Truck/Tractor Battery{" "}
          </h2>

          <div className="text-[#333333] text-justify lg:text-left lg:w-[90%] flex flex-col gap-y-6">
            <p>
              Elito Truck/Tractor batteries are crafted for uninterrupted
              operations and zero hassle in extreme conditions. These batteries
              are designed to meet the needs of harsh weather and tough terrains
              to offer reliable performance and sustainable power.
            </p>

            <p>
              These long-lasting batteries require minimal maintenance and are
              tested to suit your commercial transport requirements. Safe and
              durable, these are built to go the long way!
            </p>
          </div>

          <div className="font-poppins text-[#333333] mt-6 flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 gap-x-14 justify-left">
            <div className="flex gap-x-4 items-center">
              <div className="w-[20%] lg:w-auto">
                <Image
                  src={
                    "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716297487/elito-batteries/products/e5yg0sdjr0xh9sx0cpp3.svg"
                  }
                  alt="icon"
                  width={49}
                  height={45}
                />
              </div>

              <div className="text-xl font-semibold">
                Tested for Heat <br /> Tolerance
              </div>
            </div>

            <div className="flex gap-x-4 items-center">
              <div className="w-[20%] lg:w-auto">
                <Image
                  src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716297486/elito-batteries/products/i68p9xbimypox93h7d1u.svg"
                  alt="icon"
                  height={47}
                  width={46}
                />
              </div>

              <div className="text-xl font-semibold">
                Tested for Vibration <br /> Resistance
              </div>
            </div>

            <div className="flex gap-x-4 items-center">
              <div className="w-[20%] lg:w-auto">
                <Image
                  src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716297483/elito-batteries/products/rcdotqj3oe448rzfloq7.svg"
                  alt="icon"
                  height={43}
                  width={43}
                />
              </div>

              <div className="text-xl font-semibold">
                Reduced <br /> Water Loss{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* table section  */}
      <div className="bg-white px-5 py-10 lg:p-24 lg:pt-0 text-black flex flex-col gap-y-6">
        <h2 className="text-themeBlue text-4xl font-bold">Specifications</h2>

        <div className="">
          <h4 className="bg-themeBlue hidden lg:block text-white py-2 text-center font-semibold font-poppins text-lg">
            ELITO BATTERY PRICE SHEET
          </h4>

          <div className="hidden lg:block">
          <table className="w-full border border-black font-poppins">
            <thead className="bg-[#f2f2f3]">
              <tr>
                <th className="border-l border-black">Container Type</th>
                <th className="border-l border-black">ELITO Part Number</th>
                <th className="border-l border-black flex flex-col gap-y-3">
                  <tr className="w-full flex">
                    <th className="w-full pt-2">Dimensions in mm</th>
                  </tr>
                  <tr className="w-full flex">
                    <th className="w-1/3">L</th>
                    <th className="w-1/3">B</th>
                    <th className="w-1/3">TH</th>
                  </tr>
                </th>
                <th className="border-l border-black">AH @ C20</th>
                <th className="border-l border-black">CCA @ - 18c in Amps</th>
                <th className="border-l border-black">RC in Minutes</th>
              </tr>
            </thead>

            <tbody>
              {/* row-0  */}
              <tr className="">
                <td
                  className="whitespace-nowrap border text-center py-2 bg-[#cbcdce] font-bold border-l border-r border-black"
                  colSpan={6}
                >
                  Commercial Sizes
                </td>
              </tr>

              {/* row-2 x1 */}
              <tr className="text-center">
                <td className="border-r border-black font-bold">N100</td>
                <td className="border-r border-black font-bold">N100R</td>
                <td>
                  <tr className="w-full flex">
                    <td className="w-1/3 border-r border-black">410</td>
                    <td className="w-1/3 border-r border-black">176</td>
                    <td className="w-1/3 border-r border-black">234</td>
                  </tr>
                </td>
                <td className="border-r border-black">100</td>
                <td className="border-r border-black">700</td>
                <td className="border-r border-black">175</td>
              </tr>

              {/* row-3 x1 */}
              <tr className="text-center border-t border-black">
                <td className="border-r border-black font-bold">N120</td>
                <td className="border-r border-black font-bold">N120</td>
                <td>
                  <tr className="w-full flex">
                    <td className="w-1/3 border-r border-black">505</td>
                    <td className="w-1/3 border-r border-black">182</td>
                    <td className="w-1/3 border-r border-black">237</td>
                  </tr>
                </td>
                <td className="border-r border-black">120</td>
                <td className="border-r border-black">750</td>
                <td className="border-r border-black">240</td>
              </tr>

              {/* row-4 x1 */}
              <tr className="text-center border-t border-black">
                <td className="border-r border-black font-bold">N150</td>
                <td className="border-r border-black font-bold">
                  ELT-EL-NTX00D04R
                </td>
                <td>
                  <tr className="w-full flex">
                    <td className="w-1/3 border-r border-black">540</td>
                    <td className="w-1/3 border-r border-black">222</td>
                    <td className="w-1/3 border-r border-black">240</td>
                  </tr>
                </td>
                <td className="border-r border-black">150</td>
                <td className="border-r border-black">1000</td>
                <td className="border-r border-black">300</td>
              </tr>

              {/* row-5 x1 */}
              <tr className="text-center border-t border-black">
                <td className="border-r border-black font-bold">N200</td>
                <td className="border-r border-black font-bold">
                  ELT-EL-N1000H52R
                </td>
                <td>
                  <tr className="w-full flex">
                    <td className="w-1/3 border-r border-black">520</td>
                    <td className="w-1/3 border-r border-black">277</td>
                    <td className="w-1/3 border-r border-black">247</td>
                  </tr>
                </td>
                <td className="border-r border-black">200</td>
                <td className="border-r border-black">1100</td>
                <td className="border-r border-black">360</td>
              </tr>
            </tbody>
          </table>
          </div>

          <Image
          src={"https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716981399/elito-batteries/products/slwral4d1ah50oahkhx9.svg"}
          alt="table-image"
          height={335}
          width={1597}
          className="block lg:hidden"
          />
        </div>
      </div>

      {/* points section  */}
      <div className="points sub-products-points-bg lg:h-[425px] px-5 py-20 lg:p-24 flex flex-col gap-y-14 lg:gap-y-16">
        <h2 className="text-white text-center text-3xl lg:text-4xl font-bold">
          Features
        </h2>

        <div className="flex text-white flex-col lg:flex-row gap-y-8 lg:gap-y-0 justify-between gap-x-8">
          {points.points?.map((item, index) => (
            <div className="lg:w-[32%] flex gap-x-4" key={item.title2}>
              <div className="w-[18%]">
                <Image src={item.iconUrl} alt="icon" height={74} width={74} />
              </div>
              <div className="w-[88%] font-poppins flex flex-col gap-y-3">
                <h4 className="text-2xl font-semibold">
                  {item.title1} <br /> {item.title2}
                </h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* battery section  */}
      <div className="battery bg-white text-black px-5 py-20 lg:p-24 flex flex-col gap-y-16">
        <h2 className="text-themeBlue text-center text-3xl lg:text-4xl font-bold">
          One Battery, Multiple Benefits{" "}
        </h2>

        <div className="lg:w-[90%] mx-auto flex flex-col lg:flex-row font-poppins gap-y-6 lg:gap-y-0">
          <div className="lg:w-[25%] flex flex-row lg:flex-col justify-between lg:justify-center lg:gap-y-20">
            <div
              className="flex gap-x-2 cursor-pointer"
              onMouseOver={() => setFirst(true)}
              onMouseLeave={() => setFirst(false)}
            >
              <div className="w-[10%] pt-2">
                <Image
                  src={
                    "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716283654/elito-batteries/products/hzvrokru83dqwpk82md0.svg"
                  }
                  alt="thunder-icon"
                  height={34}
                  width={34}
                  className={first ? "grayscale-0 scale-110" : "grayscale"}
                />
              </div>
              <div
                className={`w-[90%] lg:text-3xl ${
                  first ? "text-themeBlue font-bold" : "text-[#333333]"
                }`}
              >
                High Reserve <br /> Capacity
              </div>
            </div>

            <div
              className="flex gap-x-2 cursor-pointer"
              onMouseOver={() => setSecond(true)}
              onMouseLeave={() => setSecond(false)}
            >
              <div className="w-[10%] pt-2">
                <Image
                  src={
                    "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716283654/elito-batteries/products/hzvrokru83dqwpk82md0.svg"
                  }
                  alt="thunder-icon"
                  height={34}
                  width={34}
                  className={second ? "grayscale-0 scale-110" : "grayscale"}
                />
              </div>
              <div
                className={`w-[90%] lg:text-3xl ${
                  second ? "text-themeBlue font-bold" : "text-[#333333]"
                }`}
              >
                Suitable for <br /> All Terrains
              </div>
            </div>
          </div>

          <div className="lg:w-[50%]">
            <motion.img
              src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716299718/elito-batteries/products/voyujdmmg7ermgfsuh51.png" // Replace with your image path
              alt="battery-image"
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                // repeat: Infinity,
                // repeatType: "reverse",
              }}
              style={{
                width: "814px", // Adjust the size as needed
                height: "auto", // Maintain aspect ratio
              }}
            />
          </div>

          <div className="lg:w-[30%] lg:pl-10 flex flex-row lg:flex-col justify-between lg:justify-center lg:gap-y-20">
            <div
              className="flex gap-x-2 cursor-pointer"
              onMouseOver={() => setThird(true)}
              onMouseLeave={() => setThird(false)}
            >
              <div className="w-[10%] pt-2">
                <Image
                  src={
                    "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716283654/elito-batteries/products/hzvrokru83dqwpk82md0.svg"
                  }
                  alt="thunder-icon"
                  height={34}
                  width={34}
                  className={third ? "grayscale-0 scale-110" : "grayscale"}
                />
              </div>
              <div
                className={`w-[90%] lg:text-3xl ${
                  third ? "text-themeBlue font-bold" : "text-[#333333]"
                }`}
              >
                C2 Performance <br /> Rating
              </div>
            </div>

            <div
              className="flex gap-x-2 cursor-pointer"
              onMouseOver={() => setFourth(true)}
              onMouseLeave={() => setFourth(false)}
            >
              <div className="w-[10%] pt-2">
                <Image
                  src={
                    "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716283654/elito-batteries/products/hzvrokru83dqwpk82md0.svg"
                  }
                  alt="thunder-icon"
                  height={34}
                  width={34}
                  className={fourth ? "grayscale-0 scale-110" : "grayscale"}
                />
              </div>
              <div
                className={`w-[90%] lg:text-3xl ${
                  fourth ? "text-themeBlue font-bold" : "text-[#333333]"
                }`}
              >
                All-Weather <br /> Battery
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* banner  */}
      <div className="banner px-5 py-10 lg:px-24 lg:py-5 bg-themeBlue flex flex-col lg:flex-row items-center">
        <div className="left lg:w-[60%]">
          {/* for larger screens  */}
          <h2 className="text-3xl hidden lg:block text-white font-semibold leading-[3rem]">
            Get Your Super Performance <br />{" "}
            <span className="font-bold">ELITO BATTERY</span>
          </h2>

          {/* for small screens  */}
          <h2 className="text-3xl lg:hidden block text-center text-white font-semibold leading-[2.6rem]">
            Get Your Super Performance &nbsp;
            <span className="font-bold">ELITO BATTERY</span>
          </h2>
        </div>

        <div className="right mt-5 lg:mt-0 lg:w-[40%] flex justify-center">
          <Link href={"/become-a-distributor"}>
            <button className="uppercase bg-white px-4 py-3 text-[#171717] font-semibold rounded-md">
              contact now!
            </button>
          </Link>
        </div>
      </div>

      {/* FAQS  */}
      <div className="faqs bg-white text-black px-5 py-20 lg:p-24">
        <h2 className="text-themeBlue text-center text-3xl font-bold inline-flex items-center gap-x-4 border-b-4 pb-1 border-themeBlue">
          <span>
            <Image
              src={
                "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716289395/elito-batteries/products/wjhfkacu77q778oyn38y.svg"
              }
              alt="question-icon"
              height={26}
              width={26}
            />
          </span>{" "}
          General FAQs
        </h2>
        <div className="px-5 lg:w-[60%]">
          <div className="mx-auto mt-8 grid font-poppins">
            {faqs.faqs?.map((item, index) => (
              <div className="py-5 border-b border-[#c8c9cb]" key={index}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="group-open:text-themeBlue font-bold">
                      {" "}
                      {item.title}
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    {item.content}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default TruckTractorBatteryPage;
