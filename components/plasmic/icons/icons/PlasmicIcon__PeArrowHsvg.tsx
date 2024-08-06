// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeArrowHsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeArrowHsvgIcon(props: PeArrowHsvgIconProps) {
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
          "M20.69 11.71a.778.778 0 00-.16-.24l-4-4a.75.75 0 10-1.06 1.06l2.72 2.72H5.81l2.72-2.72a.75.75 0 00-1.06-1.06l-4 4a.779.779 0 00-.22.53.781.781 0 00.22.53l4 4a.75.75 0 001.06-1.06l-2.72-2.72h12.38l-2.72 2.72a.75.75 0 001.06 1.06l4-4a.78.78 0 00.22-.53.73.73 0 00-.06-.29z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeArrowHsvgIcon;
/* prettier-ignore-end */
