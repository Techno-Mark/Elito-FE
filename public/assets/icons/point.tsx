import React from "react";

const Point: React.FC<iconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_80_1079)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.3947 0L20.0974 3.54821L10.337 14.3413L15.244 13.6744L5.56668 23.0309L9.43065 22.4558L0 33.3947L21.0118 17.7059L15.48 18.7618L27.82 8.35746L22.197 9.01634L33.3947 0Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_80_1079">
          <rect width="33.3947" height="33.3947" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Point;
