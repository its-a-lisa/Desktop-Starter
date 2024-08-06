// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 271 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#75tnbkCtcEnDa)"} fill={"#000"}>
        <path
          d={
            "M134.888 9.66l-3.989-3.196a1.58 1.58 0 01-.133-2.357l3.679-3.652a1.56 1.56 0 012.19-.009l3.591 3.483a1.59 1.59 0 01.026 2.24l-3.262 3.358a1.57 1.57 0 01-2.102.134zm18.946-3.589c-.984 0-1.755.447-2.296 1.206-.275.384-.612.455-1.011.196l-2.943-1.92c-.488-.312-.505-.66-.062-1.035l2.349-1.955a.73.73 0 01.754-.134c1.551.58 2.465 1.107 4.193 1.098 33.043-.16 68.578-.215 106.621-.17 1.746.01 3.484-.25 5.231-.768 1.897-.562 3.147.01 3.741 1.715.372 1.071-.434 2.187-1.56 2.16-2.527-.071-4.992-.348-7.527-.357-35.88-.098-71.707-.116-107.49-.036zm-36.669 0c.984 0 1.756.447 2.297 1.206.274.384.611.455 1.01.196l2.944-1.92c.487-.312.505-.66.062-1.035l-2.35-1.955a.728.728 0 00-.753-.134c-1.552.58-2.465 1.107-4.194 1.098-33.043-.16-68.577-.215-106.62-.17A17.972 17.972 0 014.33 2.59C2.433 2.027 1.183 2.6.588 4.304c-.372 1.071.435 2.187 1.56 2.16 2.528-.071 4.992-.348 7.528-.357 35.88-.098 71.707-.116 107.489-.036z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"75tnbkCtcEnDa"}>
          <path
            fill={"#fff"}
            transform={"translate(.5)"}
            d={"M0 0h270v10H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
