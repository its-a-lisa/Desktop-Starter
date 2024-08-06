// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeCaretUpsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeCaretUpsvgIcon(props: PeCaretUpsvgIconProps) {
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
          "M18 16.75H6a.76.76 0 01-.67-.41.75.75 0 01.07-.79l6-8a.77.77 0 011.2 0l6 8a.75.75 0 01.07.79.759.759 0 01-.67.41zm-10.5-1.5h9l-4.5-6-4.5 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeCaretUpsvgIcon;
/* prettier-ignore-end */
