"use client";

import AccordionGroup from "@/components/accordion/accordiongroup";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import InquireForm from "@/components/inquireForm/inquireForm";
import Stepper from "@/components/stepper/stepper";
import { default as needs } from "@/data/home.json";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "swiper/css";
import "swiper/css/pagination";
import { Aftermarket } from "../../../public/assets/icons/Aftermarket";
import ArrowDown from "../../../public/assets/icons/arrowDown";
import AutoChargeRetention from "../../../public/assets/icons/benefits/autoChargeRetention";
import LongerShelfLife from "../../../public/assets/icons/benefits/longerShelfLife";
import PerformanceRating from "../../../public/assets/icons/benefits/performanceRating";
import ReserveCapacity from "../../../public/assets/icons/benefits/reserveCapacity";
import Terrains from "../../../public/assets/icons/benefits/Terrains";
import WaterLoss from "../../../public/assets/icons/benefits/waterLoss";
import WeatherConditions from "../../../public/assets/icons/benefits/weatherConditions";
import ZeroMaintenance from "../../../public/assets/icons/benefits/zeroMaintenance";
import Distributorship from "../../../public/assets/icons/Distributorship";
import Entrepreneur from "../../../public/assets/icons/Entrepreneur";
import ImportExport from "../../../public/assets/icons/importExport";
import IndustryLeader from "../../../public/assets/icons/IndustryLeader";
import Performance from "../../../public/assets/icons/Performance";
import Point from "../../../public/assets/icons/point";
import QualityCheck from "../../../public/assets/icons/QualityCheck";
import RetailChain from "../../../public/assets/icons/RetailChain";
import Wholesaler from "../../../public/assets/icons/Wholesaler";

export default function Home() {
  const faqItems = [
    {
      title: "Who can become an Elito Battery distributor? ",
      content: (
        <p className="text-[12px] lg:text-lg text-[#333333] font-poppins">
          You can become an Elito automotive battery distributor if you fit into
          any of the following categories: &gt; Export-Import Firm &gt; Existing
          Distributor/Wholesaler &gt; Large Retail Chain &gt; Entrepreneur &gt;
          Automotive Aftermarket Trading Firm
        </p>
      ),
    },
    {
      title: "What is the process of becoming an Elito Battery distributor? ",
      content: (
        <p className="text-[12px] lg:text-lg text-[#333333] font-poppins">
          You can become an Elito automotive battery distributor
        </p>
      ),
    },
    {
      title:
        "What are the benefits I would receive on becoming an Elito Battery distributor? ",
      content: (
        <p className="text-[12px] lg:text-lg text-[#333333] font-poppins">
          You can become an Elito automotive battery distributor
        </p>
      ),
    },
  ];

  const steps = [
    {
      icon: "/images/Infrastructure.svg",
      title: "Infrastructure",
    },
    {
      icon: "/images/Staffing.svg",
      title: "Staffing",
    },
    {
      icon: "/images/Compliance.svg",
      title: "Compliance",
    },
  ];

  return (
    <main className="flex font-saira flex-col justify-start">
      {/* hero-section  */}
      <HeroBanner />
      <div className="relative bg-white">
        {/* Partner section  */}
        <section className="info bg-white text-black px-5 py-10 lg:py-16 flex flex-col max-w-[1113px] mx-auto">
          <h2 className="text-themeRed text-[22px] lg:text-[30px] font-bold text-center pb-[10px]">
            Why Partner with Us?
          </h2>
          <p className="font-poppins text-[#333333] text-justify md:text-center mb-8">
            If you are someone looking forward to taking a business leap, you
            are in the right place! Here are some of the reasons why you should
            become an Elito Battery distributor and scale growth.
          </p>

          <div className="font-poppins text-[#333333] flex flex-col md:flex-row justify-center whyPartnerBlock">
            <div className="flex flex-col justify-between items-center p-[23px] md:py-6 md:px-5 lg:px-11 lg:py-12 max-w-[302px] w-full text-center rounded-lg bg-[#404040] text-white hover:bg-[#D30300]">
              <QualityCheck />
              <h4 className="text-lg xl:text-xl font-normal mt-5 text-white">
                Committed to Quality and Service
              </h4>
            </div>

            <div className="flex flex-col justify-between items-center mx-[10px] xl:mx-[20px] p-[23px] md:py-6 md:px-5 lg:px-11 lg:py-12 max-w-[302px] w-full text-center rounded-lg bg-[#404040] text-white hover:bg-[#D30300]">
              <IndustryLeader />
              <h4 className="text-lg xl:text-xl font-normal mt-5 text-white">
                Trusted by Industry Leaders
              </h4>
            </div>

            <div className="flex flex-col justify-between items-center p-[23px] md:py-6 md:px-5 lg:px-11 lg:py-12 max-w-[302px] w-full text-center rounded-lg bg-[#404040] text-white hover:bg-[#D30300]">
              <Performance />
              <h4 className="text-lg xl:text-xl font-normal mt-5 text-white">
                35+ Years of Proven Performance
              </h4>
            </div>
          </div>
        </section>
        {/* Who we Are */}
        <section className={`relative pb-16`}>
          <div className="container pb-10 md:pb-0">
            <div className="flex justify-between items-center flex-wrap">
              <div className="text-center md:text-left my-8">
                <h4 className="font-poppins text-[#737273] text-sm lg:text-lg">
                  Wondering if you can be the one?
                </h4>
                <h3 className="text-themeRed text-[24px] lg:text-[45px] font-semibold leading-none">
                  Dive in to know{" "}
                  <span className="md:block">who we are looking for!</span>
                </h3>
              </div>
              <Image
                className="max-w-[267px] lg:max-w-[350px] w-full h-auto mx-auto md:mx-0"
                src="/images/whoWeAre.png"
                alt="Who We Are"
                width={389}
                height={441}
              />
            </div>
          </div>
          <div className="flex justify-center w-full absolute bottom-10">
            <ArrowDown className="w-[40px]" />
          </div>
        </section>

        {/* Criteria Battery Distributor */}
        <section className="relative bg-[#6C6C6C] criteriaBattery py-10 md:py-16">
          <div className="container relative px-4 text-white">
            <div className="w-full lg:w-1/2 text-center mx-auto pb-8">
              <h4 className="font-semibold text-[24px] md:text-[30px] leading-none pb-2">
                Criteria for Becoming
                <span className="block">
                  an Elito Automotive Battery Distributor
                </span>
              </h4>
              <p className="pb-0 md:pb-6 font-poppins font-normal text-[16px]">
                You must be one of the following to become an Elito Battery
                distributor.
              </p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between mt-0 md:mt-8">
              <div className="flex flex-col w-1/2 md:w-auto md:max-w-[225px] items-center text-center mt-8 md:mt-0 px-3 lg:px-0">
                <div className="bg-white border border-2 lg:border-4 border-[#EDEDED] rounded-full p-3 lg:p-6 max-w-[62px] max-h-[62px] lg:max-w-[100px] lg:max-h-[100px]">
                  <Wholesaler className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-3 md:pt-5 text-[14px] lg:text-[18px]">
                  Existing Distributor/Wholesaler
                </p>
              </div>
              <div className="flex flex-col w-1/2 md:w-auto md:max-w-[225px] items-center text-center mt-8 md:mt-0 px-3 lg:px-0">
                <div className="bg-white border border-2 lg:border-4 border-[#EDEDED] rounded-full p-3 lg:p-6 max-w-[62px] max-h-[62px] lg:max-w-[100px] lg:max-h-[100px]">
                  <ImportExport className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-3 md:pt-5 text-[14px] lg:text-[18px]">
                  Export-Import Firm
                </p>
              </div>
              <div className="flex flex-col w-1/2 md:w-auto md:max-w-[225px] items-center text-center mt-8 md:mt-0 px-3 lg:px-0">
                <div className="bg-white border border-2 lg:border-4 border-[#EDEDED] rounded-full p-3 lg:p-6 max-w-[62px] max-h-[62px] lg:max-w-[100px] lg:max-h-[100px]">
                  <RetailChain className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-3 md:pt-5 text-[14px] lg:text-[18px]">
                  Large Retail Chain
                </p>
              </div>
              <div className="flex flex-col w-1/2 md:w-auto md:max-w-[225px] items-center text-center mt-8 md:mt-0 px-3 lg:px-0">
                <div className="bg-white border border-2 lg:border-4 border-[#EDEDED] rounded-full p-3 lg:p-6 max-w-[62px] max-h-[62px] lg:max-w-[100px] lg:max-h-[100px]">
                  <Entrepreneur className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-3 md:pt-5 text-[14px] lg:text-[18px]">
                  Entrepreneur
                </p>
              </div>
              <div className="flex flex-col w-1/2 md:w-auto md:max-w-[225px] items-center text-center mt-8 md:mt-0 md:px-0">
                <div className="bg-white border border-2 lg:border-4 border-[#EDEDED] rounded-full p-3 lg:p-6 max-w-[62px] max-h-[62px] lg:max-w-[100px] lg:max-h-[100px]">
                  <Aftermarket className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-3 md:pt-5 text-[14px] lg:text-[18px]">
                  Automotive Aftermarket Trading Firm
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`relative py-10 md:py-16`}>
          <div className="container px-4">
            <div className="flex flex-wrap justify-center lg:justify-between items-center text-[#404040]">
              <h4 className="text-[22px] lg:text-[30px] text-center md:text-left leading-none md:max-w-[60%] lg:max-w-[665px] font-normal">
                Here&apos;s what you must do to
                <strong className="block font-semibold">
                  further comply with our process and requirements.
                </strong>
              </h4>
              <Image
                className="max-w-[267px] lg:max-w-[350px] w-full h-auto mx-auto lg:mx-0"
                src="/images/processRequirement.png"
                alt="Who We Are"
                width={389}
                height={441}
              />
            </div>
          </div>
        </section>
        {/* Become an Elito Battery Distributor */}
        <section className="py-10">
          <div className="container">
            <div className="max-w-[770px] mx-auto mb-8 md:mb-16">
              <h4 className="text-themeRed text-2xl lg:text-[30px] font-bold text-center px-3 md:px-0 pb-2">
                Wondering What You Must Do to{" "}
                <span className="md:block">
                  Become an Elito Battery Distributor?
                </span>
              </h4>
              <p className="block font-poppins text-center text-[#737273] text-[14px] md:text-lg mb-6 mx-auto">
                An ideal Elito automotive battery distributor needs to meet the
                manufacturer&apos;s requirements in terms of the following:
              </p>
            </div>
            <div className="flex max-w-[770px] mx-auto flex-row justify-between items-center items-start space-x-4">
              {steps.map((step, index) => (
                <div className="relative lg:max-w-[180px]" key={index}>
                  <Stepper
                    className="stepperClass"
                    icon={step.icon}
                    title={step.title}
                    stepBoxClass="!text-center"
                  />
                  {index < steps.length - 1 && (
                    <div
                      className={`h-px bg-[#00365E] w-2/3 md:w-1/2 lg:w-full absolute stepDivider`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`relative py-10 lg:py-16`}>
          <div className="container px-4">
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center text-[#404040] px-4 md:px-0">
              <h4 className="text-[22px] lg:text-[30px] leading-none max-w-[665px] font-normal text-center md:text-left">
                Elito Battery distributorship comes with ample benefits that
                would
                <strong className="block font-semibold">
                  take your entrepreneurial feat a notch higher.
                </strong>
              </h4>
              <Image
                className="max-w-[267px] lg:max-w-[350px] w-full h-auto mx-auto lg:mx-0"
                src="/images/notchhigher.png"
                alt="Who We Are"
                width={389}
                height={441}
              />
            </div>
          </div>
        </section>

        <section className="relative bg-[#6C6C6C] criteriaBattery py-10 md:py-16">
          <div className="container relative px-4 text-white">
            <div className="w-full lg:w-3/5 text-center mx-auto pb-8">
              <h4 className="font-semibold text-[22px] lg:text-[30px] leading-none pb-2">
                Discover the Multifold Benefits of Becoming an Elito Battery
                Distributor
              </h4>
              <p className="lg:pb-6 font-poppins font-normal text-[14px] lg:text-[18px]">
                Still wondering why you must partner up with Elito Battery? Here
                are the significant ways in which our distributorship would
                benefit you!
              </p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-around lg:mt-8">
              <div className="flex flex-col w-1/2 lg:w-auto lg:max-w-[225px] items-center text-center mt-8 md:mt-0 px-2 lg:px-0">
                <div className="bg-white border border-2 lg:border-4 border-[#EDEDED] rounded-full p-3 lg:p-6 max-w-[62px] max-h-[62px] lg:max-w-[100px] lg:max-h-[100px]">
                  <Distributorship className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-3 md:pt-5 text-[14px] lg:text-[18px]">
                  Sole Distributorship Country and State-wise
                </p>
              </div>
              <div className="flex flex-col w-1/2 lg:w-auto lg:max-w-[225px] items-center text-center mt-8 md:mt-0 px-2 lg:px-0">
                <div className="bg-white border border-2 lg:border-4 border-[#EDEDED] rounded-full p-3 lg:p-6 max-w-[62px] max-h-[62px] lg:max-w-[100px] lg:max-h-[100px]">
                  <ImportExport className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-3 md:pt-5 text-[14px] lg:text-[18px]">
                  High ROI
                </p>
              </div>
              <div className="flex flex-col w-1/2 lg:w-auto lg:max-w-[225px] items-center text-center mt-8 md:mt-0 px-2 lg:px-0">
                <div className="bg-white border border-2 lg:border-4 border-[#EDEDED] rounded-full p-3 lg:p-6 max-w-[62px] max-h-[62px] lg:max-w-[100px] lg:max-h-[100px]">
                  <RetailChain className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-3 md:pt-5 text-[14px] lg:text-[18px]">
                  Quick Sales Turnover
                </p>
              </div>
              <div className="flex flex-col w-1/2 lg:w-auto lg:max-w-[225px] items-center text-center mt-8 md:mt-0 px-2 lg:px-0">
                <div className="bg-white border border-2 lg:border-4 border-[#EDEDED] rounded-full p-3 lg:p-6 max-w-[62px] max-h-[62px] lg:max-w-[100px] lg:max-h-[100px]">
                  <Entrepreneur className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-3 md:pt-5 text-[14px] lg:text-[18px]">
                  Marketing and Branding Support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product cards  */}
        <section className="cards bg-white text-black py-10 md:py-16">
          <div className="container">
            <h3 className="text-themeRed text-[22px] lg:text-[30px] font-bold text-center pb-2">
              Explore Our Range of Products
            </h3>
            <p className="block font-poppins max-w-[880px] text-center text-[#737273] text-[14px] lg:text-lg mb-8 mx-auto">
              Elito automotive batteries come in a range of two types that cater
              to the distinct requirements of the automobile industry. Here are
              the types of batteries that we offer.
            </p>
            <div className="lg:pb-16 flex justify-around flex-col md:flex-row">
              {needs.needs?.map((item: any, index: any) => (
                <Link
                  href={item.link}
                  className="md:w-[50%] relative md:odd:mr-3 md:even:ml-3 lg:odd:mr-6 lg:even:ml-6 max-w-[627px] mb-6 md:mb-0"
                  key={item.title}
                >
                  <div className="rounded-t-lg">
                    <Image
                      src={item.src}
                      alt="card-image"
                      className="rounded-t-lg w-full"
                      width={631}
                      height={313}
                    />
                  </div>
                  <div className="rounded-lg border border-[#333333] border-t-0 rounded-t-none py-[20px] lg:py-8">
                    <h3 className="text-themeRed text-[14px] lg:text-3xl text-center py-2 lg:py-4 font-semibold">
                      {item.title}
                    </h3>
                    <p className="font-poppins w-[95%] text-center mx-auto pb-4 text-[12px] lg:text-lg">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Product Manufacturing */}
        <section className="mb-8 lg:mb-16">
          <div className="container">
            <h3 className="text-themeRed text-[22px] lg:text-[30px] font-bold text-center pb-6 lg:pb-12 max-w-[600px] mx-auto">
              Here&apos;s All You Need to Know About Our Product Manufacturing
            </h3>
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-8 lg:mb-20">
              <Image
                className="rounded-lg w-full md:max-w-[340px] md:max-h-[270px] lg:max-w-[615px] lg:max-h-[441px] object-cover object-bottom md:mr-3 lg:mr-5"
                src={"/images/productManufacturing.jpg"}
                alt="Product Manufacturing"
                width={615}
                height={441}
              />
              <div className="font-poppins max-w-[769px] text-[#333333] text-sm lg:text-lg md:ml-3 lg:ml-5 mt-8 md:mt-0 text-justify md:text-left">
                <p>
                  Elito Batteries, manufactured by Amara Raja Batteries Limited,
                  caters to both Indian and international markets and is one of
                  the leading automotive battery brands. Amara Raja Energy and
                  Mobility Limited, a company of Amara Raja Group, is one of the
                  leading manufacturers of lead acid batteries for automotive
                  and industrial applications.
                </p>
                <p>
                  These zero-maintenance, long-lasting batteries are now
                  manufactured and marketed in developed countries, which have
                  revolutionized the Indian automotive battery market.
                </p>
                <p className="my-5">
                  Amara Raja batteries are exported to
                  <strong> 50+ countries all over the world,</strong> and with
                  its innovative engineering, has positioned itself as an
                  industry leader.
                </p>
              </div>
            </div>
            <div className="max-w-[300px] lg:max-w-[600px] mx-auto">
              <h4 className="relative pb-6 md:pb-8 lg:pb-12 text-center text-[#404040] text-lg lg:text-4xl font-semibold after:bottom-0 after:bg-[#000000] after:w-[156px] lg:after:w-[290px] after:h-[1px] after:absolute after:left-0 after:right-0 after:mx-auto">
                Get an Insight into Why We are Chosen by Our Customers
              </h4>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-6 md:py-8 lg:py-10">
          <div className="container">
            <div className="max-w-[780px] mx-auto">
              <h4 className="text-themeRed text-xl lg:text-[30px] font-bold text-center pb-2">
                Benefits of Using Elito Battery
              </h4>
              <p className="block font-poppins max-w-[880px] text-center text-[#737273] text-sm md:text-lg mb-6 mx-auto">
                While our loyal customers are dedicated to choosing Elito
                battery over others, there are a myriad of new customers who
                discover its significant benefits.
              </p>
            </div>
            <ul className="flex flex-wrap">
              <li className="w-1/2 md:w-1/3 lg:w-1/4 my-4 md:my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-4 md:py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300] h-full pointer-events-none"
                >
                  <LongerShelfLife className="w-[25px] h-[25px] lg:w-[61px] lg:h-[61px] object-contain" />
                  <span className="pt-4 lg:pt-8 font-poppins text-[#333333] text-center text-[12px] lg:text-[20px]">
                    Longer Shelf Life
                  </span>
                </Link>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/4 my-4 md:my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-4 md:py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300] h-full pointer-events-none"
                >
                  <AutoChargeRetention className="w-[25px] h-[25px] lg:w-[61px] lg:h-[61px] object-contain" />
                  <span className="pt-4 lg:pt-8 font-poppins text-[#333333] text-center text-[12px] lg:text-[20px]">
                    Auto Charge Retention
                  </span>
                </Link>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/4 my-4 md:my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-4 md:py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300] h-full pointer-events-none"
                >
                  <ZeroMaintenance className="w-[25px] h-[25px] lg:w-[61px] lg:h-[61px] object-contain" />
                  <span className="pt-4 lg:pt-8 font-poppins text-[#333333] text-center text-[12px] lg:text-[20px]">
                    Zero Maintenance
                  </span>
                </Link>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/4 my-4 md:my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-4 md:py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300] h-full pointer-events-none"
                >
                  <WeatherConditions className="w-[25px] h-[25px] lg:w-[61px] lg:h-[61px] object-contain" />
                  <span className="pt-4 lg:pt-8 font-poppins text-[#333333] text-center text-[12px] lg:text-[20px]">
                    Suitable for All Weather Conditions
                  </span>
                </Link>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/4 my-4 md:my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-4 md:py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300] h-full pointer-events-none"
                >
                  <ReserveCapacity className="w-[25px] h-[25px] lg:w-[61px] lg:h-[61px] object-contain" />
                  <span className="pt-4 lg:pt-8 font-poppins text-[#333333] text-center text-[12px] lg:text-[20px]">
                    High Reserve Capacity
                  </span>
                </Link>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/4 my-4 md:my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-4 md:py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300] h-full pointer-events-none"
                >
                  <PerformanceRating className="w-[25px] h-[25px] lg:w-[61px] lg:h-[61px] object-contain" />
                  <span className="pt-4 lg:pt-8 font-poppins text-[#333333] text-center text-[12px] lg:text-[20px]">
                    C2 Performance Rating
                  </span>
                </Link>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/4 my-4 md:my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-4 md:py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300] h-full pointer-events-none"
                >
                  <Terrains className="w-[25px] h-[25px] lg:w-[61px] lg:h-[61px] object-contain" />
                  <span className="pt-4 lg:pt-8 font-poppins text-[#333333] text-center text-[12px] lg:text-[20px]">
                    Suitable for All Terrains
                  </span>
                </Link>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/4 my-4 md:my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-4 md:py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300] h-full pointer-events-none"
                >
                  <WaterLoss className="w-[25px] h-[25px] lg:w-[61px] lg:h-[61px] object-contain" />
                  <span className="pt-4 lg:pt-8 font-poppins text-[#333333] text-center text-[12px] lg:text-[20px]">
                    Reduced Water Loss
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="relative my-8 py-16">
          <Image
            src="/images/Features.jpg"
            alt="Features"
            width={1920}
            height={833}
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
          <div className="container relative">
            <div className="max-w-[640px] text-white mx-auto text-center">
              <h3 className="pb-2 text-[22px] md:text-4xl font-semibold">
                Features of Elito Battery
              </h3>
              <p className="leading-normal text-[14px] md:text-lg">
                Here are some of the key features of Elito battery that make it
                a No.1 choice for our customers across the globe.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-between max-w-[1100px] mx-auto mt-10 md:my-10">
              <ul className="w-full lg:w-1/3 max-w-[300px]">
                <li className="flex items-center text-white font-poppins text-[17px] lg:text-lg font-normal hover:font-bold md:mb-4 lg:mb-8">
                  <Point className="lg:w-[33px] lg:h-[33px] w-[21px] h-[21px]" />
                  <span className="pl-4 md:pl-6 leading-none">
                    Sealed Maintenance Free Battery
                  </span>
                </li>
                <li className="flex items-center text-white font-poppins text-[17px] lg:text-lg font-normal hover:font-bold md:mb-4 lg:mb-8">
                  <Point className="lg:w-[33px] lg:h-[33px] w-[21px] h-[21px]" />
                  <span className="pl-4 md:pl-6 leading-none">
                    High Cranking Power
                  </span>
                </li>
                <li className="flex items-center text-white font-poppins text-[17px] lg:text-lg font-normal hover:font-bold md:mb-4 lg:mb-8">
                  <Point className="lg:w-[33px] lg:h-[33px] w-[21px] h-[21px]" />
                  <span className="pl-4 md:pl-6 leading-none">
                    High Heat Tolerance
                  </span>
                </li>
                <li className="flex items-center text-white font-poppins text-[17px] lg:text-xl font-normal hover:font-bold md:mb-4 mb-8">
                  <Point className="lg:w-[33px] lg:h-[33px] w-[21px] h-[21px]" />
                  <span className="pl-4 md:pl-6 leading-none">
                    Durable Built
                  </span>
                </li>
              </ul>
              <Image
                className="order-3 md:order-2"
                src="/images/battery.png"
                alt="Battery"
                width={308}
                height={320}
              />
              <ul className="w-full lg:w-1/3 max-w-[300px] order-2 lg:order-3">
                <li className="flex items-center text-white font-poppins text-[17px] lg:text-lg font-normal hover:font-bold md:mb-4 lg:mb-8">
                  <Point className="lg:w-[33px] lg:h-[33px] w-[21px] h-[21px]" />
                  <span className="pl-4 md:pl-6 leading-none">
                    Top-Notch Performance Markings
                  </span>
                </li>
                <li className="flex items-center text-white font-poppins text-[17px] lg:text-lg font-normal hover:font-bold md:mb-4 lg:mb-8">
                  <Point className="lg:w-[33px] lg:h-[33px] w-[21px] h-[21px]" />
                  <span className="pl-4 md:pl-6 leading-none">
                    Vibration Resistant
                  </span>
                </li>
                <li className="flex items-center text-white font-poppins text-[17px] lg:text-lg font-normal hover:font-bold md:mb-4 lg:mb-8">
                  <Point className="lg:w-[33px] lg:h-[33px] w-[21px] h-[21px]" />
                  <span className="pl-4 md:pl-6 leading-none">
                    Single Vent Cover
                  </span>
                </li>
                <li className="flex items-center text-white font-poppins text-[17px] lg:text-xl font-normal hover:font-bold mb-8">
                  <Point className="lg:w-[33px] lg:h-[33px] w-[21px] h-[21px]" />
                  <span className="pl-4 md:pl-6 leading-none">
                    Built-In Safety Mechanisms
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 lg:mb-20">
          <div className="container">
            <div className="max-w-[780px] mx-auto mb-8 lg:mb-16">
              <h4 className="text-themeRed text-[22px] lg:text-[30px] font-bold text-center pb-2">
                Frequently Asked Questions
              </h4>
              <p className="block font-poppins text-center text-[#737273] text-sm lg:text-lg mb-6 mx-auto">
                Still have questions and queries?
                <span className="block">
                  We are here to answer your frequently asked questions!
                </span>
              </p>
            </div>
            <AccordionGroup
              items={faqItems}
              className="w-full md:w-5/6 mx-auto"
            />
          </div>
        </section>

        <InquireForm />
      </div>
    </main>
  );
}
