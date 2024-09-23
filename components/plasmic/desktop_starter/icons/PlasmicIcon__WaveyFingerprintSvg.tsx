// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WaveyFingerprintSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WaveyFingerprintSvgIcon(props: WaveyFingerprintSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1000 120"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#000"} d={"M0 0h1000v120H0z"}></path>

      <g fill={"none"} stroke={"#222"} strokeWidth={"7"} strokeOpacity={"1"}>
        <path
          d={
            "M-500 75s125-30 250-30S0 75 0 75s125 30 250 30 250-30 250-30 125-30 250-30 250 30 250 30 125 30 250 30 250-30 250-30"
          }
        ></path>

        <path
          d={
            "M-500 45s125-30 250-30S0 45 0 45s125 30 250 30 250-30 250-30 125-30 250-30 250 30 250 30 125 30 250 30 250-30 250-30m-2000 60s125-30 250-30S0 105 0 105s125 30 250 30 250-30 250-30 125-30 250-30 250 30 250 30 125 30 250 30 250-30 250-30"
          }
        ></path>

        <path
          d={
            "M-500 15s125-30 250-30S0 15 0 15s125 30 250 30 250-30 250-30 125-30 250-30 250 30 250 30 125 30 250 30 250-30 250-30"
          }
        ></path>

        <path
          d={
            "M-500-15s125-30 250-30S0-15 0-15s125 30 250 30 250-30 250-30 125-30 250-30 250 30 250 30 125 30 250 30 250-30 250-30M-500 135s125-30 250-30S0 135 0 135s125 30 250 30 250-30 250-30 125-30 250-30 250 30 250 30 125 30 250 30 250-30 250-30"
          }
        ></path>
      </g>
    </svg>
  );
}

export default WaveyFingerprintSvgIcon;
/* prettier-ignore-end */
