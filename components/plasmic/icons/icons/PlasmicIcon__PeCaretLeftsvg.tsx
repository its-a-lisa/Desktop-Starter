// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeCaretLeftsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeCaretLeftsvgIcon(props: PeCaretLeftsvgIconProps) {
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
          "M16 18.75a.74.74 0 01-.45-.15l-8-6a.75.75 0 010-1.2l8-6a.75.75 0 011.088.208.76.76 0 01.112.392v12a.76.76 0 01-.41.67.84.84 0 01-.34.08zM9.25 12l6 4.5v-9l-6 4.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeCaretLeftsvgIcon;
/* prettier-ignore-end */
