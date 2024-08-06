// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaRegisteredSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaRegisteredSolidsvgIcon(props: FaRegisteredSolidsvgIconProps) {
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
          "M256 512a256 256 0 100-512 256 256 0 100 512zm-96-360c0-13.3 10.7-24 24-24h88c44.2 0 80 35.8 80 80 0 28-14.4 52.7-36.3 67l34.1 75.1c5.5 12.1.1 26.3-11.9 31.8s-26.3.1-31.8-11.9l-37.2-82H208v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152zm48 88h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64v64z"
        }
      ></path>
    </svg>
  );
}

export default FaRegisteredSolidsvgIcon;
/* prettier-ignore-end */
