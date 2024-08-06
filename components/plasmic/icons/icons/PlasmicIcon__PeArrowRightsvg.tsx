// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeArrowRightsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeArrowRightsvgIcon(props: PeArrowRightsvgIconProps) {
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
            "M13 18.75a.74.74 0 01-.53-.22.75.75 0 010-1.06L17.94 12l-5.47-5.47a.75.75 0 011.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.74.74 0 01-.53.22z"
          }
        ></path>

        <path d={"M19 12.75H5a.75.75 0 110-1.5h14a.75.75 0 110 1.5z"}></path>
      </g>
    </svg>
  );
}

export default PeArrowRightsvgIcon;
/* prettier-ignore-end */
