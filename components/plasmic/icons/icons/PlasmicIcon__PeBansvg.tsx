// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeBansvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeBansvgIcon(props: PeBansvgIconProps) {
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
          "M12 3a9 9 0 100 18 9 9 0 000-18zm-7.5 9a7.44 7.44 0 011.7-4.74L16.74 17.8A7.49 7.49 0 014.5 12zm13.3 4.74L7.26 6.2A7.49 7.49 0 0117.8 16.74z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeBansvgIcon;
/* prettier-ignore-end */
