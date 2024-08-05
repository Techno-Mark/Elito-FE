"use client";

import Link from "next/link";
import { useState } from "react";
import InqForm from "./_form";
import styles from "./inquireform.module.css";
import CloseIcon from "../../../public/assets/icons/closeIcon";

const InquireForm = () => {
  const [enqFormPopup, setEnqFormPopup] = useState<boolean>(false);

  const handleClose = () => {
    setEnqFormPopup(false);
  };

  const handleAction = () => {
    setEnqFormPopup(false);
  };

  return (
    <>
      <section
        className={`bg-[#404040] py-2 lg:sticky lg:bottom-0 ${styles.inquiryForm} hidden lg:block`}
      >
        <div className="container max-w-[1580px] px-4 mx-auto">
          <InqForm />
        </div>
      </section>
      <div className="block lg:hidden fixed bottom-5 text-center w-full z-9">
        <Link
          href="javascript:void(0)"
          onClick={() => setEnqFormPopup(true)}
          className="inline-block px-[20px] py-[11px] text-white border border-white font-bold rounded-lg bg-[var(--highlighted-color)]"
        >
          Enquire Now
        </Link>
      </div>
      {enqFormPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999] lg:hidden">
          <div className="bg-white md:w-3/5 w-[calc(100%-30px)] border rounded-lg">
            <div className="flex !justify-end pt-4 pr-5">
              <button
                className="bg-transparent border-none text-2xl cursor-pointer"
                onClick={handleClose}
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex p-4 flex-col">
              <h3 className="w-7/12 md:w-2/5 text-[var(--footer-bg)] text-xl pb-[20px] leading-none font-extrabold">
                Investment Inquire Form!
              </h3>
              <InqForm varient="dark" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InquireForm;
