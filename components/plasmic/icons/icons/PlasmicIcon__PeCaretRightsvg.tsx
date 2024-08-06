// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeCaretRightsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeCaretRightsvgIcon(props: PeCaretRightsvgIconProps) {
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
          "M8 18.75a.76.76 0 01-.75-.75V6a.75.75 0 01.42-.67.74.74 0 01.78.07l8 6a.751.751 0 010 1.2l-8 6a.74.74 0 01-.45.15zM8.75 7.5v9l6-4.5-6-4.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeCaretRightsvgIcon;
/* prettier-ignore-end */
