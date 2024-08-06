// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeAngleDownsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeAngleDownsvgIcon(props: PeAngleDownsvgIconProps) {
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
          "M12 14.5a.74.74 0 01-.53-.22L8 10.78a.75.75 0 011-1.06l3 3 3-3a.75.75 0 011 1.06l-3.5 3.5a.74.74 0 01-.5.22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeAngleDownsvgIcon;
/* prettier-ignore-end */
