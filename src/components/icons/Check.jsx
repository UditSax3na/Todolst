import * as React from "react";

const Check = ({
 size = 15,
 strokeWidth = 2,
 color = "currentColor",
 ...props
}) => (
 <svg
  width={size}
  height={size}
  fill="none"
  stroke={color}
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={strokeWidth}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
 >
  <path d="m21.5 5.5-13.063 13L2.5 12.59" />
 </svg>
);

export default Check;
