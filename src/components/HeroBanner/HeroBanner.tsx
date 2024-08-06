"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import styles from "./heroBanner.module.css";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers, getIn } from "formik";
import { EnquiryLead } from "@/api/enquiry";
import Checkbox from "../Fields/CheckBox";
import InputField from "../Fields/InputField";
interface FormValues {
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  emailId: string;
  city: string;
  acceptTerms: boolean;
}
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

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const initialValues: FormValues = {
    fullName: "",
    countryCode: "+91",
    emailId: "",
    phoneNumber: "",
    acceptTerms: true,
    city: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .max(250, "Full Name cannot be longer than 250 characters.")
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "Full Name cannot contain special characters"
      )
      .required("Full Name is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Number must be exactly 10 digits")
      .required("Phone Number is required"),
    emailId: Yup.string()
      .max(250, "Email Address cannot be longer than 250 characters.")
      .email("Invalid email address")
      .required("Email ID is required"),
    whoAmI: Yup.string().required("This field is required"),
    city: Yup.number().required("City is required"),
    // acceptTerms: Yup.boolean().oneOf(
    //   [true],
    //   "You must accept the terms and conditions"
    // ),
  });

  const handleSubmit = async (
    values: FormValues,
    { setFieldTouched, resetForm }: FormikHelpers<FormValues>
  ) => {
    Object.keys(values).forEach((fieldName) => {
      setFieldTouched(fieldName, true);
    });

    try {
      const params = {
        fullName: values.fullName,
        emails: [values.emailId],
        phoneNumbers: {
          code: values.countryCode,
          value: values.phoneNumber.toString(),
        },
        city: values.city,
        dnd: values.acceptTerms,
      };
      const response = await EnquiryLead(params);
      if (response.ResponseStatus === "success") {
        resetForm();
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <section className={`relative bg-white ${styles.heroBannerNewLanding}`}>
      <Slider
        {...settingsHero}
        className="max-w-screen overflow-hidden newHeroBanner"
      >
        <div className="flex hero-section min-h-[340px] md:min-h-[600px] home-hero-bg p-5 lg:py-16 firstHeroBg">
          <div className="container">
            <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2">
              <h4 className="text-[14px] md:text-[30px] text-white font-normal">
                Gear Up Your Business with
              </h4>
              <h3 className="text-[32px] text-white text-center md:text-left md:text-[80px] font-semibold leading-none">
                Long-Lasting Automotive Batteries
              </h3>
            </div>
          </div>
        </div>
        <div className="flex hero-section min-h-[340px] md:min-h-[600px] home-hero-bg p-5 lg:py-16 secondHeroBg">
          <div className="container">
            <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2">
              <h4 className="text-[14px] md:text-[30px] text-white font-normal">
                Gear Up Your Business with
              </h4>
              <h3 className="text-[32px] text-white text-center md:text-left md:text-[80px] font-semibold leading-none">
                Long-Lasting Automotive Batteries
              </h3>
            </div>
          </div>
        </div>
        <div className="flex hero-section min-h-[340px] md:min-h-[600px] home-hero-bg p-5 lg:py-16 thirdHeroBg">
          <div className="container">
            <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2">
              <h4 className="text-[14px] md:text-[30px] text-white font-normal">
                Gear Up Your Business with
              </h4>
              <h3 className="text-[32px] text-white text-center md:text-left md:text-[80px] font-semibold leading-none">
                Long-Lasting Automotive Batteries
              </h3>
            </div>
          </div>
        </div>
      </Slider>

      <div
        className={`mx-auto md:mx-0 bg-white rounded-lg p-5 lg:p-7 lg:absolute w-full lg:w-1/3 mt-6 md:mt-0 lg:right-24 lg:top-1/2 -translate-y-1/2 max-w-[90%] md:max-w-[455px] ${styles.contactForm}`}
      >
        <h3 className="text-themeRed pb-[30px] font-semibold font-poppins text-[20px]">
          Become an Exclusive Distributor
        </h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form className="w-full">
              <div className="flex flex-col">
                <div className="w-full mb-3 md:mb-6">
                  <Field
                    as={InputField}
                    id="grid-first-name"
                    name="fullName"
                    placeholder="Full Name"
                    type="text"
                    // required={true}
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
                    <Field
                      as={InputField}
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
                          setFieldValue("phoneNumber", value);
                        }
                      }}
                      className={`block w-full border border-[#73727366] rounded-lg py-2 px-4 ml-2 focus:outline-none `}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mb-3 md:mb-6">
                <Field
                  as={InputField}
                  id="emailId"
                  name="emailId"
                  type="email"
                  placeholder="Email Address"
                  required={true}
                  className={`block w-full border border-[#73727366] rounded-lg py-2 px-4 focus:outline-none`}
                />
              </div>
              <div className="w-full mb-3 md:mb-6">
                <Field
                  as={InputField}
                  name="city"
                  required={true}
                  className={`w-full flex justify-between px-4 py-2 leading-tight bg-white text-[#404040] font-medium border border-gray-300 rounded-lg cursor-pointer focus:outline-none min-h-[45px] items-center`}
                  placeholder="City"
                />
              </div>
              <div className="w-full mb-3 md:mb-6 flex items-baseline">
                <Field
                  as={Checkbox}
                  id="grid-accept-terms"
                  name="acceptTerms"
                  className={`${
                    getIn(errors, "acceptTerms") &&
                    getIn(touched, "acceptTerms")
                      ? "border-red-500"
                      : ""
                  }`}
                  defaultChecked={true}
                />
                <label
                  htmlFor="grid-accept-terms"
                  className="font-normal text-base text-[#404040] ml-2"
                >
                  I agree to receive promotional calls / SMS / WhatsApp and
                  emails from Elito.
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#D30300] rounded-md w-full justify-center text-base font-semibold flex items-center !py-3 !px-5 text-white"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default HeroBanner;
