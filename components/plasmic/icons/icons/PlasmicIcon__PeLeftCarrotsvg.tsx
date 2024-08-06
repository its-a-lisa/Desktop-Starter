// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeLeftCarrotsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeLeftCarrotsvgIcon(props: PeLeftCarrotsvgIconProps) {
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
          "M13.75 16.25a.74.74 0 01-.53-.22l-3.5-3.5a.75.75 0 010-1.06L13.22 8a.75.75 0 011.06 1l-3 3 3 3a.75.75 0 010 1.06.74.74 0 01-.53.19z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeLeftCarrotsvgIcon;
/* prettier-ignore-end */
