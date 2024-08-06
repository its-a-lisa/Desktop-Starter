// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconXIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconXIcon(props: IconXIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.176 4.243h2.76l-6.03 6.777L21 20.243h-5.554l-4.35-5.594-4.979 5.594H3.355l6.45-7.25L3 4.243h5.695l3.933 5.112 4.548-5.112zm-.969 14.375h1.53L7.864 5.782h-1.64l9.983 12.836z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconXIcon;
/* prettier-ignore-end */
