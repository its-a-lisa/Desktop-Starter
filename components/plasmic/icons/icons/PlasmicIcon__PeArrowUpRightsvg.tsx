// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeArrowUpRightsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeArrowUpRightsvgIcon(props: PeArrowUpRightsvgIconProps) {
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
          "M8.46 6.3a.75.75 0 000 1.5h6.68l-8.62 8.62a.75.75 0 101.06 1.06l8.62-8.62v6.68a.75.75 0 101.5 0V7.05a.749.749 0 00-.316-.61A.76.76 0 0017 6.3H8.46z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeArrowUpRightsvgIcon;
/* prettier-ignore-end */
