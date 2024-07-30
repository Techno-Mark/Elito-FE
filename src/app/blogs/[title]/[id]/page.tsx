"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import blogs from "@/data/blogs.json";
import Link from "next/link";

function DetailedBlogPage({ params }: any) {
  const [blogData, setBlogData] = useState({
    id: "",
    imgUrl: "",
    title: "",
    description: "",
    link: "",
    date: "",
    summary: {
      mainImgUrl: "",
      keywords: ["", "", "", ""],
      title: "",
      paragraphs: [""],
      secondaryImgUrl: "",
      titledParagraph: [
        {
          title: "",
          paragraph: "",
        },
      ],
    },
  });
  const id = params.id;

  const fetchBlogFromId = async (id: any) => {
    const blog = await blogs.blogs.filter((blog: any) => {
      return blog.id === id;
    });

    return blog[0];
  };

  useEffect(() => {
    const fetchData = async () => {
      const blog = await fetchBlogFromId(id);
      await setBlogData(blog);
    };

    fetchData();
  }, []);

  return (
    <main className="flex font-saira flex-col justify-start bg-white">
      {/* hero section  */}
      <div className="product-hero products-home-bg p-24 flex justify-center items-center h-[200px]">
        <h2 className="text-white text-center text-4xl font-bold">Blogs</h2>
      </div>

      {/* main blog image  */}
      <div className="py-10 bg-white">
        <Image
          src={blogData.summary?.mainImgUrl}
          alt="blog-main-image"
          width={1920}
          height={594}
        />
      </div>

      {/* first description section  */}
      <div className="first-desc w-[80%] bg-white text-black py-10 mx-auto flex flex-col gap-y-6">
        <div className="tags text-[#76787c] font-poppins flex gap-x-8">
          {blogData.summary?.keywords?.map((item: any, index: any) => {
            return (
              <div className="tag" key={index}>
                {item}
              </div>
            );
          })}
        </div>

        <h2 className="text-themeBlue text-4xl font-bold">
          {blogData?.summary?.title}
        </h2>

        <div className="font-poppins flex flex-col gap-y-4 pt-3">
          {blogData?.summary?.paragraphs?.map((item: any, index: any) => (
            <p key={index} className="text-justify">
              {item}
            </p>
          ))}
        </div>

        <div className="sec-img py-8">
          <Image
            src={blogData?.summary?.secondaryImgUrl}
            alt="secondary-blog-image"
            height={594}
            width={1920}
          />
        </div>

        <div className="py-6 flex flex-col gap-y-14">
          {blogData?.summary?.titledParagraph?.map((item: any, index: any) => {
            return (
              <div className="flex flex-col gap-y-6" key={index}>
                <h4 className="font-bold">{item.title}</h4>
                <p>{item.paragraph}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-between py-16">
          {blogs.blogs?.map((item: any, index: any) => (
            <div
              className="w-[30%] rounded-lg border border-[#333333] relative"
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

export default DetailedBlogPage;
