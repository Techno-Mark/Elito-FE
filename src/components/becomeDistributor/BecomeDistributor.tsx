import { EnquiryLead } from "@/api/enquiry";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import * as Yup from "yup";
import InputField from "../Fields/InputField";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import Checkbox from "../Fields/CheckBox";
import { useRouter } from "next/navigation";

interface FormValues {
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  emailId: string;
  city: string;
  acceptTerms: boolean;
}

const BecomeDistributor = () => {
  const router = useRouter();
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
      .required("Phone Number is required"),
    emailId: Yup.string()
      .max(250, "Email Address cannot be longer than 250 characters.")
      .trim()
      .email("Invalid email address")
      .required("Email ID is required"),
    city: Yup.string().trim().required("City is required"),
    // acceptTerms: Yup.boolean().oneOf(
    //   [true],
    //   "You must accept the terms and conditions"
    // ),
  });

  const getIn = <T extends object>(obj: T, key: string): any =>
    key.split(".").reduce((o, k) => (o || {})[k], obj as any);

  const handleSubmit = (
    values: FormValues,
    { setFieldTouched, resetForm, setSubmitting }: FormikHelpers<FormValues>
  ) => {
    Object.keys(values).forEach((fieldName) => {
      setFieldTouched(fieldName, true);
    });

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

    EnquiryLead(param)
      .then((response) => {
        if (response) {
          resetForm();
          router.push(`/landing-page-new/thankyou`);
        } else {
          console.log("Form submission failed");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
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
          <div className="flex flex-col">
            <div className="w-full mb-3 md:mb-5">
              <Field
                as={InputField}
                id="grid-first-name"
                name="fullName"
                placeholder="Full Name"
                type="text"
                required={true}
                className={`block w-full border border-[#73727366] rounded-lg py-2 px-4 focus:outline-none text-[#404040] ${
                  getIn(errors, "fullName") && getIn(touched, "fullName")
                    ? "border-red-500"
                    : ""
                }`}
              />
              {getIn(errors, "fullName") && getIn(touched, "fullName") && (
                <div className="text-red-500 font-medium text-sm">
                  {getIn(errors, "fullName")}
                </div>
              )}
            </div>
          </div>
          <div className="w-full mb-3 md:mb-5">
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = e.target;
                    if (/^\d{0,10}$/.test(value)) {
                      // Update formik value if it passes validation
                      setFieldValue("phoneNumber", value);
                    }
                  }}
                  className={`block w-full border border-[#73727366] text-[#404040] rounded-lg py-2 px-4 ml-2 focus:outline-none ${
                    getIn(errors, "phoneNumber") &&
                    getIn(touched, "phoneNumber")
                      ? "border-red-500"
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
          <div className="w-full mb-3 md:mb-6">
            <Field
              as={InputField}
              id="emailId"
              name="emailId"
              type="email"
              placeholder="Email Address"
              required={true}
              className={`block w-full border border-[#73727366] rounded-lg py-2 px-4 focus:outline-none text-[#404040] ${
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
          <div className="w-full mb-3 md:mb-6">
            <Field
              as={InputField}
              id="city"
              name="city"
              type="text"
              required={true}
              placeholder="City"
              className={`w-full flex justify-between px-4 py-2 leading-tight bg-white text-[#404040] font-medium border border-gray-300 rounded-lg cursor-pointer focus:outline-none min-h-[45px] items-center ${
                getIn(errors, "city") && getIn(touched, "city")
                  ? "border-red-500"
                  : ""
              }`}
            />
            {getIn(errors, "city") && getIn(touched, "city") && (
              <div className="text-red-500 font-medium text-sm">
                {getIn(errors, "city")}
              </div>
            )}
          </div>
          <div className="w-full mb-3 md:mb-6 flex items-baseline">
            <Field
              as={Checkbox}
              id="grid-accept-terms"
              name="acceptTerms"
              className={`${
                getIn(errors, "acceptTerms") && getIn(touched, "acceptTerms")
                  ? "border-red-500"
                  : ""
              }`}
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
            onClick={(values) => handleSubmit}
            className="bg-[#D30300] rounded-md w-full text-base font-semibold !py-3 !px-5 text-white"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BecomeDistributor;
