// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeCaretDownsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeCaretDownsvgIcon(props: PeCaretDownsvgIconProps) {
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
          "M12 16.75a.74.74 0 01-.6-.3l-6-8a.75.75 0 01.208-1.088A.76.76 0 016 7.25h12a.76.76 0 01.67.41.75.75 0 01-.07.79l-6 8a.74.74 0 01-.6.3zm-4.5-8l4.5 6 4.5-6h-9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeCaretDownsvgIcon;
/* prettier-ignore-end */
