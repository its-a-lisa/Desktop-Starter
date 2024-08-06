// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconEnhancementsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconEnhancementsvgIcon(props: PfIconEnhancementsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 64 1024 1024"}
      aria-hidden={"true"}
      role={"img"}
      style={{
        verticalAlign: '-.125em"',

        ...(style || {}),
      }}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1001.6 706.057L894.857 585.143 1001.6 464.229c4.343-5.486 7.543-11.657 9.371-18.514 7.086-26.286-8.686-53.486-34.971-60.571l-150.629-30.171 23.771-157.486c.457-7.086-.686-13.943-3.2-20.571-9.829-25.371-38.4-38.171-64-28.343l-159.543 86.171-68.8-138.971c-3.886-5.943-8.686-10.971-14.629-14.629-22.857-14.857-53.486-8.229-68.343 14.629l-71.314 139.2-157.257-86.171c-6.4-2.514-13.486-3.657-20.343-3.2-27.429 1.371-48.229 24.686-46.857 51.886l23.771 157.486-150.629 30.4c-6.857 1.829-13.029 5.029-18.514 9.371-21.257 17.143-24.457 48.229-7.314 69.486l106.971 120.914L22.398 706.059c-4.343 5.486-7.543 11.657-9.371 18.514-7.086 26.286 8.686 53.486 35.2 60.343l155.2 25.6-28.343 162.057c-.457 7.086.686 13.943 3.2 20.571 9.829 25.371 38.4 38.171 64 28.343l157.257-86.171 71.314 139.2c3.886 5.943 8.686 10.971 14.629 14.629 22.857 14.857 53.486 8.229 68.343-14.629l71.314-139.2 157.257 86.171a48.074 48.074 0 0020.571 3.2c27.2-1.371 48.229-24.686 46.629-52.114l-28.343-162.057 155.2-25.6c6.857-1.829 13.029-5.029 18.514-9.371 20.8-17.143 24-48.229 6.629-69.486zm-270.629-66.285c0 2.286-.229 4.8-.914 7.086-.914 2.286-2.286 4.343-4.114 5.943-1.371 2.057-3.2 3.429-5.486 4.114-2.514.686-5.029.914-7.543.914h-128v128c0 2.514-.229 5.029-.914 7.543-.686 2.286-2.057 4.114-4.114 5.486-1.829 1.829-3.657 3.429-5.943 4.571s-4.571 1.6-7.086 1.6H456.914c-2.514 0-4.8-.457-7.086-1.6s-4.343-2.743-5.943-4.571c-2.057-1.371-3.429-3.2-4.114-5.486-.686-2.514-.914-5.029-.914-7.543v-128h-128c-2.514 0-5.029-.229-7.543-.914-2.286-.686-4.114-2.057-5.486-4.114-1.829-1.6-3.2-3.657-4.114-5.943-.686-2.286-1.143-4.571-.914-7.086V530.743c0-2.514.229-5.029.914-7.543s2.057-4.8 4.114-6.4c1.6-1.6 3.429-2.743 5.486-3.429 2.286-.914 5.029-1.6 7.543-1.6h128v-128c0-2.514.229-5.029.914-7.543.686-2.286 2.057-4.114 4.114-5.486 1.6-1.829 3.657-3.2 5.943-4.114 2.286-.686 4.571-1.143 7.086-.914h109.943c2.286 0 4.8.229 7.086.914 2.286.914 4.343 2.286 5.943 4.114 2.057 1.371 3.429 3.2 4.114 5.486.686 2.514.914 5.029.914 7.543v128h128c2.514 0 5.029.457 7.543 1.6 2.057.686 3.886 2.057 5.714 3.429 1.829 1.829 3.2 4.114 4.114 6.4.686 2.514.914 5.029.914 7.543v109.029h-.229z"
        }
      ></path>
    </svg>
  );
}

export default PfIconEnhancementsvgIcon;
/* prettier-ignore-end */
