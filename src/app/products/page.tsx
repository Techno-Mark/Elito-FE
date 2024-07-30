'use client'

import React from "react";
import Link from "next/link";
import needs from "@/data/home.json"
import Image from "next/image";

function ProductsPage() {
  return (
    <main className="flex font-saira flex-col justify-start bg-white">
      {/* hero section  */}
      <div className="product-hero sub-products-home-bg p-24 flex justify-center items-center h-[200px]">
        <h2 className="text-white text-center text-4xl font-bold">Products</h2>
      </div>

      {/* info section  */}
      <div className="info bg-white text-black px-5 py-20 lg:p-24 flex flex-col gap-y-4">
        <h2 className="text-themeBlue text-center text-3xl lg:text-4xl font-bold">
          Overview of Products Offered by Elito
        </h2>

        <p className="lg:w-[64%] text-[#333333] font-poppins mx-auto text-center">
          Elito Batteries are SMF (sealed maintenance-free) batteries that offer
          high-performance for every ride. These batteries are made with a
          Unique Venting Design that lowers water loss and offers longer shelf
          life
        </p>
      </div>

      {/* cards  */}
      <div className="cards bg-white text-black">
        <div className="bg-[#f8f8f8] h-[370px] px-5 py-20 lg:p-24">
          <h2 className="text-themeBlue text-3xl lg:text-4xl font-bold text-center">
            An Elito Battery for All Your Needs 
          </h2>
        </div>

        <div className="px-5 lg:px-24 pb-20 lg:pb-[12rem] flex flex-col lg:flex-row justify-center gap-x-8 -mt-[10rem] gap-y-14">
          {needs.needs?.map((item: any, index: any) => (
            <div
              className="lg:w-[30%] rounded-lg border border-[#333333] relative"
              key={item.title}
            >
              <div className="rounded-t-lg">
                <Image
                  src={item.src}
                  alt="card-image"
                  className="rounded-t-lg"
                  width={631}
                  height={313}
                />
              </div>
              <h3 className="text-themeBlue text-2xl text-center py-4 font-semibold">
                {item.title}
              </h3>
              <p className="font-poppins w-[90%] text-center mx-auto pb-12">
                {item.description}
              </p>

              <Link href={item.link} className="absolute -bottom-6 left-[32%]">
                <button className="uppercase bg-themeBlue px-4 py-3 text-white font-semibold rounded-md">
                  know more
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
