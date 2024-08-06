// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeBellsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeBellsvgIcon(props: PeBellsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.53 16.25c-.09 0-2.11-.36-2.11-6.25 0-4.16-2.42-6.75-6.42-6.75S5.58 5.84 5.58 10c0 6-2.09 6.25-2.08 6.25a.75.75 0 100 1.5h4.83a3.74 3.74 0 007.34 0h4.84a.75.75 0 100-1.5h.02zm-8.53 3a2.24 2.24 0 01-2.11-1.5h4.22a2.24 2.24 0 01-2.11 1.5zm-6.24-3c.72-1.09 1.32-3 1.32-6.25S8.88 4.75 12 4.75s4.92 1.91 4.92 5.25.6 5.16 1.32 6.25H5.76z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeBellsvgIcon;
/* prettier-ignore-end */
