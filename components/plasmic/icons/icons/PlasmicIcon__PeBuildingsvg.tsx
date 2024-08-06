// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeBuildingsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeBuildingsvgIcon(props: PeBuildingsvgIconProps) {
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
            "M10.5 6h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm4 0h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-4 3.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm4 0h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-4 3.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm4 0h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z"
          }
        ></path>

        <path
          d={
            "M18.25 19.25h-.5V4a.76.76 0 00-.75-.75H7a.76.76 0 00-.75.75v15.25h-.5a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5zm-2 0H11V17a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v2.25H7.75V4.75h8.5v14.5z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default PeBuildingsvgIcon;
/* prettier-ignore-end */
