// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeArrowLeftArrowRightsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeArrowLeftArrowRightsvgIcon(
  props: PeArrowLeftArrowRightsvgIconProps
) {
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
          "M19.75 16c0 .41-.34.75-.75.75H6.81l1.22 1.22c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.5-2.5a.776.776 0 01-.16-.24.707.707 0 010-.57c.04-.09.09-.17.16-.24l2.5-2.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.22 1.22H19c.41 0 .75.34.75.75V16zM5 8.75h12.19l-1.22 1.22c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.5-2.5c.07-.07.12-.15.16-.24.08-.18.08-.39 0-.57a.776.776 0 00-.16-.24l-2.5-2.5a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.22 1.22H5c-.41 0-.75.34-.75.75s.34.75.75.75v-.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeArrowLeftArrowRightsvgIcon;
/* prettier-ignore-end */
