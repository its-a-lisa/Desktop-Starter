// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeCalculatorsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeCalculatorsvgIcon(props: PeCalculatorsvgIconProps) {
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
          "M15.5 8.25h-7c-.28 0-.5-.22-.5-.5v-1.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1.5c0 .28-.22.5-.5.5zm.5 3v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5zm-6 0v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5zm3 0v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5zm3 3.25v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5zm-6 0v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5zm3 0v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5zm3 3.25v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5zm-3 0v-1c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zm6.25 1.75v-15c0-1.24-1.01-2.25-2.25-2.25H7c-1.24 0-2.25 1.01-2.25 2.25v15c0 1.24 1.01 2.25 2.25 2.25h10c1.24 0 2.25-1.01 2.25-2.25zM17 3.75c.41 0 .75.34.75.75v15c0 .41-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75v-15c0-.41.34-.75.75-.75h10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeCalculatorsvgIcon;
/* prettier-ignore-end */
