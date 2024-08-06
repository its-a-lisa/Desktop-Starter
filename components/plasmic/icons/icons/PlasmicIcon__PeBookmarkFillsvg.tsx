// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeBookmarkFillsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeBookmarkFillsvgIcon(props: PeBookmarkFillsvgIconProps) {
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
          "M15.75 3.25h-7.5A2.75 2.75 0 005.5 6v14a.75.75 0 001.18.62L12 16.91l5.32 3.71a.75.75 0 00.43.13.85.85 0 00.35-.08.77.77 0 00.4-.67V6a2.75 2.75 0 00-2.75-2.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeBookmarkFillsvgIcon;
/* prettier-ignore-end */
