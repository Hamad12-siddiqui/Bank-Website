import React from "react";

const EyeIcon = ({ visible }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    {visible ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12C3.5 7.75 7.5 4.5 12 4.5c4.5 0 8.5 3.25 9.75 7.5-1.25 4.25-5.25 7.5-9.75 7.5-4.5 0-8.5-3.25-9.75-7.5zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ) : (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3l18 18M9.88 9.88A3 3 0 0112 9c1.66 0 3 1.34 3 3 0 .53-.14 1.03-.38 1.46M6.53 6.53C4.06 8.36 2.25 11.07 2.25 12c1.25 4.25 5.25 7.5 9.75 7.5 1.61 0 3.15-.31 4.53-.88"
        />
      </>
    )}
  </svg>
);

export default EyeIcon;
