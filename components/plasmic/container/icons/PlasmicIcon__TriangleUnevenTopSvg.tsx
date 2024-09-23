// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TriangleUnevenTopSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TriangleUnevenTopSvgIcon(props: TriangleUnevenTopSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 500 55.25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={"M500 55.24L375.51 19.02 0 55.24V0h500v55.24z"}
        data-name={"Layer 3"}
      ></path>
    </svg>
  );
}

export default TriangleUnevenTopSvgIcon;
/* prettier-ignore-end */
