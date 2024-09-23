// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WavyMotionBottomSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WavyMotionBottomSvgIcon(props: WavyMotionBottomSvgIconProps) {
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
          "M500 43.58C451.31 11.38 410.63 3.9 381.62 3.43 284 1.84 238.78 47.33 166.68 53.24c-51.62 4.22-38.34-50.12-86-53.13C45.48-2.12 20 30.35 0 55.35v18.53h500z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WavyMotionBottomSvgIcon;
/* prettier-ignore-end */
