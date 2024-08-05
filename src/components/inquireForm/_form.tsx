import { Field, FieldProps, Form, Formik, FormikHelpers, getIn } from "formik";
import React, { useEffect, useState } from "react";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import * as Yup from "yup";
import { EnquiryLead } from "@/api/enquiry";
import Checkbox from "../Fields/CheckBox";
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="w-full">
          <div
            className={`flex flex-col items-center justify-center md:items-center md:flex-row whitespace-nowrap ${
              varient === "dark" ? "md:flex-col whitespace-normal" : ""
            }`}
          >
            <div className="w-full md:mr-2 mb-2 lg:max-w-[210px]">
              <Field
                id="grid-first-name"
                name="fullName"
                type="text"
                placeholder="Full Name"
                required={true}
                className={`block w-full border border-[#73727366] rounded-lg py-2 px-4 focus:outline-none text-[12px] font-medium ${
                  getIn(errors, "fullName") && getIn(touched, "fullName")
                    ? "border-red-500 mb-0.5"
                    : ""
                }`}
              />
              {getIn(errors, "fullName") && getIn(touched, "fullName") && (
                <div className="text-red-500 font-medium">
                  {getIn(errors, "fullName")}
                </div>
              )}
            </div>
            <div className="w-full md:mr-2 mb-2 lg:max-w-[250px]">
              <div className="flex flex-col">
                <div className="flex">
                  <div className="w-[80px] text-[12px]">
                    <CountryDropdown
                      variant="small"
                      className="!border-[rgba(115,114,115,0.4)] rounded-lg bg-white !py-1 font-medium mb-0.5 h-[36px]"
                    />
                  </div>
                  <input
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
                    className={`block w-full border border-[#73727366] text-[12px] font-medium rounded-lg py-2 px-4 ml-1 focus:outline-none`}
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:mr-2 mb-2 lg:max-w-[210px]">
              <input
                id="emailId"
                name="emailId"
                type="email"
                placeholder="Email Address"
                required={true}
                className={`block w-full border border-[#73727366] rounded-lg text-[12px] font-medium py-2 px-4 focus:outline-none`}
              />
            </div>
            <div className="w-full md:mr-2 mb-2 lg:max-w-[210px]">
              <input
                name="city"
                placeholder="City"
                className={`w-full flex items-center justify-between text-[12px] font-medium border border-[#73727366] rounded-lg py-2 px-4 cursor-pointer focus:outline-none`}
              />
            </div>
            <div className="w-full md:mr-2 mb-2 md:mb-0 lg:max-w-[330px]">
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
                    className={`pl-2 font-medium text-left leading-normal ${
                      varient === "dark" && "text-[rgba(64,64,64,0.8)]"
                    }`}
                  >
                    I agree to receive promotional calls / SMS / WhatsApp and
                    emails from Elito.
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className={`rounded-lg text-[12px] bg-[#D30300] py-3 px-6 font-poppins font-bold`}
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
