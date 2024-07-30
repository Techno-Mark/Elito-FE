"use client";

import React from "react";
import Image from "next/image";
import resources from "@/data/resources.json";
import certificates from "@/data/resources.json";
import ModalImage from "react-modal-image";
function ResourcesPage() {
  return (
    <main className="flex font-saira flex-col justify-start bg-white">
      {/* hero section  */}
      <div className="product-hero sub-products-home-bg px-5 py-20 lg:p-24 flex justify-center items-center h-[200px]">
        <h2 className="text-white text-center text-3xl lg:text-4xl font-bold">
          {" "}
          Resources
        </h2>
      </div>

      {/* pdfs section  */}
      <div className="pdfs bg-white text-black px-5 py-20 lg:pt-24 lg:pb-32 lg:px-24 flex flex-col gap-y-10 lg:gap-y-16">
        <h2 className="text-themeBlue text-center text-3xl lg:text-4xl font-bold">
          {" "}
          Useful brochures
        </h2>

        <div className="flex flex-col lg:flex-row justify-between gap-y-12 lg:gap-y-0">
          {resources?.resources?.map((item: any, index: any) => (
            <div
              className="card relative border border-black rounded-lg lg:w-[23%]"
              key={index}
            >
              <div className="p-5 flex justify-center items-center bg-[#fbfbfb] rounded-lg">
                <Image
                  src={
                    "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716473106/elito-batteries/resources/mwgdn9kabet0vzuecyke.svg"
                  }
                  alt={"pdf-vector-icon"}
                  height={104}
                  width={105}
                />
              </div>
              <div className="capitalize">
                <h3 className="text-2xl pt-6 pb-10 text-themeBlue font-semibold text-center flex justify-center items-center">
                  {item.title}
                </h3>
                <a
                  href={item.path}
                  download={item.dName}
                  className="uppercase absolute -bottom-5 left-[30%] bg-themeBlue px-4 py-3 text-[#fff] font-semibold rounded-md"
                >
                  download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* cards  */}
      <div className="cards bg-white text-black">
        <div className="sub-products-points-bg lg:h-[425px] px-5 py-20 lg:p-24">
          <h2 className="text-white text-3xl lg:text-4xl font-bold text-center leading-[2.6rem] lg:leading-[3.5rem]">
            Certifications and <br /> Compliance Documents
          </h2>
        </div>

        <div className="lg:px-24 pb-20 lg:pb-40 px-5 -mt-[3rem] lg:-mt-[8rem]">
          <div className="flex justify-between flex-col lg:flex-row gap-y-6 lg:gap-y-0 mx-auto gap-x-8">
            {certificates.certificates?.map((item, index) => (
              <div
                className="flex lg:w-[25%] justify-center items-center"
                key={index}
              >
                <ModalImage
                  small={item.smallImgUrl}
                  large={item.largeImgUrl}
                  alt="NABL Certificate"
                  className="max-w-xs cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ResourcesPage;
