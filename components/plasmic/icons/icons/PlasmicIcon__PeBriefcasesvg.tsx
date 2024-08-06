// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeBriefcasesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeBriefcasesvgIcon(props: PeBriefcasesvgIconProps) {
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
          "M19 6.25h-3.75V5a1.89 1.89 0 00-2-1.75h-2.5a1.89 1.89 0 00-2 1.75v1.25H5A1.76 1.76 0 003.25 8v10A1.76 1.76 0 005 19.75h14A1.76 1.76 0 0020.75 18V8A1.76 1.76 0 0019 6.25zM10.25 5c0-.08.19-.25.5-.25h2.5c.31 0 .5.17.5.25v1.25h-3.5V5zM5 7.75h14a.25.25 0 01.25.25v3.25H4.75V8A.25.25 0 015 7.75zm3.75 5h6.5v1.5h-6.5v-1.5zM19 18.25H5a.25.25 0 01-.25-.25v-5.25h2.5V15a.76.76 0 00.75.75h8a.76.76 0 00.75-.75v-2.25h2.5V18a.25.25 0 01-.25.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeBriefcasesvgIcon;
/* prettier-ignore-end */
