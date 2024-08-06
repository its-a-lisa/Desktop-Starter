// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeBoltsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeBoltsvgIcon(props: PeBoltsvgIconProps) {
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
          "M11.09 21.5a.668.668 0 01-.24 0 .83.83 0 01-.59-.81v-.11l.9-6.35H6.82a.8.8 0 01-.71-.43.85.85 0 010-.86l2-3.49 4.1-6.52a.79.79 0 01.92-.35.83.83 0 01.59.81v.11l-.9 6.35h4.35a.8.8 0 01.71.43.85.85 0 010 .86l-2 3.49-4.1 6.52a.79.79 0 01-.69.35zm-3.16-8.81h4a.84.84 0 01.83.85v.11l-.59 4.14 2.5-4 1.44-2.48h-4a.84.84 0 01-.83-.85v-.11l.59-4.14-2.5 4-1.44 2.48z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeBoltsvgIcon;
/* prettier-ignore-end */
