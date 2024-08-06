// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaSolidCirclesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaSolidCirclesvgIcon(props: FaSolidCirclesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
        }
      ></path>
    </svg>
  );
}

export default FaSolidCirclesvgIcon;
/* prettier-ignore-end */
