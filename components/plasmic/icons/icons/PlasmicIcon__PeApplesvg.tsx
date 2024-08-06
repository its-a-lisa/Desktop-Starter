// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeApplesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeApplesvgIcon(props: PeApplesvgIconProps) {
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
          "M16.52 12.46a3.31 3.31 0 011.78-3 3.85 3.85 0 00-3-1.6c-1.27-.1-2.65.74-3.16.74-.51 0-1.77-.7-2.73-.7-2 0-4.11 1.59-4.11 4.76a9 9 0 00.51 2.9c.44 1.28 2.09 4.49 3.81 4.44.9 0 1.54-.64 2.71-.64s1.72.64 2.73.64c1.73 0 3.23-2.95 3.66-4.26a3.54 3.54 0 01-2.2-3.28zm-2-5.87A3.37 3.37 0 0015.35 4a3.79 3.79 0 00-2.42 1.25A3.41 3.41 0 0012 7.81a3 3 0 002.5-1.22h.02z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeApplesvgIcon;
/* prettier-ignore-end */
