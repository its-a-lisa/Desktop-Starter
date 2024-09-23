// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nVTL6BvP7Knk1RSNkBbJCm
// Component: X9_ep2TqKQPK

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { ThemeValue, useTheme } from "../core/PlasmicGlobalVariant__Theme"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../core/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_core_css from "../core/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_semantic_css from "../semantic/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: nVTL6BvP7Knk1RSNkBbJCm/projectcss
import sty from "./PlasmicIcon.module.css"; // plasmic-import: X9_ep2TqKQPK/css

import FaStarSolidSvgIcon from "./icons/PlasmicIcon__FaStarSolidSvg"; // plasmic-import: AryIHXd_TIRF/icon

createPlasmicElementProxy;

export type PlasmicIcon__VariantMembers = {
  isDisabled: "isDisabled";
  size:
    | "body2Xs"
    | "bodyXs"
    | "bodySm"
    | "bodyMd"
    | "bodyLg"
    | "bodyXl"
    | "body2Xl"
    | "body3Xl"
    | "heading2Xl"
    | "heading3Xl"
    | "heading4Xl"
    | "heading5Xl"
    | "headingXl"
    | "headingLg"
    | "headingMd";
  boldColor:
    | "basic"
    | "themePrimary"
    | "themeSecondary"
    | "themeStandard"
    | "success"
    | "information"
    | "warning"
    | "error";
  subtleColor:
    | "basic"
    | "themePrimary"
    | "themeSecondary"
    | "themeStandard"
    | "success"
    | "information"
    | "warning"
    | "error";
  removePadding: "removePadding";
};
export type PlasmicIcon__VariantsArgs = {
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  size?: SingleChoiceArg<
    | "body2Xs"
    | "bodyXs"
    | "bodySm"
    | "bodyMd"
    | "bodyLg"
    | "bodyXl"
    | "body2Xl"
    | "body3Xl"
    | "heading2Xl"
    | "heading3Xl"
    | "heading4Xl"
    | "heading5Xl"
    | "headingXl"
    | "headingLg"
    | "headingMd"
  >;
  boldColor?: SingleChoiceArg<
    | "basic"
    | "themePrimary"
    | "themeSecondary"
    | "themeStandard"
    | "success"
    | "information"
    | "warning"
    | "error"
  >;
  subtleColor?: SingleChoiceArg<
    | "basic"
    | "themePrimary"
    | "themeSecondary"
    | "themeStandard"
    | "success"
    | "information"
    | "warning"
    | "error"
  >;
  removePadding?: SingleBooleanChoiceArg<"removePadding">;
};
type VariantPropType = keyof PlasmicIcon__VariantsArgs;
export const PlasmicIcon__VariantProps = new Array<VariantPropType>(
  "isDisabled",
  "size",
  "boldColor",
  "subtleColor",
  "removePadding"
);

export type PlasmicIcon__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicIcon__ArgsType;
export const PlasmicIcon__ArgProps = new Array<ArgPropType>("children");

export type PlasmicIcon__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
};

export interface DefaultIconProps {
  children?: React.ReactNode;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  size?: SingleChoiceArg<
    | "body2Xs"
    | "bodyXs"
    | "bodySm"
    | "bodyMd"
    | "bodyLg"
    | "bodyXl"
    | "body2Xl"
    | "body3Xl"
    | "heading2Xl"
    | "heading3Xl"
    | "heading4Xl"
    | "heading5Xl"
    | "headingXl"
    | "headingLg"
    | "headingMd"
  >;
  boldColor?: SingleChoiceArg<
    | "basic"
    | "themePrimary"
    | "themeSecondary"
    | "themeStandard"
    | "success"
    | "information"
    | "warning"
    | "error"
  >;
  subtleColor?: SingleChoiceArg<
    | "basic"
    | "themePrimary"
    | "themeSecondary"
    | "themeStandard"
    | "success"
    | "information"
    | "warning"
    | "error"
  >;
  removePadding?: SingleBooleanChoiceArg<"removePadding">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicIcon__RenderFunc(props: {
  variants: PlasmicIcon__VariantsArgs;
  args: PlasmicIcon__ArgsType;
  overrides: PlasmicIcon__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "boldColor",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.boldColor
      },
      {
        path: "subtleColor",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.subtleColor
      },
      {
        path: "removePadding",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.removePadding
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    theme: useTheme(),
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_core_css.plasmic_tokens,
        plasmic_semantic_css.plasmic_tokens,
        sty.root,
        {
          [plasmic_core_css.global_theme_darkGrayscale]: hasVariant(
            globalVariants,
            "theme",
            "darkGrayscale"
          ),
          [plasmic_core_css.global_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),
          [plasmic_core_css.global_theme_grayscale]: hasVariant(
            globalVariants,
            "theme",
            "grayscale"
          ),
          [sty.rootboldColor_success]: hasVariant(
            $state,
            "boldColor",
            "success"
          ),
          [sty.rootboldColor_themePrimary]: hasVariant(
            $state,
            "boldColor",
            "themePrimary"
          ),
          [sty.rootsize_body2Xs]: hasVariant($state, "size", "body2Xs"),
          [sty.rootsize_bodySm]: hasVariant($state, "size", "bodySm"),
          [sty.rootsize_bodyXs]: hasVariant($state, "size", "bodyXs")
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxboldColor_basic]: hasVariant(
            $state,
            "boldColor",
            "basic"
          ),
          [sty.freeBoxboldColor_themePrimary]: hasVariant(
            $state,
            "boldColor",
            "themePrimary"
          ),
          [sty.freeBoxisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.freeBoxsize_body2Xl]: hasVariant($state, "size", "body2Xl"),
          [sty.freeBoxsize_body2Xs]: hasVariant($state, "size", "body2Xs"),
          [sty.freeBoxsize_body3Xl]: hasVariant($state, "size", "body3Xl"),
          [sty.freeBoxsize_bodyLg]: hasVariant($state, "size", "bodyLg"),
          [sty.freeBoxsize_bodyMd]: hasVariant($state, "size", "bodyMd"),
          [sty.freeBoxsize_bodySm]: hasVariant($state, "size", "bodySm"),
          [sty.freeBoxsize_bodyXl]: hasVariant($state, "size", "bodyXl"),
          [sty.freeBoxsize_bodyXs]: hasVariant($state, "size", "bodyXs"),
          [sty.freeBoxsize_heading2Xl]: hasVariant(
            $state,
            "size",
            "heading2Xl"
          ),
          [sty.freeBoxsize_heading3Xl]: hasVariant(
            $state,
            "size",
            "heading3Xl"
          ),
          [sty.freeBoxsubtleColor_success]: hasVariant(
            $state,
            "subtleColor",
            "success"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <FaStarSolidSvgIcon
              className={classNames(projectcss.all, sty.svg__pSqZn)}
              role={"img"}
            />
          ),

          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenboldColor_basic]: hasVariant(
              $state,
              "boldColor",
              "basic"
            ),
            [sty.slotTargetChildrenboldColor_error]: hasVariant(
              $state,
              "boldColor",
              "error"
            ),
            [sty.slotTargetChildrenboldColor_information]: hasVariant(
              $state,
              "boldColor",
              "information"
            ),
            [sty.slotTargetChildrenboldColor_success]: hasVariant(
              $state,
              "boldColor",
              "success"
            ),
            [sty.slotTargetChildrenboldColor_themePrimary]: hasVariant(
              $state,
              "boldColor",
              "themePrimary"
            ),
            [sty.slotTargetChildrenboldColor_themeSecondary]: hasVariant(
              $state,
              "boldColor",
              "themeSecondary"
            ),
            [sty.slotTargetChildrenboldColor_themeStandard]: hasVariant(
              $state,
              "boldColor",
              "themeStandard"
            ),
            [sty.slotTargetChildrenboldColor_warning]: hasVariant(
              $state,
              "boldColor",
              "warning"
            ),
            [sty.slotTargetChildrensize_body2Xs]: hasVariant(
              $state,
              "size",
              "body2Xs"
            ),
            [sty.slotTargetChildrensize_body3Xl]: hasVariant(
              $state,
              "size",
              "body3Xl"
            ),
            [sty.slotTargetChildrensize_bodyLg]: hasVariant(
              $state,
              "size",
              "bodyLg"
            ),
            [sty.slotTargetChildrensize_bodyMd]: hasVariant(
              $state,
              "size",
              "bodyMd"
            ),
            [sty.slotTargetChildrensize_bodySm]: hasVariant(
              $state,
              "size",
              "bodySm"
            ),
            [sty.slotTargetChildrensize_bodyXl]: hasVariant(
              $state,
              "size",
              "bodyXl"
            ),
            [sty.slotTargetChildrensize_bodyXs]: hasVariant(
              $state,
              "size",
              "bodyXs"
            ),
            [sty.slotTargetChildrensize_heading4Xl]: hasVariant(
              $state,
              "size",
              "heading4Xl"
            ),
            [sty.slotTargetChildrensize_heading5Xl]: hasVariant(
              $state,
              "size",
              "heading5Xl"
            ),
            [sty.slotTargetChildrensize_headingLg]: hasVariant(
              $state,
              "size",
              "headingLg"
            ),
            [sty.slotTargetChildrensize_headingMd]: hasVariant(
              $state,
              "size",
              "headingMd"
            ),
            [sty.slotTargetChildrensize_headingXl]: hasVariant(
              $state,
              "size",
              "headingXl"
            ),
            [sty.slotTargetChildrensubtleColor_basic]: hasVariant(
              $state,
              "subtleColor",
              "basic"
            ),
            [sty.slotTargetChildrensubtleColor_error]: hasVariant(
              $state,
              "subtleColor",
              "error"
            ),
            [sty.slotTargetChildrensubtleColor_information]: hasVariant(
              $state,
              "subtleColor",
              "information"
            ),
            [sty.slotTargetChildrensubtleColor_success]: hasVariant(
              $state,
              "subtleColor",
              "success"
            ),
            [sty.slotTargetChildrensubtleColor_themePrimary]: hasVariant(
              $state,
              "subtleColor",
              "themePrimary"
            ),
            [sty.slotTargetChildrensubtleColor_themeSecondary]: hasVariant(
              $state,
              "subtleColor",
              "themeSecondary"
            ),
            [sty.slotTargetChildrensubtleColor_themeStandard]: hasVariant(
              $state,
              "subtleColor",
              "themeStandard"
            ),
            [sty.slotTargetChildrensubtleColor_warning]: hasVariant(
              $state,
              "subtleColor",
              "warning"
            )
          })
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIcon__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIcon__VariantsArgs;
    args?: PlasmicIcon__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIcon__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIcon__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicIcon__ArgProps,
          internalVariantPropNames: PlasmicIcon__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicIcon__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIcon";
  } else {
    func.displayName = `PlasmicIcon.${nodeName}`;
  }
  return func;
}

export const PlasmicIcon = Object.assign(
  // Top-level PlasmicIcon renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicIcon
    internalVariantProps: PlasmicIcon__VariantProps,
    internalArgProps: PlasmicIcon__ArgProps
  }
);

export default PlasmicIcon;
/* prettier-ignore-end */
