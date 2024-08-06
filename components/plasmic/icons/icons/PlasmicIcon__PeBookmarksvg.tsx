// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeBookmarksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeBookmarksvgIcon(props: PeBookmarksvgIconProps) {
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
          "M17.75 20.75a.83.83 0 01-.43-.13L12 16.91l-5.32 3.71a.75.75 0 01-.78 0 .74.74 0 01-.4-.62V6a2.75 2.75 0 012.75-2.75h7.5A2.75 2.75 0 0118.5 6v14a.74.74 0 01-.4.66.73.73 0 01-.35.09zM12 15.25a.75.75 0 01.43.13L17 18.56V6a1.25 1.25 0 00-1.25-1.25h-7.5A1.25 1.25 0 007 6v12.56l4.57-3.18a.75.75 0 01.43-.13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeBookmarksvgIcon;
/* prettier-ignore-end */
