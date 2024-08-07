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
        className={`bg-[#404040] py-2 md:sticky md:bottom-0 ${styles.inquiryForm} hidden md:block`}
      >
        <div className="container mx-auto">
          <InqForm />
        </div>
      </section>
      <div className="block md:hidden fixed bottom-5 text-center w-full z-9">
        <Link
          href="javascript:void(0)"
          onClick={() => setEnqFormPopup(true)}
          className="flex items-center justify-center px-[20px] py-[11px] text-white font-bold rounded-full bg-[#D30300] font-poppins max-w-[200px] mx-auto"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_177_774)">
              <path
                d="M14.0669 9.90988H4.30618C3.51475 9.90988 2.87079 9.26591 2.87079 8.47449V7.04344C2.87079 6.25201 3.51475 5.60804 4.30618 5.60804H14.0669C14.8583 5.60804 15.5022 6.25201 15.5022 7.04344V8.47449C15.5022 9.26591 14.8583 9.90988 14.0669 9.90988ZM4.30618 7.04344C4.30548 7.04344 4.30534 7.04344 4.30534 7.04344L4.30618 8.47449H14.0669V7.04344H4.30618ZM15.5022 3.56261C15.5022 3.16619 15.181 2.84491 14.7846 2.84491H3.58848C3.19207 2.84491 2.87079 3.16619 2.87079 3.56261C2.87079 3.95902 3.19207 4.2803 3.58848 4.2803H14.7846C15.181 4.2803 15.5022 3.95902 15.5022 3.56261ZM15.5022 13.3951C15.5022 12.9986 15.181 12.6774 14.7846 12.6774H9.33006C8.93364 12.6774 8.61236 12.9986 8.61236 13.3951C8.61236 13.7915 8.93364 14.1128 9.33006 14.1128H14.7846C15.181 14.1128 15.5022 13.7915 15.5022 13.3951ZM5.74157 15.5395H4.30618C3.51475 15.5395 2.87079 14.8955 2.87079 14.1041V12.673C2.87079 11.8814 3.51475 11.2376 4.30618 11.2376H5.74157C6.533 11.2376 7.17697 11.8814 7.17697 12.673V14.1041C7.17697 14.8955 6.533 15.5395 5.74157 15.5395ZM4.30618 12.673C4.30548 12.673 4.30534 12.673 4.30534 12.673L4.30618 14.1041H5.74157V12.673H4.30618ZM18.373 15.5123C18.373 15.1158 18.0518 14.7946 17.6553 14.7946C17.2589 14.7946 16.9376 15.1158 16.9376 15.5123C16.9376 16.3037 16.2937 16.9477 15.5022 16.9477H2.87079C2.07936 16.9477 1.43539 16.3037 1.43539 15.5123V2.8808C1.43539 2.08937 2.07936 1.4454 2.87079 1.4454H15.5022C16.2937 1.4454 16.9376 2.08937 16.9376 2.8808V11.9238C16.9376 12.3202 17.2589 12.6415 17.6553 12.6415C18.0518 12.6415 18.373 12.3202 18.373 11.9238V2.8808C18.373 1.2978 17.0852 0.0100098 15.5022 0.0100098H2.87079C1.28779 0.0100098 0 1.2978 0 2.8808V15.5123C0 17.0953 1.28779 18.383 2.87079 18.383H15.5022C17.0852 18.383 18.373 17.0953 18.373 15.5123Z"
                fill="white"
                stroke="#D30300"
                strokeWidth="0.625532"
              />
            </g>
            <defs>
              <clipPath id="clip0_177_774">
                <rect
                  width="18.373"
                  height="18.373"
                  fill="white"
                  transform="translate(0 0.0100098)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="pl-2">Enquire Now!</span>
        </Link>
      </div>
      {enqFormPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999] md:hidden">
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
              <h3 className="w-3/4 text-[#D30300] text-xl pb-[20px] leading-none font-extrabold">
                Become an Exclusive Distributor
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
