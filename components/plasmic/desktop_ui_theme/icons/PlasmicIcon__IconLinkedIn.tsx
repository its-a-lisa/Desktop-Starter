// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLinkedInIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLinkedInIcon(props: IconLinkedInIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.5 3.243a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-15a1.5 1.5 0 00-1.5-1.5h-15zm4.02 4.002c.006.957-.71 1.546-1.559 1.542a1.502 1.502 0 01-1.493-1.54 1.493 1.493 0 011.54-1.505c.88.02 1.518.665 1.513 1.503zm3.76 2.76H9.758v8.56h2.664v-1.34c-.002-1.014-.003-2.03.003-3.043.001-.246.012-.502.075-.737.238-.877 1.027-1.444 1.907-1.304.566.088.94.416 1.097.949.097.333.14.692.145 1.039.012 1.048.01 2.095.008 3.143v1.29h2.671v-1.56c-.001-1.13-.002-2.26.001-3.39a6.039 6.039 0 00-.178-1.507c-.187-.734-.574-1.341-1.203-1.78-.445-.312-.935-.513-1.482-.536a15.191 15.191 0 01-.188-.01c-.28-.014-.564-.03-.831.024-.765.154-1.437.504-1.945 1.121-.06.07-.117.143-.203.25l-.02.024v-1.194zm-6.598 8.562h2.65V10.01h-2.65v8.557z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLinkedInIcon;
/* prettier-ignore-end */
