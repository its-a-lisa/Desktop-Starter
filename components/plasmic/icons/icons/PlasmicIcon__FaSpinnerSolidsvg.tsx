// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaSpinnerSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaSpinnerSolidsvgIcon(props: FaSpinnerSolidsvgIconProps) {
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
          "M304 48a48 48 0 10-96 0 48 48 0 1096 0zm0 416a48 48 0 10-96 0 48 48 0 1096 0zM48 304a48 48 0 100-96 48 48 0 100 96zm464-48a48 48 0 10-96 0 48 48 0 1096 0zM142.9 437A48 48 0 1075 369.1a48 48 0 1067.9 67.9zm0-294.2A48 48 0 1075 75a48 48 0 1067.9 67.9zM369.1 437a48 48 0 1067.9-67.9 48 48 0 10-67.9 67.9z"
        }
      ></path>
    </svg>
  );
}

export default FaSpinnerSolidsvgIcon;
/* prettier-ignore-end */
