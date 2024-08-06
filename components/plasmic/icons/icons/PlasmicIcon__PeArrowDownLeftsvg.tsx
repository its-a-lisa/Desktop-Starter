// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeArrowDownLeftsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeArrowDownLeftsvgIcon(props: PeArrowDownLeftsvgIconProps) {
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
          "M17.7 8.46a.75.75 0 10-1.5 0v6.68L7.58 6.52a.75.75 0 00-1.06 1.06l8.62 8.62H8.46a.75.75 0 100 1.5H17c.1 0 .198-.02.29-.06a.76.76 0 00.41-.64V8.46z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeArrowDownLeftsvgIcon;
/* prettier-ignore-end */
