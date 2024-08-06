// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeChartPiesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeChartPiesvgIcon(props: PeChartPiesvgIconProps) {
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
          "M13.25 4.79V4.5a.76.76 0 00-.75-.75 8.8 8.8 0 00-7.61 13.13.75.75 0 001.02.27L6.2 17a7.74 7.74 0 107.05-12.2v-.01zm-1.5.5v6.78l-5.89 3.38a7.28 7.28 0 015.89-10.16zm.75 13.46a6.27 6.27 0 01-5-2.51l5.37-3.09a.73.73 0 00.38-.65V6.3a6.25 6.25 0 01-.75 12.45z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeChartPiesvgIcon;
/* prettier-ignore-end */
