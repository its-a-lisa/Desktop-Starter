// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeBarssvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeBarssvgIcon(props: PeBarssvgIconProps) {
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
          "M19 12.75H5a.75.75 0 110-1.5h14a.75.75 0 110 1.5zm0-4.5H5a.75.75 0 010-1.5h14a.75.75 0 110 1.5zm0 9H5a.75.75 0 110-1.5h14a.75.75 0 110 1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeBarssvgIcon;
/* prettier-ignore-end */
