// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeCalendarMinussvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeCalendarMinussvgIcon(props: PeCalendarMinussvgIconProps) {
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

      <g fill={"currentColor"}>
        <path
          d={
            "M17 4.75h-1.25V3.5a.75.75 0 10-1.5 0v1.25h-4.5V3.5a.75.75 0 00-1.5 0v1.25H7A2.75 2.75 0 004.25 7.5v11A2.75 2.75 0 007 21.25h10a2.75 2.75 0 002.75-2.75v-11A2.75 2.75 0 0017 4.75zM7 6.25h1.25V7.5a.75.75 0 001.5 0V6.25h4.5V7.5a.75.75 0 101.5 0V6.25H17a1.25 1.25 0 011.25 1.25v2.75H5.75V7.5A1.25 1.25 0 017 6.25zm10 13.5H7a1.25 1.25 0 01-1.25-1.25v-6.75h12.5v6.75A1.25 1.25 0 0117 19.75z"
          }
        ></path>

        <path d={"M14 15.3h-4a.75.75 0 100 1.5h4a.75.75 0 100-1.5z"}></path>
      </g>
    </svg>
  );
}

export default PeCalendarMinussvgIcon;
/* prettier-ignore-end */
