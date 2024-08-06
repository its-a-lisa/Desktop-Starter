// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WavyMotionTopsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WavyMotionTopsvgIcon(props: WavyMotionTopsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 500 73.88"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 30.3C48.69 62.5 89.37 70 118.38 70.45 216 72 261.22 26.55 333.32 20.64c51.62-4.22 38.34 50.12 86 53.13C454.52 76 480 43.53 500 18.53V0H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WavyMotionTopsvgIcon;
/* prettier-ignore-end */
