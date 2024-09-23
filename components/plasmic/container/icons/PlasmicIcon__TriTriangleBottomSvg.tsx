// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TriTriangleBottomSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TriTriangleBottomSvgIcon(props: TriTriangleBottomSvgIconProps) {
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
        d={"M500 69V0L250 31 0 0v69h500z"}
        data-name={"Layer 2"}
      ></path>

      <path
        fill={"currentColor"}
        d={"M500 69v18H0V69l250-38 250 38z"}
        data-name={"Layer 1"}
      ></path>
    </svg>
  );
}

export default TriTriangleBottomSvgIcon;
/* prettier-ignore-end */
