// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeCartPlussvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeCartPlussvgIcon(props: PeCartPlussvgIconProps) {
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
          "M10.39 11.5c0-.41.34-.75.75-.75h1.25V9.5c0-.41.34-.75.75-.75s.75.34.75.75v1.25h1.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.25h-1.25c-.41 0-.75-.34-.75-.75zm.86 7.25c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm6.5 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm2.98-11.07l-2 8a.75.75 0 01-.73.57H8c-.36 0-.67-.26-.74-.62L5.37 5.25H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.36 0 .67.26.74.62l.43 2.38H20a.754.754 0 01.73.93zm-1.69.57H7.44l1.18 6.5h8.79l1.62-6.5h.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeCartPlussvgIcon;
/* prettier-ignore-end */
