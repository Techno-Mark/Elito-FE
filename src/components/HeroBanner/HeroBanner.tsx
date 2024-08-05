import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import styles from "./heroBanner.module.css";
import CountryDropdown from "../CountryDropdown/CountryDropdown";

const HeroBanner = () => {
  const settingsHero = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <section className="relative">
      <Slider
        {...settingsHero}
        className="max-w-screen overflow-hidden newHeroBanner"
      >
        <div className="flex hero-section min-h-[540px] home-hero-bg p-5 lg:py-16 lg:px-24 firstHeroBg">
          <div className="flex flex-col justify-center items-start w-full md:w-1/2">
            <h4 className="text-[30px] text-white font-normal">
              Gear Up Your Business with
            </h4>
            <h3 className="text-white text-[80px] font-semibold leading-none">
              Long-Lasting Automotive Batteries
            </h3>
          </div>
        </div>
        <div className="flex hero-section min-h-[540px] home-hero-bg p-5 lg:py-16 lg:px-24 secondHeroBg">
          <div className="flex flex-col justify-center items-start w-full md:w-1/2">
            <h4 className="text-[30px] text-white font-normal">
              Gear Up Your Business with
            </h4>
            <h3 className="text-white text-[80px] font-semibold leading-none">
              Long-Lasting Automotive Batteries
            </h3>
          </div>
        </div>
        <div className="flex hero-section min-h-[540px] home-hero-bg p-5 lg:py-16 lg:px-24 thirdHeroBg">
          <div className="flex flex-col justify-center items-start w-full md:w-1/2">
            <h4 className="text-[30px] text-white font-normal">
              Gear Up Your Business with
            </h4>
            <h3 className="text-white text-[80px] font-semibold leading-none">
              Long-Lasting Automotive Batteries
            </h3>
          </div>
        </div>
      </Slider>

      <div
        className={`bg-white rounded-lg p-5 lg:p-7 lg:absolute w-full lg:w-1/3 mt-6 md:mt-0 right-24 top-1/2 -translate-y-1/2 max-w-[455px] ${styles.contactForm}`}
      >
        <div className="flex flex-col">
          <div className="w-full mb-3 md:mb-6">
            <input
              id="grid-first-name"
              name="fullName"
              placeholder="Full Name"
              type="text"
              required={true}
              className={`block w-full border border-[#73727366] rounded-lg py-2 px-4 focus:outline-none`}
            />
          </div>
        </div>
        <div className="w-full mb-3 md:mb-6">
          <div className="flex flex-col">
            <div className="flex">
              <div className="w-[100px] text-[12px]">
                <CountryDropdown
                  variant="small"
                  className="!border-[rgba(115,114,115,0.4)]"
                />
              </div>
              <input
                id="grid-phoneNumber"
                placeholder="Mobile Number"
                name="phoneNumber"
                type="text"
                required={true}
                maxLength={10}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const { value } = e.target;
                  if (/^\d{0,10}$/.test(value)) {
                    // Update formik value if it passes validation
                    // setFieldValue("phoneNumber", value);
                  }
                }}
                className={`block w-full border border-[#73727366] rounded-lg py-2 px-4 ml-2 focus:outline-none `}
              />
            </div>
          </div>
        </div>
        <div className="w-full mb-3 md:mb-6">
          <input
            id="emailId"
            name="emailId"
            type="email"
            placeholder="Email Address"
            required={true}
            className={`block w-full border border-[#73727366] rounded-lg py-2 px-4 focus:outline-none`}
          />
        </div>
        <div className="w-full mb-3 md:mb-6">
          <input
            name="city"
            className={`w-full flex justify-between px-2 py-2 leading-tight bg-white text-[var(--text-color)] font-medium border border-gray-300 rounded-lg cursor-pointer focus:outline-none min-h-[45px] items-center`}
            placeholder="City"
          />
        </div>
        <div className="w-full mb-3 md:mb-6 flex items-baseline">
          <input
            type="Checkbox"
            id="grid-accept-terms"
            name="acceptTerms"
            defaultChecked={true}
          />
          <label
            htmlFor="grid-accept-terms"
            className="font-normal text-base text-[#404040] ml-2"
          >
            I agree to receive promotional calls / SMS / WhatsApp and emails
            from Elito.
          </label>
        </div>
        <button
          type="submit"
          className="bg-[#D30300] rounded-md w-full justify-center text-base font-semibold flex items-center !py-3 !px-5"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
