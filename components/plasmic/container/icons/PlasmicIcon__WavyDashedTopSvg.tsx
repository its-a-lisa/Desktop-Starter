// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WavyDashedTopSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WavyDashedTopSvgIcon(props: WavyDashedTopSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 500 74.16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 0h500v27a281.09 281.09 0 01-89 14c-34.3-.27-52.92-7-75-11-85.69-15.67-118.55 27.92-205 27-30.2-.32-75.43-6.17-131-35"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M472.73 39.52a189 189 0 01-107.24 2c-1.76-.49.6 1.41.88 1.63a16.3 16.3 0 005.35 3.06 190.87 190.87 0 00108.64-1.88c.26-.08-3.16-2.77-3.46-3-.95-.59-3-2.19-4.17-1.81zm-153.92-7.75a132.8 132.8 0 00-42.57 1.13c-13.2 2.56-25.93 7-38.6 11.42-.29.1 3.17 2.77 3.46 3 .92.58 3 2.23 4.17 1.82 13.1-4.57 26.28-9.17 40-11.62a132.22 132.22 0 0140.74-.8c.82.11-2.08-2.27-2.23-2.37-1.38-1-3.21-2.31-4.94-2.53zM127.69 61.25c-32 1.29-62.85-7.69-92.79-18-1.75-.6.66 1.47.88 1.64A18.49 18.49 0 0041.13 48c30.22 10.37 61.46 19.48 93.73 18.18.9 0-2.06-2.26-2.22-2.37-1.18-.83-3.39-2.6-4.95-2.54zM51.8 59.34a207.84 207.84 0 0063 14.81c.86.07-2.08-2.26-2.23-2.37-1.31-.92-3.26-2.4-4.94-2.53a200.51 200.51 0 01-60.68-14.1c-1.72-.69-1.2-.19-.51.81 1 1.4 3.85 2.74 5.4 3.38z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M261.34 57.46a102.31 102.31 0 0154.89-8.32c.83.1-2.07-2.27-2.22-2.37-1.37-1-3.22-2.32-4.95-2.53a103.21 103.21 0 00-55.35 8.45c.61-.28 5.49 5.73 7.63 4.77zm113.99.54a143.56 143.56 0 0083.31 2.9c.89-.24-2-2.2-2.23-2.37-.9-.63-3.68-2.87-4.94-2.54a141.93 141.93 0 01-82.36-2.68c-1.76-.6.65 1.46.88 1.64a18.41 18.41 0 005.34 3.05z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WavyDashedTopSvgIcon;
/* prettier-ignore-end */
