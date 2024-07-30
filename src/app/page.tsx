"use client";

import React, { useState, useEffect } from "react";
import "swiper/css";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import news from "@/data/home.json";
import needs from "@/data/home.json";
import stats from "@/data/home.json";
import points from "@/data/home.json";
import testimonials from "@/data/home.json";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
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

  const settingsHero = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, inView]);

  return (
    <main className="flex font-saira flex-col justify-start">
      {/* hero-section  */}
      <Slider {...settingsHero} className="max-w-screen overflow-hidden">
        <div className="hero-section min-h-[640px] home-hero-bg p-5 lg:p-24">
          <div className="h-[448px] flex flex-col justify-center items-start gap-y-8">
            {/* for larger screens  */}
            <h1 className="text-5xl hidden lg:block leading-[4rem] w-[60%] text-white">
              Elevate your driving experience <br />
              <b>
                with durable and high <br /> performance Elito Batteries
              </b>
            </h1>

            {/* for small screens  */}
            <h1 className="text-4xl mt-20 lg:hidden block text-center leading-[2.8rem] w-full text-white">
              Elevate your driving experience &nbsp;
              <b>with durable and high performance Elito Batteries</b>
            </h1>

            <div className="w-full flex justify-center lg:justify-start">
              <Link href={"/about-us"} className="">
                <button className="uppercase bg-white p-4 text-[#171717] font-semibold rounded-md">
                  know more
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-section min-h-[640px] home-hero-bg-two p-5 lg:p-24">
          <div className="h-[448px] flex flex-col justify-center items-start gap-y-8">
            {/* for larger screens  */}
            <h1 className="text-5xl hidden lg:block leading-[4rem] w-[60%] text-white">
              World-class <br />
              <b>Automotive Batteries</b>
            </h1>

            {/* for small screens  */}
            <h1 className="text-4xl mt-20 lg:hidden block text-center leading-[2.8rem] w-full text-white">
              World-class &nbsp;
              <b> Automotive Batteries</b>
            </h1>

            <div className="w-full flex justify-center lg:justify-start">
              <Link href={"/about-us"} className="">
                <button className="uppercase bg-white p-4 text-[#171717] font-semibold rounded-md">
                  know more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Slider>

      {/* info  */}
      <div className="info bg-white text-black px-5 py-20 lg:p-24 flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-6">
          <h3 className="text-[#777777] uppercase font-poppins font-semibold text-center">
            Welcome to ELITO BATTERY
          </h3>
          <h2 className="text-themeBlue text-3xl lg:text-4xl font-bold text-center">
            Your Trusted Partner for Smooth, Hassle-free Ride
          </h2>
          <p className="font-poppins text-[#333333] lg:w-[80%] mx-auto text-justify lg:text-center">
            Elito Batteries are SMF (sealed maintenance-free) batteries that
            offer high performance for every ride. These batteries are made with
            a Unique Venting Design that lowers water loss and offers longer
            shelf life. Elito Batteries are corrosion-resistant and designed to
            give better electrical conductivity. Tested for vibration and high
            heat tolerance, these automotive and tubular batteries are
            sustainable, ultra-low maintenance, and can auto-retain stored
            charge for optimal performance. 
          </p>
        </div>

        <div className="font-poppins text-[#333333] lg:w-[80%] mx-auto flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 justify-between">
          <div className="flex gap-x-4 items-center">
            <div className="w-[25%] lg:w-auto">
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
            <div className="w-[25%] lg:w-auto">
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
            <div className="w-[25%] lg:w-auto">
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

        <div className="font-poppins mx-auto">
          <Link href={"/about-us"}>
            <button className="uppercase bg-themeBlue text-white px-4 py-3 rounded-md">
              discover more
            </button>
          </Link>
        </div>
      </div>

      {/* cards  */}
      <div className="cards bg-white text-black">
        <div className="bg-[#f8f8f8] h-[370px] px-5 py-20 lg:p-24">
          <h2 className="text-themeBlue text-3xl lg:text-4xl font-bold text-center">
            An Elito Battery for All Your Needs 
          </h2>
        </div>

        <div className="px-5 lg:px-24 pb-20 lg:pb-[18rem] flex justify-center flex-col lg:flex-row gap-x-8 -mt-[10rem] gap-y-14 lg:gap-y-0">
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

      {/* stats  */}
      <div className="stats home-stats-bg lg:h-[440px] px-5 py-20 lg:p-24 flex">
        <div className="lg:w-[60%]">
          <h2 className="text-3xl lg:text-4xl text-white font-bold">
            Why Elito?
          </h2>
          <div className="text-white">
            <div ref={ref}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={controls}
                transition={{ duration: 1 }}
                className="flex lg:flex-wrap w-full flex-col lg:flex-row mt-10 lg:mt-14 gap-y-10 lg:gap-y-14"
              >
                {stats.stats?.map((item, index) => (
                  <div
                    className="lg:w-[50%] text-white w-full flex items-center gap-x-4"
                    key={index}
                  >
                    <span className="text-4xl lg:text-[3.2rem] font-semibold min-w-[120px] lg:min-w-[80px]">
                      <CountUp
                        start={inView ? 0 : 0} // Start counting only when in view
                        end={item.number}
                        duration={7}
                        className="font-bold"
                      />
                      {item.sign}
                    </span>
                    <span className="text-xl font-poppins font-normal">
                      {item.name1} <br /> {item.name2}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-[40%] hidden lg:block">
          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1715949654/elito-batteries/home/pbkv4f80lku5ddhmhofg.png"
            }
            className="-mt-[15.5rem] ml-20"
            alt="stats-man"
            height={595}
            width={506}
          />
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

      {/* points  */}
      <div className="points bg-white text-black px-5 py-20 lg:p-24 flex flex-col gap-y-14">
        <div className="header flex flex-col gap-y-3">
          <h2 className="text-3xl lg:text-4xl text-themeBlue font-bold leading-[3rem] text-center">
            Charge Up with Elito Confidence!
          </h2>
          <p className="lg:w-[50%] mx-auto text-center text-[#333333] font-poppins">
            Choose high-quality, reliable automotive batteries for your
            vehicle&apos;s supercharged performance. Regardless of the climate
            or road, drive off with Elito&apos;s confidence!
          </p>
        </div>

        <div className="p-items flex flex-col lg:flex-row flex-wrap justify-between gap-x-4 gap-y-10 lg:gap-y-14">
          {points.points?.map((item, index) => (
            <div className="lg:w-[32%] flex gap-x-4" key={item.title}>
              <div className="w-[18%]">
                <Image src={item.imgUrl} alt="icon" height={75} width={74} />
              </div>
              <div className="w-[88%] font-poppins flex flex-col gap-y-3">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link href={"/about-us"} className="mx-auto">
          <button className="uppercase bg-themeBlue px-4 py-3  text-[#fff] font-semibold rounded-md">
            discover more
          </button>
        </Link>
      </div>

      {/* news-cards  */}
      <div className="cards bg-white text-black">
        <div className="bg-[#f8f8f8] h-[370px] px-5 py-20 lg:p-24 flex flex-col gap-y-4">
          <h2 className="text-themeBlue text-3xl lg:text-4xl font-bold text-center">
            Latest News and Updates
          </h2>
          <p className="lg:w-[50%] text-center mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>
        </div>

        <div className="px-5 lg:px-24 pb-16 flex flex-col lg:flex-row lg:justify-between lg:gap-x-8 -mt-[4rem] lg:-mt-[7rem] gap-y-10 lg:gap-y-0">
          {news.news?.map((item: any, index: any) => (
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

        <div className="mx-auto flex justify-center mb-24">
          <Link href={"/about-us"} className="mx-auto">
            <button className="uppercase bg-themeBlue px-4 py-3  text-[#fff] font-semibold rounded-md">
              know more
            </button>
          </Link>
        </div>
      </div>

      {/* testimonial sliders  */}
      <div className="testimonials block lg:hidden py-20 px-5 bg-[#f8f8f8] text-black">
        <h2 className="text-themeBlue text-4xl font-bold text-center">
          Testimonials
        </h2>

        <div className="">
          <section className="pt-10 lg:pt-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={32}
                loop={true}
                centeredSlides={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 32 },
                  768: { slidesPerView: 2, spaceBetween: 32 },
                  1024: { slidesPerView: 3, spaceBetween: 32 },
                }}
                className="mySwiper"
              >
                {testimonials.testimonials?.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white text-[#777777] font-poppins flex justify-center flex-col items-center gap-y-8 py-12 px-2">
                      <p className="text-center min-h-[25vh]">
                        {testimonial.description}
                      </p>

                      <div className=" flex flex-col gap-y-2">
                        <h4 className="text-themeBlue font-semibold text-xl text-center">
                          {testimonial.name}
                        </h4>
                        <h5 className="uppercase font-bold text-center">
                          {testimonial.country}
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </div>
      </div>

      {/* testimonial sliders unique  */}
      <div className="py-24 hidden lg:block bg-[#f8f8f8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-y-16">
          <h2 className="text-themeBlue text-4xl font-bold text-center">
            Testimonials
          </h2>

          <Slider {...settings}>
            {testimonials.testimonials?.map((testimonial, index) => (
              <div
                key={index}
                className={`px-4 ${
                  activeSlide === index ? "active-slide" : ""
                }`}
              >
                <div className="testimonial-box bg-white text-[#777777] font-poppins flex justify-center flex-col items-center gap-y-8 py-12 px-2">
                  <p className="text-center min-h-[25vh]">
                    {testimonial.description}
                  </p>

                  <div className=" flex flex-col gap-y-2">
                    <h4 className="text-themeBlue font-semibold text-xl text-center">
                      {testimonial.name}
                    </h4>
                    <h5 className="uppercase font-bold text-center">
                      {testimonial.country}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
}
