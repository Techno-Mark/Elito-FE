"use client";

import AccordionGroup from "@/components/accordion/accordiongroup";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import InquireForm from "@/components/inquireForm/inquireForm";
import { default as needs } from "@/data/home.json";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "swiper/css";
import "swiper/css/pagination";
import { Aftermarket } from "../../../public/assets/icons/Aftermarket";
import ArrowDown from "../../../public/assets/icons/arrowDown";
import AutoChargeRetention from "../../../public/assets/icons/benefits/autoChargeRetention";
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
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2500,
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next + 1);
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, inView]);

  const faqItems = [
    {
      title: "Who can become an Elito Battery distributor? ",
      content: (
        <p className="text-lg text-[#333333] font-poppins">
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
        <p className="text-lg text-[#333333] font-poppins">
          You can become an Elito automotive battery distributor
        </p>
      ),
    },
    {
      title:
        "What are the benefits I would receive on becoming an Elito Battery distributor? ",
      content: (
        <p className="text-lg text-[#333333] font-poppins">
          You can become an Elito automotive battery distributor
        </p>
      ),
    },
  ];

  return (
    <main className="flex font-saira flex-col justify-start">
      {/* hero-section  */}
      <HeroBanner />
      <div className="relative bg-white">
        {/* Partner section  */}
        <section className="info bg-white text-black px-5 py-20 lg:p-24 flex flex-col max-w-[1113px] mx-auto">
          <h2 className="text-themeRed text-3xl lg:text-4xl font-bold text-center pb-[10px]">
            Why Partner with Us?
          </h2>
          <p className="font-poppins text-[#333333] text-justify lg:text-center mb-8">
            If you are someone looking forward to taking a business leap, you
            are in the right place! Here are some of the reasons why you should
            become an Elito Battery distributor and scale growth.
          </p>

          <div className="font-poppins text-[#333333] flex flex-col lg:flex-row justify-center">
            <div className="flex flex-col justify-between items-center p-[23px] md:py-6 md:px-5 lg:px-11 lg:py-12 max-w-[302px] text-center rounded-lg bg-[#404040] text-white hover:bg-[#D30300]">
              <QualityCheck />
              <div className="text-xl font-normal mt-5">
                Committed to Quality and Service
              </div>
            </div>

            <div className="flex flex-col justify-between items-center mx-[20px] p-[23px] md:py-6 md:px-5 lg:px-11 lg:py-12 max-w-[302px] text-center rounded-lg bg-[#404040] text-white hover:bg-[#D30300]">
              <IndustryLeader />

              <div className="text-xl font-normal mt-5">
                Trusted by Industry Leaders
              </div>
            </div>

            <div className="flex flex-col justify-between items-center p-[23px] md:py-6 md:px-5 lg:px-11 lg:py-12 max-w-[302px] text-center rounded-lg bg-[#404040] text-white hover:bg-[#D30300]">
              <Performance />
              <div className="text-xl font-normal mt-5">
                35+ Years of Proven Performance
              </div>
            </div>
          </div>
        </section>
        {/* Who we Are */}
        <section className={`relative pb-10 md:pb-16`}>
          <div className="container max-w-[1580px] px-4 mx-auto">
            <div className="flex justify-between items-center">
              <div className="">
                <h4 className="font-poppins text-[#737273] text-xl">
                  Wondering if you can be the one?
                </h4>
                <h3 className="text-themeRed text-[45px] font-semibold leading-none">
                  Dive in to know{" "}
                  <span className="md:block">who we are looking for!</span>
                </h3>
              </div>
              <Image
                src="/images/whoWeAre.png"
                alt="Who We Are"
                width={389}
                height={441}
              />
            </div>
          </div>
          <div className="flex justify-center w-full absolute bottom-10">
            <ArrowDown />
          </div>
        </section>

        {/* Criteria Battery Distributor */}
        <section className="relative bg-[#6C6C6C] criteriaBattery py-10 md:py-16">
          <div className="container max-w-[1580px] mx-auto relative px-4">
            <div className="w-full lg:w-1/2 text-center mx-auto pb-8">
              <h4 className="font-semibold text-[40px] leading-none pb-2">
                Criteria for Becoming an Elito Automotive Battery Distributor
              </h4>
              <p className="pb-6 font-poppins font-normal text-[16px]">
                You must be one of the following to become an Elito Battery
                distributor.
              </p>
            </div>
            <div className="flex justify-between mt-8">
              <div className="flex flex-col max-w-[225px] items-center text-center">
                <div className="bg-white border border-4 border-[#EDEDED] rounded-full p-6 max-w-[100px] max-h-[100px]">
                  <Wholesaler className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-5">
                  Existing Distributor/Wholesaler
                </p>
              </div>
              <div className="flex flex-col max-w-[225px] items-center text-center">
                <div className="bg-white border border-4 border-[#EDEDED] rounded-full p-6 max-w-[100px] max-h-[100px]">
                  <ImportExport className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-5">Export-Import Firm</p>
              </div>
              <div className="flex flex-col max-w-[225px] items-center text-center">
                <div className="bg-white border border-4 border-[#EDEDED] rounded-full p-6 max-w-[100px] max-h-[100px]">
                  <RetailChain className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-5">Large Retail Chain</p>
              </div>
              <div className="flex flex-col max-w-[225px] items-center text-center">
                <div className="bg-white border border-4 border-[#EDEDED] rounded-full p-6 max-w-[100px] max-h-[100px]">
                  <Entrepreneur className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-5">Entrepreneur</p>
              </div>
              <div className="flex flex-col max-w-[225px] items-center text-center">
                <div className="bg-white border border-4 border-[#EDEDED] rounded-full p-6 max-w-[100px] max-h-[100px]">
                  <Aftermarket className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-5">
                  Automotive Aftermarket Trading Firm
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`relative py-10 md:py-16`}>
          <div className="container max-w-[1580px] px-4 mx-auto">
            <div className="flex justify-between items-center text-[#404040]">
              <h4 className="text-[40px] leading-none max-w-[665px] font-normal">
                Here's what you must do to
                <strong className="block font-semibold">
                  further comply with our process and requirements.
                </strong>
              </h4>
              <Image
                src="/images/processRequirement.png"
                alt="Who We Are"
                width={389}
                height={441}
              />
            </div>
          </div>
        </section>

        <section className={`relative py-10 md:py-16`}>
          <div className="container max-w-[1580px] px-4 mx-auto">
            <div className="flex justify-between items-center text-[#404040]">
              <h4 className="text-[40px] leading-none max-w-[665px] font-normal">
                Elito Battery distributorship comes with ample benefits that
                would
                <strong className="block font-semibold">
                  take your entrepreneurial feat a notch higher.
                </strong>
              </h4>
              <Image
                src="/images/notchhigher.png"
                alt="Who We Are"
                width={389}
                height={441}
              />
            </div>
          </div>
        </section>

        <section className="relative bg-[#6C6C6C] criteriaBattery py-10 md:py-16">
          <div className="container max-w-[1580px] mx-auto relative px-4">
            <div className="w-full lg:w-3/5 text-center mx-auto pb-8">
              <h4 className="font-semibold text-[40px] leading-none pb-2">
                Discover the Multifold Benefits of Becoming an Elito Battery
                Distributor
              </h4>
              <p className="pb-6 font-poppins font-normal text-[16px]">
                Still wondering why you must partner up with Elito Battery? Here
                are the significant ways in which our distributorship would
                benefit you!
              </p>
            </div>
            <div className="flex justify-around mt-8">
              <div className="flex flex-col max-w-[225px] items-center text-center">
                <div className="bg-white border border-4 border-[#EDEDED] rounded-full p-6 max-w-[100px] max-h-[100px]">
                  <Distributorship className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-5">
                  Sole Distributorship Country and State-wise
                </p>
              </div>
              <div className="flex flex-col max-w-[225px] items-center text-center">
                <div className="bg-white border border-4 border-[#EDEDED] rounded-full p-6 max-w-[100px] max-h-[100px]">
                  <ImportExport className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-5">High ROI</p>
              </div>
              <div className="flex flex-col max-w-[225px] items-center text-center">
                <div className="bg-white border border-4 border-[#EDEDED] rounded-full p-6 max-w-[100px] max-h-[100px]">
                  <RetailChain className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-5">Quick Sales Turnover</p>
              </div>
              <div className="flex flex-col max-w-[225px] items-center text-center">
                <div className="bg-white border border-4 border-[#EDEDED] rounded-full p-6 max-w-[100px] max-h-[100px]">
                  <Entrepreneur className="w-full h-auto" />
                </div>
                <p className="font-poppins pt-5">
                  Marketing and Branding Support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product cards  */}
        <section className="cards bg-white text-black py-10 md:py-16 lg:py-20">
          <div className="container">
            <h3 className="text-themeRed text-3xl lg:text-4xl font-bold text-center pb-2">
              Explore Our Range of Products
            </h3>
            <p className="block font-poppins max-w-[880px] text-center text-[#737273] text-xl mb-8 mx-auto">
              Elito automotive batteries come in a range of two types that cater
              to the distinct requirements of the automobile industry. Here are
              the types of batteries that we offer.
            </p>
            <div className="pb-10 md:pb-16 flex justify-center flex-col lg:flex-row">
              {needs.needs?.map((item: any, index: any) => (
                <Link
                  href={item.link}
                  className="md:w-[50%] relative mx-6 max-w-[627px]"
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
                  <div className="rounded-lg border border-[#333333] border-t-0 rounded-t-none py-8">
                    <h3 className="text-themeRed text-3xl text-center py-4 font-semibold">
                      {item.title}
                    </h3>
                    <p className="font-poppins w-[90%] text-center mx-auto pb-4 text-xl">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Product Manufacturing */}
        <section className="mb-16">
          <div className="container !max-w-[1470px]">
            <div className="flex justify-between items-center mb-20">
              <Image
                className="rounded-lg w-full max-w-[615px] max-h-[441px] object-cover object-bottom md:mr-5"
                src={"/images/productManufacturing.jpg"}
                alt="Product Manufacturing"
                width={615}
                height={441}
              />
              <div className="font-poppins max-w-[769px] text-[#333333] text-xl md:ml-5">
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
            <div className="max-w-[600px] mx-auto">
              <h4 className="relative pb-8 text-center text-[#404040] text-4xl text-semibold after:bottom-0 after:bg-[#000000] after:max-w-[290px] after:h-[1px] after:absolute after:left-0 after:right-0 after:mx-auto">
                Get an Insight into Why We are Chosen by Our Customers
              </h4>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-10">
          <div className="container">
            <div className="max-w-[780px] mx-auto">
              <h4 className="text-themeRed text-3xl lg:text-4xl font-bold text-center pb-2">
                Benefits of Using Elito Battery
              </h4>
              <p className="block font-poppins max-w-[880px] text-center text-[#737273] text-xl mb-6 mx-auto">
                While our loyal customers are dedicated to choosing Elito
                battery over others, there are a myriad of new customers who
                discover its significant benefits.
              </p>
            </div>
            <ul className="flex flex-wrap">
              <li className="w-full md:w-1/2 lg:w-1/4 my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300]"
                >
                  <AutoChargeRetention />
                  <span className="pt-8 font-poppins text-[#333333]">
                    Longer Shelf Life
                  </span>
                </Link>
              </li>
              <li className="w-full md:w-1/2 lg:w-1/4 my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300]"
                >
                  <AutoChargeRetention />
                  <span className="pt-8 font-poppins text-[#333333]">
                    Auto Charge Retention
                  </span>
                </Link>
              </li>
              <li className="w-full md:w-1/2 lg:w-1/4 my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300]"
                >
                  <AutoChargeRetention />
                  <span className="pt-8 font-poppins text-[#333333]">
                    Zero Maintenance
                  </span>
                </Link>
              </li>
              <li className="w-full md:w-1/2 lg:w-1/4 my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300]"
                >
                  <AutoChargeRetention />
                  <span className="pt-8 font-poppins text-[#333333]">
                    Suitable for All Weather Conditions
                  </span>
                </Link>
              </li>
              <li className="w-full md:w-1/2 lg:w-1/4 my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300]"
                >
                  <AutoChargeRetention />
                  <span className="pt-8 font-poppins text-[#333333]">
                    High Reserve Capacity
                  </span>
                </Link>
              </li>
              <li className="w-full md:w-1/2 lg:w-1/4 my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300]"
                >
                  <AutoChargeRetention />
                  <span className="pt-8 font-poppins text-[#333333]">
                    C2 Performance Rating
                  </span>
                </Link>
              </li>
              <li className="w-full md:w-1/2 lg:w-1/4 my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300]"
                >
                  <AutoChargeRetention />
                  <span className="pt-8 font-poppins text-[#333333]">
                    Suitable for All Terrains
                  </span>
                </Link>
              </li>
              <li className="w-full md:w-1/2 lg:w-1/4 my-6">
                <Link
                  href="javascript;void(0);"
                  className="m-2 px-4 py-8 bg-white shadow-lg flex flex-col justify-center items-center border border-transparent rounded-xl hover:border-[#D30300]"
                >
                  <AutoChargeRetention />
                  <span className="pt-8 font-poppins text-[#333333]">
                    Reduced Water Loss
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="relative my-8 py-10">
          <Image
            src="/images/Features.jpg"
            alt="Features"
            width={1920}
            height={833}
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
          <div className="container relative">
            <div className="max-w-[640px] text-white mx-auto text-center">
              <h3 className="pb-2 text-4xl font-semibold">
                Features of Elito Battery
              </h3>
              <p className="leading-normal text-xl">
                Here are some of the key features of Elito battery that make it
                a No.1 choice for our customers across the globe.
              </p>
            </div>
            <div className="flex items-center justify-between max-w-[1100px] mx-auto my-10 md:my-20">
              <ul className="w-full lg:w-1/3 max-w-[300px]">
                <li className="flex items-center text-white font-poppins text-xl font-normal hover:font-bold mb-8">
                  <Point className="w-[33px] h-[33px]" />
                  <span className="pl-4 md:pl-6">
                    Sealed Maintenance Free Battery
                  </span>
                </li>
                <li className="flex items-center text-white font-poppins text-xl font-normal hover:font-bold mb-8">
                  <Point className="w-[33px] h-[33px]" />
                  <span className="pl-4 md:pl-6">High Cranking Power</span>
                </li>
                <li className="flex items-center text-white font-poppins text-xl font-normal hover:font-bold mb-8">
                  <Point className="w-[33px] h-[33px]" />
                  <span className="pl-4 md:pl-6">High Heat Tolerance</span>
                </li>
                <li className="flex items-center text-white font-poppins text-xl font-normal hover:font-bold">
                  <Point className="w-[33px] h-[33px]" />
                  <span className="pl-4 md:pl-6">Durable Built</span>
                </li>
              </ul>
              <Image
                src="/images/battery.png"
                alt="Battery"
                width={308}
                height={320}
              />
              <ul className="w-full lg:w-1/3 max-w-[300px]">
                <li className="flex items-center text-white font-poppins text-xl font-normal hover:font-bold mb-8">
                  <Point className="w-[33px] h-[33px]" />
                  <span className="pl-4 md:pl-6">
                    Top-Notch Performance Markings
                  </span>
                </li>
                <li className="flex items-center text-white font-poppins text-xl font-normal hover:font-bold mb-8">
                  <Point className="w-[33px] h-[33px]" />
                  <span className="pl-4 md:pl-6">Vibration Resistant</span>
                </li>
                <li className="flex items-center text-white font-poppins text-xl font-normal hover:font-bold mb-8">
                  <Point className="w-[33px] h-[33px]" />
                  <span className="pl-4 md:pl-6">Single Vent Cover</span>
                </li>
                <li className="flex items-center text-white font-poppins text-xl font-normal hover:font-bold">
                  <Point className="w-[33px] h-[33px]" />
                  <span className="pl-4 md:pl-6">
                    Built-In Safety Mechanisms
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 mb-20">
          <div className="container">
            <div className="max-w-[780px] mx-auto mb-8 md:mb-16">
              <h4 className="text-themeRed text-3xl lg:text-4xl font-bold text-center pb-2">
                Frequently Asked Questions
              </h4>
              <p className="block font-poppins max-w-[880px] text-center text-[#737273] text-xl mb-6 mx-auto">
                Still have questions and queries?{" "}
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
