// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeArrowsAltsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeArrowsAltsvgIcon(props: PeArrowsAltsvgIconProps) {
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
          "M20.69 12.29c-.04.09-.09.17-.16.24l-2.5 2.5c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l1.22-1.22h-5.44v5.44l1.22-1.22c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.5 2.5a.776.776 0 01-.53.22.776.776 0 01-.53-.22l-2.5-2.5a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.22 1.22v-5.44H5.81l1.22 1.22c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.5-2.5a.776.776 0 01-.16-.24.707.707 0 010-.57c.04-.09.09-.17.16-.24l2.5-2.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.22 1.22h5.44V5.81l-1.22 1.22c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2.5-2.5c.07-.07.15-.12.24-.16.18-.08.39-.08.57 0 .09.04.17.09.24.16l2.5 2.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.22-1.22v5.44h5.44l-1.22-1.22a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.5 2.5c.07.07.12.15.16.24.08.18.08.39 0 .57l.01.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeArrowsAltsvgIcon;
/* prettier-ignore-end */
