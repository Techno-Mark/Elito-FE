import Image from "next/image";
import Link from "next/link";

const ThankYou = () => {
  const icon = "/images/thankyou/thankyou.gif";

  return (
    <div className="py-16 text-center bg-white min-h-[calc(100vh-58px)]">
      <div className="container">
        <div className="mb-6 md:mb-8">
          <Image
            className="mx-auto w-[78px] h-[78px] md:w-[133px] md:h-[133px]"
            src={icon}
            alt={"Thank you"}
            width={133}
            height={133}
          />
        </div>
        <h2 className="font-bold text-[#D30300] text-lg md:text-4xl mb-3">
          Thank you for submitting your information.
        </h2>
        <div className="mb-10 text-base font-medium text-[#737273]">
          Our expert will contact you to discuss further soon!
        </div>
        <Link
          className="bg-[#D30300] font-poppins text-[12px] md:text-[16px] text-white font-semibold py-3 px-5 rounded-lg w-full max-w-[156px] md:max-w-[270px] inline-block"
          href="/"
        >
          Visit Our Website
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
