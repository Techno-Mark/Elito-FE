"use client";
import Slider from "react-slick";
import styles from "./heroBanner.module.css";
import BecomeDistributor from "../becomeDistributor/BecomeDistributor";

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
    <section className={`relative bg-white ${styles.heroBannerNewLanding}`}>
      <Slider
        {...settingsHero}
        className="max-w-screen overflow-hidden newHeroBanner"
      >
        <div className="flex hero-section min-h-[340px] md:min-h-[640px] home-hero-bg p-5 lg:py-16 firstHeroBg">
          <div className="container">
            <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2">
              <h4 className="text-[14px] md:text-[30px] text-white font-normal">
                Gear Up Your Business with
              </h4>
              <h3 className="text-[32px] text-white text-center md:text-left md:text-[60px] font-semibold leading-none">
                Long-Lasting Automotive Batteries
              </h3>
            </div>
          </div>
        </div>
        <div className="flex hero-section min-h-[340px] md:min-h-[640px] home-hero-bg p-5 lg:py-16 secondHeroBg">
          <div className="container">
            <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2">
              <h4 className="text-[14px] md:text-[30px] text-white font-normal">
                Gear Up Your Business with
              </h4>
              <h3 className="text-[32px] text-white text-center md:text-left md:text-[60px] font-semibold leading-none">
                Long-Lasting Automotive Batteries
              </h3>
            </div>
          </div>
        </div>
        <div className="flex hero-section min-h-[340px] md:min-h-[640px] home-hero-bg p-5 lg:py-16 thirdHeroBg">
          <div className="container">
            <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2">
              <h4 className="text-[14px] md:text-[30px] text-white font-normal">
                Gear Up Your Business with
              </h4>
              <h3 className="text-[32px] text-white text-center md:text-left md:text-[60px] font-semibold leading-none">
                Long-Lasting Automotive Batteries
              </h3>
            </div>
          </div>
        </div>
      </Slider>

      <div
        className={`mx-auto md:mx-0 bg-white rounded-lg p-5 lg:p-7 lg:absolute w-full lg:w-1/3 mt-6 md:mt-0 lg:right-24 lg:top-1/2 -translate-y-1/2 max-w-[90%] md:max-w-[455px] z-10 ${styles.contactForm}`}
      >
        <h3 className="text-themeRed pb-[30px] font-semibold font-poppins text-[20px]">
          Become an Exclusive Distributor
        </h3>
        <BecomeDistributor />
      </div>
    </section>
  );
};

export default HeroBanner;
