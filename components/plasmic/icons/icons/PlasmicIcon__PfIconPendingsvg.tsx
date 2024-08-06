// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconPendingsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconPendingsvgIcon(props: PfIconPendingsvgIconProps) {
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
          "M512 1097.143c-70.656 0-136.997-13.385-199.022-40.009s-116.151-63.342-162.523-110.007-83.017-101.01-110.007-162.962S-.073 655.799-.073 585.143c0-70.656 13.531-136.997 40.521-199.022s63.634-116.151 110.007-162.523 100.498-83.017 162.523-110.007S441.344 73.07 512 73.07c70.656 0 136.997 13.531 199.022 40.521s116.151 63.707 162.523 110.007c46.299 46.299 83.017 100.498 110.007 162.523s40.521 128.366 40.521 199.022c0 70.656-13.531 136.997-40.521 199.022s-63.707 116.37-110.007 162.962c-46.299 46.665-100.498 83.31-162.523 110.007S582.656 1097.143 512 1097.143zM361.545 227.621c-46.958 20.334-88.137 48.128-123.465 83.529s-63.195 76.507-83.529 123.465c-20.334 46.958-30.501 97.134-30.501 150.455s10.167 103.643 30.501 150.967c20.334 47.323 48.128 88.503 83.529 123.465s76.507 62.683 123.465 83.017C408.503 962.853 458.679 973.02 512 973.02s103.497-10.167 150.455-30.501c46.958-20.334 88.137-47.982 123.465-83.017s63.122-76.142 83.529-123.465c20.334-47.323 30.501-97.646 30.501-150.967s-10.167-103.497-30.501-150.455c-20.334-46.958-48.128-88.137-83.529-123.465s-76.507-63.122-123.465-83.529C615.497 207.287 565.321 197.12 512 197.12s-103.497 10.167-150.455 30.501zm-32.548 133.412s-8.338 94.135 73.143 130.633c26.112 11.703 70.875 33.573 72.411 71.68l.731 1.536c2.267 36.571-19.017 60.928-74.606 80.311-75.557 26.331-71.753 160.037-71.753 160.037-.073.512-.146 1.024-.146 1.536v62.098c0 2.487.805 4.535 2.341 6.071s3.584 2.341 6.071 2.341h349.038c2.487 0 4.535-.805 6.071-2.341s2.341-3.657 2.341-6.071v-62.098c0-.512-.073-1.024-.146-1.536 0 0 4.096-134.51-73.143-162.597-58.661-21.358-75.41-48.786-74.313-77.751 3.438-30.427 49.225-60.123 74.313-75.118 79.653-47.616 74.167-119.735 73.289-127.927v-60.489c0-2.487-.805-4.535-2.341-6.071s-3.584-2.341-6.071-2.341H337.262c-2.487 0-4.535.805-6.071 2.341s-2.341 3.584-2.341 6.071v56.174c0 .878.073 2.121.293 3.511h-.146zm198.875 389.779c111.397-.512 93.696 54.491 93.696 54.491H402.139c0-55.223 87.625-53.687 87.625-53.687l38.107-.731z"
        }
      ></path>
    </svg>
  );
}

export default PfIconPendingsvgIcon;
/* prettier-ignore-end */
