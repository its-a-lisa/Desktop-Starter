// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaCodePullRequestSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaCodePullRequestSolidsvgIcon(
  props: FaCodePullRequestSolidsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M305.8 2.1C314.4 5.9 320 14.5 320 24v40h16c70.7 0 128 57.3 128 128v166.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-35.3-28.7-64-64-64h-16v40c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1zM104 80a24 24 0 10-48 0 24 24 0 1048 0zm8 73.3v205.4c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80S0 476.2 0 432c0-32.8 19.7-61 48-73.3V153.3C19.7 141 0 112.8 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80c0 32.8-19.7 61-48 73.3zM104 432a24 24 0 10-48 0 24 24 0 1048 0zm328 24a24 24 0 100-48 24 24 0 100 48z"
        }
      ></path>
    </svg>
  );
}

export default FaCodePullRequestSolidsvgIcon;
/* prettier-ignore-end */
