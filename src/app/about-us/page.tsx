"use client";

import React from "react";
import chooseData from "@/data/about_choose.json";
import certificates from "@/data/about_certificates.json";
import points from "@/data/about_points.json";
import gallery from "@/data/about_gallery.json";
import ModalImage from "react-modal-image";
import Image from "next/image";

function AboutUsPage() {
  return (
    <main className="flex font-saira bg-white flex-col justify-start">
      {/* about hero section  */}
      <div className="about-hero px-5 flex-col gap-y-8 lg:gap-y-0 lg:flex-row py-10 lg:p-24 bg-white text-black flex">
        <div className="lg:w-[40%]">
          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716139856/elito-batteries/home/bwgbp75pfg1ylu8arqmj.svg"
            }
            alt="hero-image"
            width={540}
            height={611}
            className="lg:w-[80%]"
          />
        </div>

        <div className="lg:w-[60%] flex flex-col justify-center gap-y-6">
          <h2 className="text-themeBlue text-3xl lg:text-4xl font-bold">
            About Elito
          </h2>

          <div className="text-[#333333] text-justify lg:text-left laptop:w-[88%] flex flex-col gap-y-4 font-poppins">
            <p>
              Elito Batteries are SMF (sealed maintenance-free) batteries that
              offer high performance for every ride. These batteries are made
              with a Unique Venting Design that lowers water loss and offers
              longer shelf life. Elito Batteries are corrosion-resistant and
              designed to give better electrical conductivity. Tested for
              vibration and high heat tolerance, these automotive and tubular
              batteries are sustainable, ultra-low maintenance, and can
              auto-retain stored charge for optimal performance.
            </p>

            <p>
              Elito Batteries, manufactured by Amara Raja Energy and Mobility
              Limited, caters to both Indian and international markets and is
              one of the leading automotive battery brands. The product range of
              Elito Batteries involves Car/SUV battery, and a Truck/Tractor
              battery. Adhering to global quality standards, these batteries are
              the go-to solution to all high-performance automotive battery
              needs.
            </p>
          </div>

          <div className="font-poppins text-[#333333] flex flex-col lg:flex-row justify-between gap-y-4">
            <div className="flex gap-x-4 items-center">
              <div className="w-[30%] lg:w-auto">
                <Image
                  src={
                    "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716140706/elito-batteries/home/srdwzxsqidwq43tcrttx.svg"
                  }
                  alt="icon"
                  width={64}
                  height={65}
                />
              </div>

              <div className="text-xl font-semibold">
                All-Weather <br /> Battery
              </div>
            </div>

            <div className="flex gap-x-4 items-center">
              <div className="w-[30%] lg:w-auto">
                <Image
                  src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1715921811/elito-batteries/home/meorl5xj1syxnxkuopm0.svg"
                  alt="icon"
                  height={54}
                  width={53}
                />
              </div>

              <div className="text-xl font-semibold">
                Long-Lasting <br /> Battery
              </div>
            </div>

            <div className="flex gap-x-4 items-center">
              <div className="w-[30%] lg:w-auto">
                <Image
                  src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1715921807/elito-batteries/home/wobi5rld46ourzagxpxw.svg"
                  alt="icon"
                  height={81}
                  width={80}
                />
              </div>

              <div className="text-xl font-semibold">
                Top-Notch <br /> Performance Markings 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about hero-2 section  */}
      <div className="about-hero px-5 py-10 lg:p-24 bg-white text-black flex flex-col-reverse lg:flex-row gap-y-8 lg:gap-y-0">
        <div className="lg:w-[60%] flex flex-col justify-center gap-y-6">
          <h2 className="text-themeBlue hidden lg:block text-4xl font-bold leading-[3.3rem]">
            About Amara Raja Energy <br /> and Mobility Limited
          </h2>

          <h2 className="text-themeBlue text-center lg:hidden block text-3xl font-bold leading-[2.6rem]">
            About Amara Raja Energy and Mobility Limited
          </h2>

          <div className="text-[#333333] text-justify lg:w-[88%] flex flex-col gap-y-4 font-poppins">
            <p>
              Amara Raja Energy and Mobility Limited, a company of Amara Raja
              Group, is one of the leading manufacturers of lead acid batteries
              for automotive and industrial applications. These
              zero-maintenance, long-lasting batteries are now manufactured and
              marketed in developed countries, which have revolutionized the
              Indian automotive battery market.
            </p>

            <p>
              Amara Raja batteries are exported to 50+ countries all over the
              world, and with its innovative engineering, has positioned itself
              as an industry leader.
            </p>
          </div>
        </div>

        <div className="lg:w-[40%]">
          <img
            src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716141736/elito-batteries/home/nhclgjyilkmjlhkeewuf.svg"
            alt=""
            className="lg:w-[90%] ml-auto"
          />
        </div>
      </div>

      {/* choose options section  */}
      <div className="choose-options bg-[#01294a] flex flex-col gap-y-24 px-5 py-20 lg:p-24 text-white">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-white text-center text-3xl lg:text-4xl font-bold leading-[3.3rem]">
            Why Choose Elito
          </h2>

          <p className="lg:w-[82%] text-center mx-auto font-poppins">
            Elito Batteries are Sealed Maintenance-Free (SMF) batteries with
            higher cranking and reserve capacity. They are designed to give
            better electrical conductivity and higher mechanical strength.
            Manufactured by Amara Raja, these batteries are OEM-approved by
            top-notch brands like Toyota, Ford, Honda and Suzuki.
          </p>
        </div>

        <div className="card-items lg:w-[85%] mx-auto flex flex-col lg:flex-row items-start justify-between gap-y-10 lg:gap-y-0 lg:gap-x-16">
          {chooseData.choose?.map((item, index) => (
            <div
              className="card font-poppins lg:w-1/3 flex flex-col items-center gap-y-3 justify-center"
              key={item.title}
            >
              <Image
                src={item.imgUrl}
                alt="choose-icons"
                className="w-[60%] hover:scale-110"
                height={256}
                width={256}
              />
              <h4 className="mt-6 text-xl font-bold">{item.title}</h4>
              <p className="text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* certificate section  */}
      <div className="certificates px-5 py-20 lg:p-24 bg-white text-black flex flex-col  gap-y-10  lg:gap-y-14">
        <h2 className="text-themeBlue text-center text-3xl lg:text-4xl font-bold leading-[2.6rem] lg:leading-[3.3rem]">
          Standards and Certifications
        </h2>

        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 justify-between lg:w-[85%] mx-auto gap-x-8">
          {certificates.certificates?.map((item, index) => (
            <div
              className="flex lg:w-[25%] justify-center items-center"
              key={index}
            >
              <ModalImage
                small={item.smallImgUrl}
                large={item.largeImgUrl}
                alt="NABL Certificate"
                className="lg:max-w-xs cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* key points section  */}
      <div className="key-points px-5 py-20 lg:p-24 bg-[#f8f8f8] text-[#333333] flex flex-col lg:flex-row gap-y-8 lg:gap-y-0">
        <div className="flex lg:w-1/2 items-center flex-col justify-center gap-y-8">
          <h2 className="text-themeBlue flex justify-start lg:w-[84%] text-4xl font-bold leading-[2.6rem] lg:leading-[3.3rem]">
            Commitment to Quality
          </h2>

          <ul
            style={{ listStyleType: "disc" }}
            className="ml-4 lg:w-[80%] flex flex-col gap-y-3 lg:gap-y-4"
          >
            {points.points?.map((item, index) => (
              <li key={index} className="font-poppins">
                {item.content}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716182691/elito-batteries/about-us/d9c8m0b678ioyc4ogbxt.svg"
            alt="badge-image"
            height={615}
            width={788}
            className="lg:w-[80%]"
          />
        </div>
      </div>

      {/* gallery  */}
      <div className="gallery px-5 py-20 lg:p-24 bg-white flex flex-col gap-y-14">
        <h2 className="text-themeBlue text-center text-3xl lg:text-4xl font-bold leading-[3.3rem]">
          Manufacturing Facilities
        </h2>

        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-y-8">
          {gallery.gallery?.map((item, index) => (
            <div
              className="flex lg:w-[30%] justify-center items-center"
              key={index}
            >
              <ModalImage
                small={item.smallImgUrl}
                large={item.largeImgUrl}
                alt="Manufacuring facilities"
                className="max-w-xs cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default AboutUsPage;
