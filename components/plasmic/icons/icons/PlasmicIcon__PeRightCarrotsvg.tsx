// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeRightCarrotsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeRightCarrotsvgIcon(props: PeRightCarrotsvgIconProps) {
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
          "M10.25 16.25a.74.74 0 01-.53-.25.75.75 0 010-1.06l3-3-3-3A.75.75 0 0110.78 8l3.5 3.5a.75.75 0 010 1.06L10.78 16a.74.74 0 01-.53.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeRightCarrotsvgIcon;
/* prettier-ignore-end */
