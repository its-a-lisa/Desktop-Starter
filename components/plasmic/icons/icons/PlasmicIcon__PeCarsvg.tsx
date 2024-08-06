// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeCarsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeCarsvgIcon(props: PeCarsvgIconProps) {
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
            "M19.78 9.44l-1.84-5a1.75 1.75 0 00-1.64-1.19H7.7A1.75 1.75 0 006.06 4.4l-1.84 5a1.76 1.76 0 00-1 1.56v4.5A1.73 1.73 0 004 16.94V19a1 1 0 001 1h1a1 1 0 001-1v-1.75h10V19a1 1 0 001 1h1a1 1 0 001-1v-2.06a1.73 1.73 0 00.76-1.44V11a1.76 1.76 0 00-.98-1.56zm-.53 6.06a.25.25 0 01-.25.25H5a.25.25 0 01-.25-.25V11a.25.25 0 01.25-.25h14a.25.25 0 01.25.25v4.5zM7.47 4.91a.25.25 0 01.23-.16h8.6a.25.25 0 01.23.16l1.4 3.84H6.07l1.4-3.84z"
          }
        ></path>

        <path
          d={
            "M8 14.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default PeCarsvgIcon;
/* prettier-ignore-end */
