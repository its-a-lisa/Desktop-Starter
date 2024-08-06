// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeChartLinesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeChartLinesvgIcon(props: PeChartLinesvgIconProps) {
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
            "M19.5 20.25h-15a.75.75 0 110-1.5h15a.75.75 0 110 1.5zm-5.5-5.5a.741.741 0 01-.53-.22L11 12.06l-2.47 2.47a.75.75 0 01-1.06-1.06l3-3a.75.75 0 011.06 0L14 12.94l3.47-3.47a.75.75 0 011.06 1.06l-4 4a.738.738 0 01-.53.22z"
          }
        ></path>

        <path
          d={
            "M18.5 13.84a.76.76 0 01-.75-.75v-2.84H15a.75.75 0 110-1.5h3.5a.76.76 0 01.75.75v3.59a.76.76 0 01-.75.75z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default PeChartLinesvgIcon;
/* prettier-ignore-end */
