"use client";
import React, { useState } from "react";
import styles from "./accordion.module.css";
import { PiCaretDownBold } from "react-icons/pi";
interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-b-[0.5px] border-[#C8C9CB]">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium focus:outline-none"
        onClick={toggleAccordion}
      >
        <span
          className={`font-poppins text-xl text-bold leading-normal ${
            isOpen ? "text-[#D30300]" : "text-[#333333]"
          } ${styles.accordianTitle}`}
        >
          {title}
        </span>
        <PiCaretDownBold
          color="#404040"
          className={`text-lg transition-all ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
