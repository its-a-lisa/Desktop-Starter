// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeCalendarsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeCalendarsvgIcon(props: PeCalendarsvgIconProps) {
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
          "M17 4.25h-1.25V3a.75.75 0 10-1.5 0v1.25h-4.5V3a.75.75 0 00-1.5 0v1.25H7A2.75 2.75 0 004.25 7v11A2.75 2.75 0 007 20.75h10A2.75 2.75 0 0019.75 18V7A2.75 2.75 0 0017 4.25zM7 5.75h1.25V7a.75.75 0 001.5 0V5.75h4.5V7a.75.75 0 101.5 0V5.75H17A1.25 1.25 0 0118.25 7v2.75H5.75V7A1.25 1.25 0 017 5.75zm10 13.5H7A1.25 1.25 0 015.75 18v-6.75h12.5V18A1.25 1.25 0 0117 19.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeCalendarsvgIcon;
/* prettier-ignore-end */
