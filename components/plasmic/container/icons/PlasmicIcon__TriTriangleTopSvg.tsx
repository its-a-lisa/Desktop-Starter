// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TriTriangleTopSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TriTriangleTopSvgIcon(props: TriTriangleTopSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 500 87"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".5"}
        fill={"currentColor"}
        d={"M0 18v69l250-31 250 31V18H0z"}
        data-name={"Layer 2"}
      ></path>

      <path
        fill={"currentColor"}
        d={"M0 18V0h500v18L250 56 0 18z"}
        data-name={"Layer 1"}
      ></path>
    </svg>
  );
}

export default TriTriangleTopSvgIcon;
/* prettier-ignore-end */
