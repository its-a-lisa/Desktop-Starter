// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeArrowCircleDownsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeArrowCircleDownsvgIcon(props: PeArrowCircleDownsvgIconProps) {
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

      <g fill={"currentColor"}>
        <path
          d={
            "M12 19.75a.741.741 0 01-.53-.22l-6-6a.75.75 0 011.06-1.06L12 17.94l5.47-5.47a.75.75 0 011.06 1.06l-6 6a.738.738 0 01-.53.22z"
          }
        ></path>

        <path
          d={
            "M12 19.75a.76.76 0 01-.75-.75V5a.75.75 0 111.5 0v14a.76.76 0 01-.75.75z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default PeArrowCircleDownsvgIcon;
/* prettier-ignore-end */
