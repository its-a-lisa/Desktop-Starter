// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M7 7.76v8.49h4.08l.6-.91c1.16-1.79 3.25-2.59 4.79-2.59.53 0 .98.09 1.32.25.91.41 1.16 1.18 1.21 1.74.08 1.13-.5 2.29-1.5 2.97-.9.62-3.06 1.29-5.63 1.29-1.75 0-4.26-.31-6.75-1.7.29-2.45.88-6.42 1.88-9.54M7 3C4 7.09 3 18.34 3 18.34 5.9 20.31 9.08 21 11.87 21c2.99 0 5.52-.79 6.77-1.64 3-2.04 3.3-6.65 0-8.18-.64-.29-1.38-.43-2.17-.43-2.3 0-4.97 1.21-6.47 3.5H9V7.09h2L12 4 7 3z"
        }
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
