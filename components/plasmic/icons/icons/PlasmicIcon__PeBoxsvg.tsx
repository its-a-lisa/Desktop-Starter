// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeBoxsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeBoxsvgIcon(props: PeBoxsvgIconProps) {
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
          "M20.73 16.52V7.59a.73.73 0 00-.08-.33.74.74 0 00-.36-.36l-8-3.58a.75.75 0 00-.62 0l-8 3.58a.8.8 0 00-.44.69v8.82a.83.83 0 00.44.69l8 3.58a.72.72 0 00.62 0l8-3.58a.77.77 0 00.44-.58zm-16-7.78l6.5 2.92v7.18l-6.5-2.91V8.74zm8 2.92l6.5-2.92v7.19l-6.5 2.91v-7.18zM12 4.82l6.17 2.77L12 10.35 5.83 7.59 12 4.82z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeBoxsvgIcon;
/* prettier-ignore-end */
