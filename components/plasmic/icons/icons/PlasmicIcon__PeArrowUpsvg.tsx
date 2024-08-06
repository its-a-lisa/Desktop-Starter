// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeArrowUpsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeArrowUpsvgIcon(props: PeArrowUpsvgIconProps) {
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
            "M18 11.75a.74.74 0 01-.53-.22L12 6.06l-5.47 5.47a.75.75 0 01-1.06-1.06l6-6a.75.75 0 011.06 0l6 6a.75.75 0 01-.53 1.28z"
          }
        ></path>

        <path
          d={
            "M12 19.75a.76.76 0 01-.75-.75V5a.75.75 0 111.5 0v14a.76.76 0 01-.75.75z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default PeArrowUpsvgIcon;
/* prettier-ignore-end */
