// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6eqm1KNiFrAWEs21Xh4t1D
// Component: xOjbZfZ8k3EW

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

import { ModeValue, useMode } from "../core/PlasmicGlobalVariant__Mode"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../core/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_core_css from "../core/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_switch_css from "../switch/plasmic.module.css"; // plasmic-import: i4n9AbVD4xq7VvHzvrVDh9/projectcss
import plasmic_badge_css from "../badge/plasmic.module.css"; // plasmic-import: 6PoNur73nfoJqbzNtkNpAX/projectcss
import plasmic_avatar_css from "../avatar/plasmic.module.css"; // plasmic-import: wjwfXMtbnYisAPU4bK5cC5/projectcss
import plasmic_button_css from "../button/plasmic.module.css"; // plasmic-import: 4JFyEcvXaxQ6TZ3SJQYzp6/projectcss
import plasmic_form_input_css from "../form_input/plasmic.module.css"; // plasmic-import: teUZ7d8BEHskoXuvEf1pBj/projectcss
import plasmic_semantic_css from "../semantic/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import plasmic_icon_css from "../icon/plasmic.module.css"; // plasmic-import: nVTL6BvP7Knk1RSNkBbJCm/projectcss
import plasmic_menu_item_css from "../menu_item/plasmic.module.css"; // plasmic-import: 2ejMdvJDoJWjwd6DCNSCHJ/projectcss
import plasmic_separator_css from "../separator/plasmic.module.css"; // plasmic-import: mGt6E9beS9xM1LmsApto9L/projectcss
import plasmic_form_checkbox_css from "../form_checkbox/plasmic.module.css"; // plasmic-import: bEVQSMSYHutfoPgsCgDaki/projectcss
import plasmic_form_select_css from "../form_select/plasmic.module.css"; // plasmic-import: ivrmEdvdUKbShkHq3Wnmy4/projectcss
import plasmic_list_item_css from "../list_item/plasmic.module.css"; // plasmic-import: fKizj5juSSuZK31zh3BBJE/projectcss
import plasmic_advance_card_css from "../advance_card/plasmic.module.css"; // plasmic-import: 71RGmKESGHwX1FQiVTH6Ch/projectcss
import plasmic_statistic_css from "../statistic/plasmic.module.css"; // plasmic-import: tq1m84LuCppLaXTJBWMK12/projectcss
import plasmic_image_css from "../image/plasmic.module.css"; // plasmic-import: d4FLWyib3U2TEbmJ38D5i3/projectcss
import plasmic_container_css from "../container/plasmic.module.css"; // plasmic-import: d9PrY1SRs2wAiwFXTkwPXt/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6eqm1KNiFrAWEs21Xh4t1D/projectcss
import sty from "./PlasmicIcon.module.css"; // plasmic-import: xOjbZfZ8k3EW/css

createPlasmicElementProxy;

export type PlasmicIcon__VariantMembers = {
  size: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  disabled: "disabled";
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
  size?: SingleChoiceArg<"xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
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
  "size",
  "disabled",
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
  size?: SingleChoiceArg<"xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
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

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

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
        path: "disabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.disabled
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
    mode: useMode(),
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
        plasmic_switch_css.plasmic_tokens,
        plasmic_badge_css.plasmic_tokens,
        plasmic_avatar_css.plasmic_tokens,
        plasmic_button_css.plasmic_tokens,
        plasmic_form_input_css.plasmic_tokens,
        plasmic_semantic_css.plasmic_tokens,
        plasmic_icon_css.plasmic_tokens,
        plasmic_menu_item_css.plasmic_tokens,
        plasmic_separator_css.plasmic_tokens,
        plasmic_form_checkbox_css.plasmic_tokens,
        plasmic_form_select_css.plasmic_tokens,
        plasmic_list_item_css.plasmic_tokens,
        plasmic_advance_card_css.plasmic_tokens,
        plasmic_statistic_css.plasmic_tokens,
        plasmic_image_css.plasmic_tokens,
        plasmic_container_css.plasmic_tokens,
        sty.root,
        {
          [plasmic_core_css.global_mode_darkGrayscale]: hasVariant(
            globalVariants,
            "mode",
            "darkGrayscale"
          ),
          [plasmic_core_css.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          ),
          [plasmic_core_css.global_mode_grayscale]: hasVariant(
            globalVariants,
            "mode",
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
          [sty.rootsize_sm]: hasVariant($state, "size", "sm"),
          [sty.rootsize_xs]: hasVariant($state, "size", "xs"),
          [sty.rootsize_xxs]: hasVariant($state, "size", "xxs")
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
          [sty.freeBoxdisabled]: hasVariant($state, "disabled", "disabled"),
          [sty.freeBoxsize_lg]: hasVariant($state, "size", "lg"),
          [sty.freeBoxsize_md]: hasVariant($state, "size", "md"),
          [sty.freeBoxsize_sm]: hasVariant($state, "size", "sm"),
          [sty.freeBoxsize_xl]: hasVariant($state, "size", "xl"),
          [sty.freeBoxsize_xs]: hasVariant($state, "size", "xs"),
          [sty.freeBoxsize_xxl]: hasVariant($state, "size", "xxl"),
          [sty.freeBoxsize_xxs]: hasVariant($state, "size", "xxs"),
          [sty.freeBoxsubtleColor_success]: hasVariant(
            $state,
            "subtleColor",
            "success"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <svg
              className={classNames(projectcss.all, sty.svg__fLv1R)}
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
