// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeBooksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeBooksvgIcon(props: PeBooksvgIconProps) {
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

      <g fill={"currentColor"}>
        <path
          d={
            "M19 3.25H6.75a2.43 2.43 0 00-2.5 2.35V18a2.85 2.85 0 002.94 2.75H19a.76.76 0 00.75-.75V4a.76.76 0 00-.75-.75zm-.75 16H7.19A1.35 1.35 0 015.75 18a1.35 1.35 0 011.44-1.25h11.06v2.5zm0-4H7.19a3 3 0 00-1.44.37V5.6a.94.94 0 011-.85h11.5v10.5z"
          }
        ></path>

        <path
          d={
            "M8.75 8.75h6.5a.75.75 0 100-1.5h-6.5a.75.75 0 000 1.5zm0 3.5h6.5a.75.75 0 100-1.5h-6.5a.75.75 0 100 1.5z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default PeBooksvgIcon;
/* prettier-ignore-end */
