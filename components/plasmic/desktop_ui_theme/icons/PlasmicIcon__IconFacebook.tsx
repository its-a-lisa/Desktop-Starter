// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFacebookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFacebookIcon(props: IconFacebookIconProps) {
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
        d={
          "M22 12.304c0-5.557-4.477-10.061-10-10.061S2 6.747 2 12.303c0 5.023 3.657 9.185 8.438 9.94v-7.03h-2.54v-2.91h2.54v-2.216c0-2.521 1.492-3.914 3.777-3.914 1.094 0 2.238.196 2.238.196v2.476h-1.26c-1.243 0-1.63.776-1.63 1.572v1.887h2.773l-.443 2.908h-2.33v7.03c4.78-.754 8.437-4.916 8.437-9.938z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconFacebookIcon;
/* prettier-ignore-end */
