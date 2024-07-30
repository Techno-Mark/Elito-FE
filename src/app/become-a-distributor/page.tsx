"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

function BecomeDistributorPage() {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CHOICE &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CHOICE,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Thank you for your message. We'll contact you soon");
          },
          (error) => {
            console.log(error.text);
            toast.error("Error while sending message");
          }
        );
    }
    form.current.reset();
  };

  const locations = [
    {
      id: 1,
      name: "Australia",
      link: "https://elito.byve.io/",
      top: "68%",
      left: "83%",
      className: "h-[8rem] w-[10rem]",
    },
    {
      id: 2,
      name: "Brunei",
      link: "/",
      top: "54%",
      left: "83%",
      className: "h-10 w-10",
    },
    {
      id: 3,
      name: "Sri Lanka",
      link: "/",
      top: "50%",
      left: "72%",
      className: "h-10 w-10",
    },
    {
      id: 4,
      name: "Nepal",
      link: "/",
      top: "36.5%",
      left: "72%",
      className: "h-4 w-8",
    },
    {
      id: 5,
      name: "Bhutan",
      link: "/",
      top: "36.5%",
      left: "75%",
      className: "h-4 w-4",
    },
    {
      id: 6,
      name: "Myanmar",
      link: "/",
      top: "38%",
      left: "77%",
      className: "h-20 -rotate-12 w-10",
    },
    {
      id: 8,
      name: "Malaysia",
      link: "/",
      top: "50%",
      left: "78%",
      className: "h-20 -rotate-12 w-10",
    },
    {
      id: 7,
      name: "Philippines",
      link: "/",
      top: "43%",
      left: "85%",
      className: "h-20 w-10",
    },
  ];

  const locationsMobile = [
    {
      id: 1,
      name: "Australia",
      link: "https://elito.byve.io/",
      top: "68%",
      left: "84%",
      className: "h-10 w-10",
    },
    {
      id: 2,
      name: "Brunei",
      link: "/",
      top: "55%",
      left: "82%",
      className: "h-1 -rotate-45 w-4",
    },
    {
      id: 3,
      name: "Sri Lanka",
      link: "/",
      top: "52%",
      left: "72%",
      className: "h-1 w-1",
    },
    {
      id: 4,
      name: "Nepal",
      link: "/",
      top: "35%",
      left: "72%",
      className: "h-2 w-2",
    },
    {
      id: 5,
      name: "Bhutan",
      link: "/",
      top: "36.5%",
      left: "75%",
      className: "h-1 w-1",
    },
    {
      id: 6,
      name: "Myanmar",
      link: "/",
      top: "40%",
      left: "76%",
      className: "h-2 -rotate-12 w-2",
    },
    {
      id: 8,
      name: "Malaysia",
      link: "/",
      top: "53%",
      left: "79%",
      className: "h-2 -rotate-12 w-2",
    },
    {
      id: 7,
      name: "Philippines",
      link: "/",
      top: "43%",
      left: "86%",
      className: "h-6 -rotate-45 w-1",
    },
  ];

  return (
    <main className="flex max-w-screen overflow-hidden font-saira flex-col justify-start bg-white">
      {/* hero section  */}
      <div className="product-hero sub-products-home-bg px-5 py-20 lg:p-24 flex justify-center items-center h-[200px]">
        <h2 className="text-white text-center text-3xl lg:text-4xl font-bold">
          {" "}
          Become a Distributor
        </h2>
      </div>

      {/* contact form  */}
      <div className="contact-form px-5 py-14 lg:p-24 bg-white flex flex-col gap-y-4 lg:w-[60%]">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-themeBlue font-saira text-5xl font-bold">
            Just Say Hello!
          </h2>
          <h4 className="text-themeBlue font-poppins">
            Let us know more about you!
          </h4>
        </div>

        <div className="">
          <form
            action="#"
            ref={form}
            onSubmit={sendEmail}
            method="post"
            className="flex flex-col gap-y-4"
          >
            <div className="flex gap-x-4 font-poppins">
              <div className="flex gap-x-2">
                <input
                  type="radio"
                  name="type"
                  id="distributor"
                  value={"become-a-distributor"}
                />
                <span className="text-black">Become a Distributor</span>
              </div>

              <div className="flex gap-x-2">
                <input
                  type="radio"
                  name="type"
                  id="sales"
                  value={"sales-finance"}
                  className="checked:text-themeBlue"
                />
                <span className="text-black">Sales/Finance</span>
              </div>
            </div>
            <div className="flex gap-x-4 font-poppins">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="p-3 w-1/2 rounded-md text-black bg-[#dfdfdf]"
              />

              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                className="p-3 w-1/2 rounded-md text-black bg-[#dfdfdf]"
              />
            </div>

            <div className=" flex gap-x-4 font-poppins">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="E-Mail"
                className="p-3 w-1/2 rounded-md text-black bg-[#dfdfdf]"
              />

              <input
                type="text"
                name="country"
                id="country"
                placeholder="Country"
                className="p-3 w-1/2 rounded-md text-black bg-[#dfdfdf]"
              />
            </div>

            <div className="font-poppins">
              <textarea
                name="message"
                id="message"
                className="p-3 w-full rounded-md text-black bg-[#dfdfdf]"
                rows={5}
              ></textarea>
            </div>

            <div className="">
              <button
                className="uppercase bg-themeBlue px-8 py-3 text-[#fff] font-semibold rounded-md font-poppins"
                type="submit"
              >
                submit
              </button>
            </div>
          </form>
        </div>

        <div className=""></div>
      </div>

      {/* globe section  */}
      <div className="globe px-5 pb-10 lg:p-5 lg:px-24 lg:pb-24 text-black flex flex-col gap-y-10 lg:gap-y-16">
        <h2 className="text-themeBlue text-center text-3xl lg:text-4xl font-bold">
          {" "}
          Global Presence
        </h2>

        {/* for larger screens  */}
        <div className="mapContainer hidden lg:block">
          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716553639/elito-batteries/become-a-distributor/shbpoqkqsnetyishwmfs.svg"
            }
            alt={"map-image"}
            width={1551}
            height={824}
            className="map"
          />
          {locations.map((location: any) => (
            <div
              key={location.id}
              className={`location ${location.className}`}
              style={{ top: location.top, left: location.left }}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              onClick={() => (window.location.href = location.link)}
            >
              {hoveredLocation === location.id && (
                <div className={"popup"}>{location.name}</div>
              )}
            </div>
          ))}
        </div>

        {/* for smaller screens  */}
        <div className="mapContainer lg:hidden block">
          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716553639/elito-batteries/become-a-distributor/shbpoqkqsnetyishwmfs.svg"
            }
            alt={"map-image"}
            width={1551}
            height={824}
            className="map"
          />
          {locationsMobile.map((location: any) => (
            <div
              key={location.id}
              className={`location ${location.className}`}
              style={{ top: location.top, left: location.left }}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              onClick={() => (window.location.href = location.link)}
            >
              {hoveredLocation === location.id && (
                <div className={"popup"}>{location.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default BecomeDistributorPage;
