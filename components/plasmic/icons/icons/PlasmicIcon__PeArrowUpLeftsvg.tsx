// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeArrowUpLeftsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeArrowUpLeftsvgIcon(props: PeArrowUpLeftsvgIconProps) {
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
          "M6.3 15.54a.75.75 0 101.5 0V8.86l8.62 8.62a.75.75 0 101.06-1.06L8.86 7.8h6.68a.75.75 0 100-1.5H7.05a.75.75 0 00-.622.337.76.76 0 00-.128.413v8.49z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeArrowUpLeftsvgIcon;
/* prettier-ignore-end */
