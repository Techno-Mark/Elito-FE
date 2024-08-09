import { Field, FieldProps, Form, Formik, FormikHelpers, getIn } from "formik";
import React, { useEffect, useState } from "react";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import * as Yup from "yup";
import { EnquiryLead } from "@/api/enquiry";
import Checkbox from "../Fields/CheckBox";
import InputField from "../Fields/InputField";
// import Button from "../button/button";
// import CountryDropdown from "../countryDropdown/countryDropdown";
// import Checkbox from "../Fields/CheckBox";
// import InputField from "../Fields/InputField";
// import Select from "../select/Select";

interface FormValues {
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  emailId: string;
  city: string;
  acceptTerms: boolean;
}
interface EnquireProps {
  varient?: "white" | "dark";
}

const InqForm: React.FC<EnquireProps> = ({ varient = "white" }) => {
  // const [citiesOption, setCitiesOption] = useState([]);
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
      .trim()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "Full Name cannot contain special characters"
      )
      .required("Full Name is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Number must be exactly 10 digits")
      .required("Mobile Number is required"),
    emailId: Yup.string()
      .max(250, "Email Address cannot be longer than 250 characters.")
      .email("Invalid email address")
      .trim()
      .required("Email ID is required"),
    city: Yup.string()
      .trim()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "Full Name cannot contain special characters"
      )
      .required("City is required"),
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
      const param = {
        lastName: values.fullName,
        phoneNumbers: [
          {
            type: "MOBILE",
            code: "IN",
            value: values.phoneNumber.toString(),
            dialCode: values.countryCode || "+91",
            primary: true,
          },
        ],
        salutation: null,
        emails: [
          {
            type: "OFFICE",
            value: values.emailId,
            primary: true,
          },
        ],
        city: values.city,
        dnd: values.acceptTerms,
      };
      const response = await EnquiryLead(param);
      if (response) {
        resetForm();
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="w-full">
          <div
            className={`flex flex-col items-start justify-center md:flex-row whitespace-nowrap ${
              varient === "dark" ? "md:flex-col whitespace-normal" : ""
            }`}
          >
            <div className="w-full md:mr-2 mb-2 lg:max-w-[165px]">
              <Field
                as={InputField}
                id="grid-first-name"
                name="fullName"
                type="text"
                placeholder="Full Name"
                required={true}
                className={`block w-full border border-[#73727366] rounded-lg py-2 px-4 focus:outline-none text-xs text-[#404040] font-medium ${
                  getIn(errors, "fullName") && getIn(touched, "fullName")
                    ? "border-red-500 mb-0.5"
                    : ""
                }`}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  let { value } = e.target;

                  // Remove any leading spaces
                  if (value.startsWith(" ")) {
                    value = value.trimStart();
                  }

                  // Replace multiple consecutive spaces with a single space
                  value = value.replace(/(\s\s+)/g, " ");

                  // Update the field value
                  setFieldValue("fullName", value);
                }}
              />
              {getIn(errors, "fullName") && getIn(touched, "fullName") && (
                <div className="text-red-500 font-medium text-sm">
                  {getIn(errors, "fullName")}
                </div>
              )}
            </div>
            <div className="w-full md:mr-2 mb-2 lg:max-w-[270px]">
              <div className="flex flex-col">
                <div className="flex">
                  <div className="w-[80px] text-[12px]">
                    <CountryDropdown
                      variant="small"
                      className="!border-[rgba(115,114,115,0.4)] rounded-lg bg-white !py-1 font-medium mb-0.5 h-[36px]"
                    />
                  </div>
                  <Field
                    as={InputField}
                    id="grid-phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                    required={true}
                    maxLength={10}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const { value } = e.target;
                      if (/^\d{0,10}$/.test(value)) {
                        setFieldValue("phoneNumber", value);
                      }
                    }}
                    className={`block w-full  border border-[#73727366] text-xs text-[#404040] font-medium rounded-lg py-2 px-4 ml-1 focus:outline-none ${
                      getIn(errors, "phoneNumber") &&
                      getIn(touched, "phoneNumber")
                        ? "border-red-500 mb-0.5"
                        : ""
                    }`}
                  />
                </div>
                {getIn(errors, "phoneNumber") &&
                  getIn(touched, "phoneNumber") && (
                    <div className="text-red-500 font-medium text-sm">
                      {getIn(errors, "phoneNumber")}
                    </div>
                  )}
              </div>
            </div>
            <div className="w-full md:mr-2 mb-2 lg:max-w-[165px]">
              <Field
                as={InputField}
                id="emailId"
                name="emailId"
                type="email"
                placeholder="Email Address"
                required={true}
                className={`block w-full border border-[#73727366] rounded-lg text-xs text-[#404040] font-medium py-2 px-4 focus:outline-none ${
                  getIn(errors, "emailId") && getIn(touched, "emailId")
                    ? "border-red-500"
                    : ""
                }`}
              />
              {getIn(errors, "emailId") && getIn(touched, "emailId") && (
                <div className="text-red-500 font-medium text-sm">
                  {getIn(errors, "emailId")}
                </div>
              )}
            </div>
            <div className="w-full md:mr-2 mb-2 lg:max-w-[165px]">
              <Field
                as={InputField}
                id="city"
                name="city"
                placeholder="City"
                required={true}
                className={`w-full flex items-center justify-between text-xs text-[#404040] font-medium border border-[#73727366] rounded-lg py-2 px-4 cursor-pointer focus:outline-none${
                  getIn(errors, "city") && getIn(touched, "city")
                    ? "border-red-500"
                    : ""
                }`}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  let { value } = e.target;
                  if (value.startsWith(" ")) {
                    value = value.trimStart();
                  }
                  value = value.replace(/(\s\s+)/g, " ");
                  setFieldValue("city", value);
                }}
              />
              {getIn(errors, "city") && getIn(touched, "city") && (
                <div className="text-red-500 font-medium text-sm">
                  {getIn(errors, "city")}
                </div>
              )}
            </div>
            <div className="w-full md:mr-2 mb-2 md:mb-0">
              <div className="text-left whitespace-normal">
                <div className="flex items-base justify-center">
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
                    htmlFor="acceptTerms"
                    className={`pl-2 font-normal text-left leading-normal md:text-[11px] ${
                      varient === "dark"
                        ? "text-[rgba(64,64,64,0.8)]"
                        : "text-white"
                    }`}
                  >
                    I agree to receive promotional calls / SMS / WhatsApp and
                    emails from Elito.
                  </label>
                </div>
              </div>
            </div>

            <button
              // type="submit"
              className={`rounded-lg text-[12px] bg-[#D30300] py-3 px-4 font-poppins font-bold text-white w-full max-w-[160px]`}
            >
              Submit
            </button>
          </div>
          {showSuccessMessage && (
            <div className="text-green-500 text-center mt-4">
              Your inquiry has been submitted successfully!
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default InqForm;
