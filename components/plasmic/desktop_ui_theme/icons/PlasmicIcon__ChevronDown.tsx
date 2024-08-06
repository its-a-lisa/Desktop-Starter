// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronDownIcon(props: ChevronDownIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.398 15.663a.562.562 0 01-.796 0L5.867 9.928a.562.562 0 010-.795l.266-.266c.22-.22.575-.22.795 0L12 13.94l5.072-5.072c.22-.22.576-.22.795 0l.266.266c.22.22.22.575 0 .795l-5.735 5.735z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronDownIcon;
/* prettier-ignore-end */
