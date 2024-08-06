// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaSquarePinterestsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaSquarePinterestsvgIcon(props: FaSquarePinterestsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 448 512"}
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
          "M384 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h72.6l-2.2-.8c-5.4-48.1-3.1-57.5 15.7-134.7 3.9-16 8.5-35 13.9-57.9 0 0-7.3-14.8-7.3-36.5 0-70.7 75.5-78 75.5-25 0 13.5-5.4 31.1-11.2 49.8-3.3 10.6-6.6 21.5-9.1 32-5.7 24.5 12.3 44.4 36.4 44.4 43.7 0 77.2-46 77.2-112.4 0-58.8-42.3-99.9-102.6-99.9C153 139 112 191.4 112 245.6c0 21.1 8.2 43.7 18.3 56 2 2.4 2.3 4.5 1.7 7-1.1 4.7-3.1 12.9-4.7 19.2-1 4-1.8 7.3-2.1 8.6-1.1 4.5-3.5 5.5-8.2 3.3-30.6-14.3-49.8-59.1-49.8-95.1C67.2 167.1 123.4 96 229.4 96c85.2 0 151.4 60.7 151.4 141.8 0 84.6-53.3 152.7-127.4 152.7-24.9 0-48.3-12.9-56.3-28.2 0 0-12.3 46.9-15.3 58.4-5 19.3-17.6 42.9-27.4 59.3H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z"
        }
      ></path>
    </svg>
  );
}

export default FaSquarePinterestsvgIcon;
/* prettier-ignore-end */
