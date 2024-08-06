// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeArrowDownCirclesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeArrowDownCirclesvgIcon(props: PeArrowDownCirclesvgIconProps) {
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

      <g fill={"currentColor"}>
        <path
          d={
            "M12 21a9 9 0 110-18 9 9 0 010 18zm0-16.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z"
          }
        ></path>

        <path
          d={
            "M12 16.75a.74.74 0 01-.53-.22l-4-4a.75.75 0 011.06-1.06L12 14.94l3.47-3.47a.75.75 0 011.06 1.06l-4 4a.74.74 0 01-.53.22z"
          }
        ></path>

        <path
          d={
            "M12 16.75a.76.76 0 01-.75-.75V8a.75.75 0 111.5 0v8a.76.76 0 01-.75.75z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default PeArrowDownCirclesvgIcon;
/* prettier-ignore-end */
