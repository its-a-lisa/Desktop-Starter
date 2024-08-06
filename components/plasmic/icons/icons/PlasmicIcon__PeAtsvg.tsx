// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeAtsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeAtsvgIcon(props: PeAtsvgIconProps) {
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
          "M12 3.25A8.75 8.75 0 003.25 12 8.65 8.65 0 0012 20.75a.75.75 0 100-1.5A7.171 7.171 0 014.75 12 7.26 7.26 0 0112 4.75c4.81 0 7.25 2.44 7.25 7.25v1.38a1.46 1.46 0 11-2.91 0v-5a.75.75 0 10-1.5 0v.34A4.34 4.34 0 1012 16.34a4.3 4.3 0 003.24-1.49 2.95 2.95 0 005.51-1.47V12c0-5.64-3.11-8.75-8.75-8.75zm0 11.59A2.84 2.84 0 1114.84 12 2.85 2.85 0 0112 14.84z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeAtsvgIcon;
/* prettier-ignore-end */
