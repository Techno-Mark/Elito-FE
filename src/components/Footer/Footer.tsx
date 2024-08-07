"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { FaLinkedinIn } from "react-icons/fa";
import { usePathname } from "next/navigation";

function Footer() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
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

  const pathname = usePathname();
  const [footerHide, setFooterHide] = useState(false);
  useEffect(() => {
    if (pathname === "/landing-page-new" || "/landing-page-new/thankyou") {
      setFooterHide(true);
    }
  }, [pathname]);

  return (
    <>
      {!footerHide && (
        <footer className="pt-20 lg:pt-24 px-5 lg:px-24 pb-2 bg-themeBlue flex flex-col gap-y-10 lg:gap-y-16 text-white font-poppins">
          <div className="up flex flex-col lg:flex-row gap-y-12 lg:gap-y-0 justify-between">
            <div className="lg:w-1/2 flex flex-col gap-y-8">
              <div className="">
                <img
                  src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1715850413/elito-batteries/ygitcgylhdoachafpdp4.svg"
                  alt="logo"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="lg:w-[80%]">
                  Elito Battery is a leading automotive battery brand that
                  offers high quality and performance standards checked and
                  tested by over 100,000+ customers worldwide.  
                </p>

                <div className="flex gap-x-3">
                  <Link href={"https://www.facebook.com/ElitoBatteryOfficial"}>
                    <img
                      src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716122070/elito-batteries/home/vmpyyxd98d3o5jubwvtd.svg"
                      alt=""
                    />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/company/89548857/admin/feed/posts/"
                    }
                  >
                    <div className="border-2 p-[0.5rem] rounded-full">
                      <FaLinkedinIn className="" />
                    </div>
                  </Link>
                  <Link href={"https://www.instagram.com/unifieder/"}>
                    <img
                      src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1716122066/elito-batteries/home/vfkg28zzs4hmaxlfh4wx.svg"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col gap-y-8">
              <div className="">
                <h2 className="text-white font-saira text-5xl font-bold">
                  Just Say Hello!
                </h2>
                <h4>Let us know more about you!</h4>
              </div>

              <div className="">
                <form
                  action="#"
                  ref={form}
                  onSubmit={sendEmail}
                  method="post"
                  className="flex flex-col gap-y-4"
                >
                  <div className="flex gap-x-4">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="p-3 w-1/2 rounded-md bg-[#001b2f]"
                    />

                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      className="p-3 w-1/2 rounded-md bg-[#001b2f]"
                    />
                  </div>

                  <div className=" flex gap-x-4">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="E-Mail"
                      className="p-3 w-1/2 rounded-md bg-[#001b2f]"
                    />

                    <input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Country"
                      className="p-3 w-1/2 rounded-md bg-[#001b2f]"
                    />
                  </div>

                  <div className="">
                    <textarea
                      name="message"
                      id="message"
                      className="p-3 w-full rounded-md bg-[#001b2f]"
                      rows={5}
                    ></textarea>
                  </div>

                  <div className="flex justify-center lg:justify-start">
                    <button
                      className="uppercase bg-white px-8 py-3 text-[#171717] font-semibold rounded-md"
                      type="submit"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="down text-center">Copyright © 2024 Elito Battery</div>
        </footer>
      )}
    </>
  );
}

export default Footer;
