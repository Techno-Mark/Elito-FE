"use client";

import Image from "next/image";
import React, { useState } from "react";
import points from "@/data/product_car_suv_battery.json";
import faqs from "@/data/product_car_suv_battery.json";
import Link from "next/link";
import { motion } from "framer-motion";

function CarSuvBatteryPage() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  return (
    <main className="flex font-saira flex-col justify-start bg-white">
      {/* hero section  */}
      <div className="product-hero sub-products-home-bg px-5 py-20 lg:p-24 flex justify-center items-center h-[200px]">
        <h2 className="text-white text-center text-4xl font-bold">
          {" "}
          Our Products
        </h2>
      </div>

      {/* info secction  */}
      <div className="info bg-white px-5 py-10 lg:p-24 flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-10">
        <div className="lg:w-[40%]">
          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716210989/elito-batteries/products/dqfqnio7ca2aktp9koku.svg"
            }
            alt="product-image"
            height={485}
            width={622}
          />
        </div>

        <div className="lg:w-[60%] flex flex-col justify-center gap-y-6 lg:gap-y-8">
          <h2 className="text-themeBlue text-3xl lg:text-4xl font-bold">
            Car/SUV Battery
          </h2>

          <div className="text-[#333333] text-justify lg:text-left lg:w-[90%] flex flex-col gap-y-6">
            <p>
              Elito Cars/SUV batteries are designed and built with
              technologically superior features to offer excellent power and
              performance in all weather conditions.
            </p>

            <p>
              With Elito Cars/SUV battery, you can enjoy a super-charged
              hassle-free drive every time. These zero-maintenance, longer
              shelf-life batteries are your reliable partner for all terrains.
            </p>
          </div>

          <div className="font-poppins text-[#333333] mt-6 flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 justify-left gap-x-20">
            <div className="flex gap-x-4 items-center">
              <div className="w-[25%] lg:w-auto">
                <Image
                  src={
                    "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716211676/elito-batteries/products/t9f5shqivueg9bajqhgb.svg"
                  }
                  alt="icon"
                  width={64}
                  height={64}
                />
              </div>

              <div className="text-xl font-semibold">
                Safe <br /> Rides
              </div>
            </div>

            <div className="flex gap-x-4 items-center">
              <div className="w-[25%] lg:w-auto">
                <Image
                  src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716211673/elito-batteries/products/wnhyas7bajs9jlbmhobw.svg"
                  alt="icon"
                  height={44}
                  width={44}
                />
              </div>

              <div className="text-xl font-semibold">
                Durable <br />
                Built
              </div>
            </div>

            <div className="flex gap-x-4 items-center">
              <div className="w-[25%] lg:w-auto">
                <Image
                  src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716211671/elito-batteries/products/qiwnllm4rye7ui75ktkk.svg"
                  alt="icon"
                  height={64}
                  width={64}
                />
              </div>

              <div className="text-xl font-semibold">
                Dependable <br /> Performance
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* table section  */}
      <div className="bg-white px-5 py-10 lg:p-24 lg:pt-0 text-black flex flex-col gap-y-6">
        <h2 className="text-themeBlue text-3xl lg:text-4xl font-bold">
          Specifications
        </h2>

        <div className="">
          <h4 className="bg-themeBlue hidden lg:block text-white py-2 text-center font-semibold font-poppins text-lg">
            ELITO BATTERY SPECIFICATION SHEET
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
                {/* row-1  */}
                <tr className="text-center border border-black">
                  <td className="font-bold border-r border-black">B20</td>
                  <td className="font-bold border-r border-black">
                    <tr className="flex pl-4 border-b border-black">
                      <td>ELT-EL-00044B20L/R</td>
                    </tr>
                    <tr className="flex pl-4">
                      <td>ELT-EL-00042B20R/L</td>
                    </tr>
                  </td>
                  <td className="text-center">
                    <tr className="flex border-b border-black">
                      <td className="w-1/3 border-r border-black">197</td>
                      <td className="w-1/3 border-r border-black">129</td>
                      <td className="w-1/3">227</td>
                    </tr>
                    <tr className="flex">
                      <td className="w-1/3 border-r border-black">197</td>
                      <td className="w-1/3 border-r border-black">129</td>
                      <td className="w-1/3">227</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>35</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>35</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>320</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>280</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>50</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>50</td>
                    </tr>
                  </td>
                </tr>

                {/* row-2  */}
                <tr className="text-center border border-black">
                  <td className="font-bold border-r border-black">B24</td>
                  <td className="font-bold border-r border-black">
                    <tr className="flex pl-4 border-b border-black">
                      <td>ELT-EL-00055B24R/L</td>
                    </tr>
                    <tr className="flex pl-4 border-b border-black">
                      <td>ELT-EL-0055B24RS/LS</td>
                    </tr>
                    <tr className="flex pl-4 border-b border-black">
                      <td>ELT-EL-00050B24R/L</td>
                    </tr>
                    <tr className="flex pl-4">
                      <td>ELT-EL-0050B24RS/LS</td>
                    </tr>
                  </td>
                  <td className="text-center">
                    <tr className="flex border-b border-black">
                      <td className="w-1/3 border-r border-black">238</td>
                      <td className="w-1/3 border-r border-black">129</td>
                      <td className="w-1/3">227</td>
                    </tr>
                    <tr className="flex border-b border-black">
                      <td className="w-1/3 border-r border-black">238</td>
                      <td className="w-1/3 border-r border-black">129</td>
                      <td className="w-1/3">227</td>
                    </tr>
                    <tr className="flex border-b border-black">
                      <td className="w-1/3 border-r border-black">238</td>
                      <td className="w-1/3 border-r border-black">129</td>
                      <td className="w-1/3">227</td>
                    </tr>
                    <tr className="flex">
                      <td className="w-1/3 border-r border-black">238</td>
                      <td className="w-1/3 border-r border-black">129</td>
                      <td className="w-1/3">227</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>45</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>45</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>45</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>45</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>360</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>360</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>320</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>320</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>63</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>63</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>60</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>60</td>
                    </tr>
                  </td>
                </tr>

                {/* row-3  */}
                <tr className="text-center border border-black">
                  <td className="font-bold border-r border-black">D23</td>
                  <td className="font-bold border-r border-black">
                    <tr className="flex pl-4 border-b border-black">
                      <td>ELT-EL-0BH85D23R/L</td>
                    </tr>
                    <tr className="flex pl-4 border-b border-black">
                      <td>ELT-EL-0BH70D23R/L</td>
                    </tr>
                    <tr className="flex pl-4">
                      <td>ELT-EL-0BH90D23R/L</td>
                    </tr>
                  </td>
                  <td className="text-center">
                    <tr className="flex border-b border-black">
                      <td className="w-1/3 border-r border-black">232</td>
                      <td className="w-1/3 border-r border-black">173</td>
                      <td className="w-1/3">225</td>
                    </tr>
                    <tr className="flex border-b border-black">
                      <td className="w-1/3 border-r border-black">232</td>
                      <td className="w-1/3 border-r border-black">173</td>
                      <td className="w-1/3">225</td>
                    </tr>
                    <tr className="flex">
                      <td className="w-1/3 border-r border-black">232</td>
                      <td className="w-1/3 border-r border-black">173</td>
                      <td className="w-1/3">225</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>60</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>60</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>65</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>520</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>400</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>520</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>95</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>90</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>109</td>
                    </tr>
                  </td>
                </tr>

                {/* row-4  */}
                <tr className="text-center border border-black">
                  <td className="font-bold border-r border-black">D26</td>
                  <td className="font-bold border-r border-black">
                    <tr className="flex pl-4 border-b border-black">
                      <td>ELT-EL-BH110D26R/L</td>
                    </tr>
                    <tr className="flex pl-4 border-b border-black">
                      <td>ELT-EL-BH100D26R/L</td>
                    </tr>
                    <tr className="flex pl-4 border-b border-black">
                      <td>ELT-EL-0BH95D26R/L</td>
                    </tr>
                    <tr className="flex pl-4 border-b border-black">
                      <td>ELT-EL-0BH80D26R/L</td>
                    </tr>
                    <tr className="flex pl-4">
                      <td>ELT-EL-0BH65D26R/L</td>
                    </tr>
                  </td>
                  <td className="text-center">
                    <tr className="flex border-b border-black">
                      <td className="w-1/3 border-r border-black">260</td>
                      <td className="w-1/3 border-r border-black">173</td>
                      <td className="w-1/3">225</td>
                    </tr>
                    <tr className="flex border-b border-black">
                      <td className="w-1/3 border-r border-black">260</td>
                      <td className="w-1/3 border-r border-black">173</td>
                      <td className="w-1/3">225</td>
                    </tr>
                    <tr className="flex border-b border-black">
                      <td className="w-1/3 border-r border-black">260</td>
                      <td className="w-1/3 border-r border-black">173</td>
                      <td className="w-1/3">225</td>
                    </tr>
                    <tr className="flex border-b border-black">
                      <td className="w-1/3 border-r border-black">260</td>
                      <td className="w-1/3 border-r border-black">173</td>
                      <td className="w-1/3">225</td>
                    </tr>
                    <tr className="flex">
                      <td className="w-1/3 border-r border-black">260</td>
                      <td className="w-1/3 border-r border-black">173</td>
                      <td className="w-1/3">225</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>80</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>70</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>65</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>60</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>50</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>690</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>630</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>580</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>520</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>400</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>135</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>115</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>105</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>95</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>75</td>
                    </tr>
                  </td>
                </tr>

                {/* row-5  */}
                <tr className="text-center border border-black">
                  <td className="font-bold border-r border-black">D31</td>
                  <td className="font-bold border-r border-black">
                    <tr className="flex pl-4 border-b border-black">
                      <td>ELT-EL-BH115D31R/L</td>
                    </tr>
                    <tr className="flex pl-4 border-b border-black">
                      <td>ELT-EL-BH105D31R/L</td>
                    </tr>
                    <tr className="flex pl-4">
                      <td>ELT-EL-0BH95D31R/L</td>
                    </tr>
                  </td>
                  <td className="text-center">
                    <tr className="flex border-b border-black">
                      <td className="w-1/3 border-r border-black">306</td>
                      <td className="w-1/3 border-r border-black">173</td>
                      <td className="w-1/3">225</td>
                    </tr>
                    <tr className="flex border-b border-black">
                      <td className="w-1/3 border-r border-black">306</td>
                      <td className="w-1/3 border-r border-black">173</td>
                      <td className="w-1/3">225</td>
                    </tr>
                    <tr className="flex">
                      <td className="w-1/3 border-r border-black">306</td>
                      <td className="w-1/3 border-r border-black">173</td>
                      <td className="w-1/3">225</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>90</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>80</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>70</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>750</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>670</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>600</td>
                    </tr>
                  </td>
                  <td className="border-l border-black">
                    {" "}
                    <tr className=" flex justify-center">
                      <td>150</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>140</td>
                    </tr>
                    <tr className="flex justify-center border-t border-black">
                      <td>115</td>
                    </tr>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716980941/elito-batteries/products/xdawnq7wb8cswlo9kxaw.svg"
            }
            alt="table-image"
            height={627}
            width={1596}
            className=" block lg:hidden"
          />
        </div>
      </div>

      {/* small table section   */}
      <div className="small-tbl bg-white text-black px-5 py-10 lg:p-24 lg:pt-0 flex flex-col gap-y-8">
        <h2 className="text-themeBlue text-3xl lg:text-4xl font-bold">
          DIN Series
        </h2>

        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 justify-center items-center gap-x-8">
          <div className="lg:w-[35%]">
            <Image
              src={
                "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716210995/elito-batteries/products/uqcqlgpgre8rkijlek1p.svg"
              }
              alt="product-image"
              height={485}
              width={622}
            />
          </div>

          <div className="lg:w-[65%]">
            <h4 className="bg-themeBlue hidden lg:block text-white py-2 text-center font-semibold font-poppins text-lg">
              ELITO BATTERY SPECIFICATION SHEET
            </h4>

            <div className="hidden lg:block">
              <table className="w-full border border-black font-poppins text-sm">
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
                    <th className="border-l border-black">
                      CCA @ - 18c in Amps
                    </th>
                    <th className="border-l border-black">RC in Minutes</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row-1  */}
                  <tr className="">
                    <td
                      className="whitespace-nowrap border text-center py-2 bg-[#cbcdce] font-bold border-l border-r border-black"
                      colSpan={6}
                    >
                      DIN Series
                    </td>
                  </tr>

                  {/* row-2 x1 */}
                  <tr className="text-center">
                    <td className="border-r border-black font-bold">DIN45</td>
                    <td className="border-r border-black font-bold">
                      ELT-EL-545106033
                    </td>
                    <td>
                      <tr className="w-full flex">
                        <td className="w-1/3 border-r border-black">207</td>
                        <td className="w-1/3 border-r border-black">175</td>
                        <td className="w-1/3 border-r border-black">175</td>
                      </tr>
                    </td>
                    <td className="border-r border-black">45</td>
                    <td className="border-r border-black">330</td>
                    <td className="border-r border-black">76</td>
                  </tr>

                  {/* row-3 x2 */}
                  <tr className="text-center border-t border-black">
                    <td className="border-r border-black font-bold">H5</td>
                    <td className="border-r border-black font-bold">
                      <tr className="flex justify-center">
                        <td>ELT-EL-00H5DIN55</td>
                      </tr>
                      <tr className="flex border-t border-black justify-center">
                        <td>
                          <td>ELT-EL-00H5DIN66</td>
                        </td>
                      </tr>
                    </td>
                    <td>
                      <tr className="w-full flex">
                        <td className="w-1/3 border-r border-black">242</td>
                        <td className="w-1/3 border-r border-black">175</td>
                        <td className="w-1/3 border-r border-black">190</td>
                      </tr>
                      <tr className="w-full flex border-t border-black">
                        <td className="w-1/3 border-r border-black">242</td>
                        <td className="w-1/3 border-r border-black">175</td>
                        <td className="w-1/3 border-r border-black">190</td>
                      </tr>
                    </td>
                    <td className="border-r border-black">
                      <tr className="flex justify-center">
                        <td>55</td>
                      </tr>
                      <tr className="flex justify-center border-t border-black">
                        <td>66</td>
                      </tr>
                    </td>
                    <td className="border-r border-black">
                      <tr className="flex justify-center">
                        <td>500</td>
                      </tr>
                      <tr className="flex justify-center border-t border-black">
                        <td>600</td>
                      </tr>
                    </td>
                    <td className="border-r border-black">
                      <tr className="flex justify-center">
                        <td>100</td>
                      </tr>
                      <tr className="flex justify-center border-t border-black">
                        <td>115</td>
                      </tr>
                    </td>
                  </tr>

                  {/* row-4 x1 */}
                  <tr className="text-center border-t border-black">
                    <td className="border-r border-black font-bold">H6</td>
                    <td className="border-r border-black font-bold">
                      ELT-EL-00H6DIN74
                    </td>
                    <td>
                      <tr className="w-full flex">
                        <td className="w-1/3 border-r border-black">278</td>
                        <td className="w-1/3 border-r border-black">175</td>
                        <td className="w-1/3 border-r border-black">190</td>
                      </tr>
                    </td>
                    <td className="border-r border-black">74</td>
                    <td className="border-r border-black">700</td>
                    <td className="border-r border-black">135</td>
                  </tr>

                  {/* row-5 x1 */}
                  <tr className="text-center border-t border-black">
                    <td className="border-r border-black font-bold">H7</td>
                    <td className="border-r border-black font-bold">
                      ELT-EL-00H7DIN80
                    </td>
                    <td>
                      <tr className="w-full flex">
                        <td className="w-1/3 border-r border-black">315</td>
                        <td className="w-1/3 border-r border-black">175</td>
                        <td className="w-1/3 border-r border-black">190</td>
                      </tr>
                    </td>
                    <td className="border-r border-black">80</td>
                    <td className="border-r border-black">750</td>
                    <td className="border-r border-black">140</td>
                  </tr>

                  {/* row-6 x1 */}
                  <tr className="text-center border-t border-black">
                    <td className="border-r border-black font-bold">T7</td>
                    <td className="border-r border-black font-bold">
                      ELT-EL-00T7DIN80
                    </td>
                    <td>
                      <tr className="w-full flex">
                        <td className="w-1/3 border-r border-black">315</td>
                        <td className="w-1/3 border-r border-black">175</td>
                        <td className="w-1/3 border-r border-black">175</td>
                      </tr>
                    </td>
                    <td className="border-r border-black">80</td>
                    <td className="border-r border-black">730</td>
                    <td className="border-r border-black">143</td>
                  </tr>

                  {/* row-7 x2 */}
                  <tr className="text-center border-t border-black">
                    <td className="border-r border-black font-bold">H8</td>
                    <td className="border-r border-black font-bold">
                      <tr className="flex justify-center">
                        <td>ELT-EL-00H8DIN90</td>
                      </tr>
                      <tr className="flex border-t border-black justify-center">
                        <td>
                          <td>ELT-EL-0H8DIN100</td>
                        </td>
                      </tr>
                    </td>
                    <td>
                      <tr className="w-full flex">
                        <td className="w-1/3 border-r border-black">353</td>
                        <td className="w-1/3 border-r border-black">175</td>
                        <td className="w-1/3 border-r border-black">190</td>
                      </tr>
                      <tr className="w-full flex border-t border-black">
                        <td className="w-1/3 border-r border-black">353</td>
                        <td className="w-1/3 border-r border-black">175</td>
                        <td className="w-1/3 border-r border-black">190</td>
                      </tr>
                    </td>
                    <td className="border-r border-black">
                      <tr className="flex justify-center">
                        <td>90</td>
                      </tr>
                      <tr className="flex justify-center border-t border-black">
                        <td>100</td>
                      </tr>
                    </td>
                    <td className="border-r border-black">
                      <tr className="flex justify-center">
                        <td>800</td>
                      </tr>
                      <tr className="flex justify-center border-t border-black">
                        <td>900</td>
                      </tr>
                    </td>
                    <td className="border-r border-black">
                      <tr className="flex justify-center">
                        <td>155</td>
                      </tr>
                      <tr className="flex justify-center border-t border-black">
                        <td>175</td>
                      </tr>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
              <Image
                src={
                  "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716980919/elito-batteries/products/cjetup5ad4tlkkedps0b.svg"
                }
                alt="table-image"
                height={461}
                width={950}
                className=" block lg:hidden"
              />
          </div>
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
      <div className="battery bg-white text-black px-5 py-20 lg:p-24 flex flex-col gap-y-8 lg:gap-y-0">
        <h2 className="text-themeBlue text-center text-3xl lg:text-4xl font-bold">
          One Battery, Multiple Benefits{" "}
        </h2>

        <div className="lg:w-[90%] mx-auto flex flex-col lg:flex-row font-poppins">
          <div className="lg:w-[20%] flex flex-row lg:flex-col justify-between lg:justify-center lg:gap-y-20">
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
                Longer <br /> Shelf Life{" "}
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
                Zero <br />
                Maintenance
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] flex justify-center">
            <motion.img
              src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716281438/elito-batteries/products/utsztnzkho5iho5ktlt0.svg" // Replace with your image path
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

          <div className="lg:w-[30%] flex flex-row lg:flex-col justify-between lg:justify-center lg:gap-y-20">
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
                Auto Charge <br />
                Retention 
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
                Suitable for All <br />
                Weather Conditions 
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
        <div className="lg:px-5 lg:w-[60%]">
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

export default CarSuvBatteryPage;
