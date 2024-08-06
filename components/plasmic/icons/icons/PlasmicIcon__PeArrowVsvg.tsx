// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeArrowVsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeArrowVsvgIcon(props: PeArrowVsvgIconProps) {
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
          "M12.29 20.69a.78.78 0 00.24-.16l4-4a.75.75 0 00-1.06-1.06l-2.72 2.72V5.81l2.72 2.72a.75.75 0 001.06-1.06l-4-4a.781.781 0 00-.53-.22.78.78 0 00-.53.22l-4 4a.75.75 0 001.06 1.06l2.72-2.72v12.38l-2.72-2.72a.75.75 0 00-1.06 1.06l4 4a.779.779 0 00.53.22c.1 0 .198-.02.29-.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeArrowVsvgIcon;
/* prettier-ignore-end */
