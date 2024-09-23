// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeAngleUpSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeAngleUpSvgIcon(props: PeAngleUpSvgIconProps) {
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
          "M15.5 14.5a.74.74 0 01-.53-.22l-3-3-3 3A.75.75 0 018 13.22l3.5-3.5a.75.75 0 011.06 0l3.5 3.5a.75.75 0 01-.56 1.28z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeAngleUpSvgIcon;
/* prettier-ignore-end */
