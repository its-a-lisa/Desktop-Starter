// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeDeleteLeftsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeDeleteLeftsvgIcon(props: PeDeleteLeftsvgIconProps) {
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
          "M17.23 9.78L15.01 12l2.22 2.22c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.22-2.22-2.22 2.22c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06L12.89 12l-2.22-2.22a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.22 2.22 2.22-2.22c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06zM21.32 7v10c0 .96-.78 1.75-1.75 1.75H7.64c-.61 0-1.16-.31-1.48-.82l-3.29-5.27c-.25-.4-.25-.92 0-1.33l3.29-5.26c.32-.51.88-.82 1.48-.82h11.94c.96 0 1.75.79 1.75 1.75h-.01zm-1.5 0c0-.14-.11-.25-.25-.25H7.64c-.09 0-.17.04-.21.12L4.22 12l3.21 5.13c.05.07.13.12.21.12h11.94c.14 0 .25-.11.25-.25V7h-.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeDeleteLeftsvgIcon;
/* prettier-ignore-end */
