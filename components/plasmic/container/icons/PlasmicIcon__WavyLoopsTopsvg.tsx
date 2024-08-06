// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WavyLoopsTopsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WavyLoopsTopsvgIcon(props: WavyLoopsTopsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 500 57.01"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 0h500v27a281.22 281.22 0 01-89 14c-34.3-.27-52.92-7-75-11-85.69-15.67-118.55 27.92-205 27-30.2-.32-75.43-6.17-131-35"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WavyLoopsTopsvgIcon;
/* prettier-ignore-end */
