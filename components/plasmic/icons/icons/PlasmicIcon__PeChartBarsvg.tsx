// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeChartBarsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeChartBarsvgIcon(props: PeChartBarsvgIconProps) {
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
            "M4.5 20.25a.76.76 0 01-.75-.75v-15a.75.75 0 011.5 0v15a.76.76 0 01-.75.75z"
          }
        ></path>

        <path
          d={
            "M19.5 20.25h-15a.75.75 0 110-1.5h15a.75.75 0 110 1.5zM8 16.75a.76.76 0 01-.75-.75v-4a.75.75 0 111.5 0v4a.76.76 0 01-.75.75zm3.5 0a.76.76 0 01-.75-.75V8a.75.75 0 111.5 0v8a.76.76 0 01-.75.75zm3.5 0a.76.76 0 01-.75-.75v-4a.75.75 0 111.5 0v4a.76.76 0 01-.75.75zm3.5 0a.76.76 0 01-.75-.75V8a.75.75 0 111.5 0v8a.76.76 0 01-.75.75z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default PeChartBarsvgIcon;
/* prettier-ignore-end */
