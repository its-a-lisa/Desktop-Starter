// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TriangleUnevenBottomsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TriangleUnevenBottomsvgIcon(
  props: TriangleUnevenBottomsvgIconProps
) {
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
        d={"M0 0l124.49 36.23L500 0v55.24H0V0z"}
        data-name={"Layer 3"}
      ></path>
    </svg>
  );
}

export default TriangleUnevenBottomsvgIcon;
/* prettier-ignore-end */
