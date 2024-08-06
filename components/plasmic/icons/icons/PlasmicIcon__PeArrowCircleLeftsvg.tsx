// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeArrowCircleLeftsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeArrowCircleLeftsvgIcon(props: PeArrowCircleLeftsvgIconProps) {
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
            "M12 21a9 9 0 110-18 9 9 0 010 18zm0-16.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z"
          }
        ></path>

        <path
          d={
            "M12 16.75a.74.74 0 01-.53-.22l-4-4a.75.75 0 010-1.06l4-4a.75.75 0 011.06 1.06L9.06 12l3.47 3.47a.75.75 0 01-.53 1.28z"
          }
        ></path>

        <path d={"M16 12.75H8a.75.75 0 110-1.5h8a.75.75 0 110 1.5z"}></path>
      </g>
    </svg>
  );
}

export default PeArrowCircleLeftsvgIcon;
/* prettier-ignore-end */
