import React from "react";

type _FromPointer = {
    className: string
}

export default function FromPointer({ className } : _FromPointer) {
  return (
    <svg
      className={className}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_84_50781)">
        <path
          d="M5.12132 5.12132C3.23143 3.23143 4.56993 0 7.24264 0H50V50L25 25L5.12132 5.12132Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_84_50781">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
