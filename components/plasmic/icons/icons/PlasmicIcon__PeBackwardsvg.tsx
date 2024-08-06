// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeBackwardsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeBackwardsvgIcon(props: PeBackwardsvgIconProps) {
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
          "M20.3 4.31a.756.756 0 00-.81.14l-7.27 6.82V5c0-.3-.18-.57-.45-.69a.756.756 0 00-.81.14l-7.47 7c-.15.14-.24.34-.24.55 0 .21.09.41.24.55l7.47 7a.763.763 0 00.81.14c.27-.12.45-.39.45-.69v-6.27l7.27 6.82a.763.763 0 00.81.14c.27-.12.45-.39.45-.69V5c0-.3-.18-.57-.45-.69zm-9.58 12.96L5.1 12l5.62-5.27v10.54zm8.53 0L13.63 12l5.62-5.27v10.54z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeBackwardsvgIcon;
/* prettier-ignore-end */
