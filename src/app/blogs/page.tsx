"use client";

import React from "react";
import Link from "next/link";
import blogs from "@/data/blogs.json";
import Image from "next/image";

function BlogPage() {
  return (
    <main className="flex font-saira flex-col justify-start bg-white">
      {/* hero section  */}
      <div className="product-hero sub-products-home-bg px-5 py-20 lg:p-24 flex justify-center items-center h-[200px]">
        <h2 className="text-white text-center text-3xl lg:text-4xl font-bold">Blogs</h2>
      </div>

      {/* blogs listing section  */}
      <div className="blogs">
        <div className="px-5 py-20 lg:p-24 bg-white flex flex-col lg:flex-row justify-between gap-x-8 gap-y-6 lg:gap-y-0">
          {blogs.blogs?.map((item: any, index: any) => (
            <div
              className="lg:w-[30%] rounded-lg border border-[#333333] relative"
              key={item.title}
            >
              <div className=" relative rounded-t-lg">
                <Image
                  src={item.imgUrl}
                  alt="news-image"
                  height={313}
                  width={631}
                  className="rounded-t-lg"
                />
                <div className="absolute bottom-2 bg-white text-[#333333] p-1 left-2">
                  {item.date}
                </div>
              </div>
              <h3 className="text-themeBlue w-[90%] mx-auto text-2xl py-4 font-semibold">
                {item.title}
              </h3>
              <p className="font-poppins w-[90%] text-[#333333] pb-4 mx-auto">
                {item.description}
              </p>

              <div className="w-[90%] mx-auto pb-6">
                <Link href={item.link} className="">
                  <button className="uppercase border-2 border-themeBlue px-4 py-3 text-themeBlue font-semibold rounded-md">
                    read more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default BlogPage;
