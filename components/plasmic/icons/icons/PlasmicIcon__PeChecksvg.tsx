// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeChecksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeChecksvgIcon(props: PeChecksvgIconProps) {
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
          "M9 18.25a.74.74 0 01-.53-.25l-5-5a.75.75 0 111.06-1L9 16.44 19.47 6a.75.75 0 011.06 1l-11 11a.74.74 0 01-.53.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeChecksvgIcon;
/* prettier-ignore-end */
