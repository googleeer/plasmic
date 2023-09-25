// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShoppingCart02SvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ShoppingCart02SvgrepoComsvgIcon(
  props: ShoppingCart02SvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3 3h.268c.474 0 .711 0 .905.085.17.076.316.197.42.351.12.174.163.407.248.871L7 16h10.422c.453 0 .68 0 .868-.08a.998.998 0 00.415-.331c.12-.165.171-.385.273-.826v-.003l1.57-6.8v-.001c.154-.669.232-1.004.147-1.267a1.001 1.001 0 00-.44-.55C20.019 6 19.676 6 18.99 6H5.5M18 21a1 1 0 110-2 1 1 0 010 2zM8 21a1 1 0 110-2 1 1 0 010 2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShoppingCart02SvgrepoComsvgIcon;
/* prettier-ignore-end */
