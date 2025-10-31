/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon6 = ({
  color = "url(#paint0_linear_2001_9428)",
  className,
}) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill={color}
        height="24"
        rx="12"
        transform="rotate(-180 24 24)"
        width="24"
        x="24"
        y="24"
      />

      <path
        d="M5 12C5 12.43 5.34855 12.7785 5.77851 12.7785L16.0896 12.7785L12.5902 16.3618C12.2984 16.6606 12.2984 17.1377 12.5902 17.4366C12.8919 17.7456 13.3889 17.7456 13.6907 17.4366L18.3177 12.6987C18.6971 12.3102 18.6971 11.6898 18.3177 11.3013L13.6907 6.56344C13.3889 6.25444 12.8919 6.25444 12.5902 6.56344C12.2984 6.86226 12.2984 7.33937 12.5902 7.63819L16.0896 11.2215L5.77851 11.2215C5.34855 11.2215 5 11.57 5 12Z"
        fill="white"
      />

      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_2001_9423"
          x1="28.0935"
          x2="44.1028"
          y1="25.3178"
          y2="43.7383"
        >
          <stop stopColor="#EC3A4B" />

          <stop offset="1" stopColor="#F36F30" />
        </linearGradient>
      </defs>
    </svg>
  );
};

Icon6.propTypes = {
  color: PropTypes.string,
};
