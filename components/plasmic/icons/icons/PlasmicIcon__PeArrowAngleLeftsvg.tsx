// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeArrowAngleLeftsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeArrowAngleLeftsvgIcon(props: PeArrowAngleLeftsvgIconProps) {
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
          "M15.54 17.7a.75.75 0 100-1.5H8.86l8.62-8.62a.75.75 0 10-1.06-1.06L7.8 15.14V8.46a.75.75 0 00-1.5 0V17a.75.75 0 00.337.622.76.76 0 00.413.128l8.49-.05z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeArrowAngleLeftsvgIcon;
/* prettier-ignore-end */
