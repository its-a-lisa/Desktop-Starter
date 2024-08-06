// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeFacebooksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeFacebooksvgIcon(props: PeFacebooksvgIconProps) {
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
          "M20 12.05a8 8 0 10-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 013-3.14c.6.008 1.198.062 1.79.16v2h-1a1.16 1.16 0 00-1.3 1.26v1.51h2.22l-.36 2.33h-1.85V20A8 8 0 0020 12.05z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeFacebooksvgIcon;
/* prettier-ignore-end */
