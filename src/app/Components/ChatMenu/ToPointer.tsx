import React from "react";

type _ToPointer = {
  className: string;
};

export default function ToPointer({ className }: _ToPointer) {
  return (
    <svg
      className={className}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_84_50781)">
        <path
          d="M44.8787 44.8787C46.7686 46.7686 45.4301 50 42.7574 50H0V0L25 25L44.8787 44.8787Z"
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
