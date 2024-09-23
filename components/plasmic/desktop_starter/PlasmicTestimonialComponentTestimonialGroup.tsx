// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xoA7omHX1aucC3LFX3rgWp
// Component: dll1IL-E0S2M

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

import TestimonialComponentTestimonialItem from "../../TestimonialComponentTestimonialItem"; // plasmic-import: BMgctX7BjP1K/component

import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../core/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant
import { ThemeValue, useTheme } from "../core/PlasmicGlobalVariant__Theme"; // plasmic-import: yBTVTgAz2Co9/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_core_css from "../core/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_semantic_css from "../semantic/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import plasmic_desktop_ui_theme_css from "../desktop_ui_theme/plasmic.module.css"; // plasmic-import: 6eqm1KNiFrAWEs21Xh4t1D/projectcss
import plasmic_advance_card_css from "../advance_card/plasmic.module.css"; // plasmic-import: 71RGmKESGHwX1FQiVTH6Ch/projectcss
import plasmic_form_input_css from "../form_input/plasmic.module.css"; // plasmic-import: teUZ7d8BEHskoXuvEf1pBj/projectcss
import plasmic_icon_css from "../icon/plasmic.module.css"; // plasmic-import: nVTL6BvP7Knk1RSNkBbJCm/projectcss
import plasmic_statistic_css from "../statistic/plasmic.module.css"; // plasmic-import: tq1m84LuCppLaXTJBWMK12/projectcss
import plasmic_avatar_css from "../avatar/plasmic.module.css"; // plasmic-import: wjwfXMtbnYisAPU4bK5cC5/projectcss
import plasmic_button_css from "../button/plasmic.module.css"; // plasmic-import: 4JFyEcvXaxQ6TZ3SJQYzp6/projectcss
import plasmic_image_css from "../image/plasmic.module.css"; // plasmic-import: d4FLWyib3U2TEbmJ38D5i3/projectcss
import plasmic_container_css from "../container/plasmic.module.css"; // plasmic-import: d9PrY1SRs2wAiwFXTkwPXt/projectcss
import plasmic_switch_css from "../switch/plasmic.module.css"; // plasmic-import: i4n9AbVD4xq7VvHzvrVDh9/projectcss
import plasmic_label_css from "../badge/plasmic.module.css"; // plasmic-import: 6PoNur73nfoJqbzNtkNpAX/projectcss
import plasmic_menu_item_css from "../menu_item/plasmic.module.css"; // plasmic-import: 2ejMdvJDoJWjwd6DCNSCHJ/projectcss
import plasmic_separator_css from "../separator/plasmic.module.css"; // plasmic-import: mGt6E9beS9xM1LmsApto9L/projectcss
import plasmic_form_checkbox_css from "../form_checkbox/plasmic.module.css"; // plasmic-import: bEVQSMSYHutfoPgsCgDaki/projectcss
import plasmic_form_select_css from "../form_select/plasmic.module.css"; // plasmic-import: ivrmEdvdUKbShkHq3Wnmy4/projectcss
import plasmic_list_item_css from "../list_item/plasmic.module.css"; // plasmic-import: fKizj5juSSuZK31zh3BBJE/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: xoA7omHX1aucC3LFX3rgWp/projectcss
import sty from "./PlasmicTestimonialComponentTestimonialGroup.module.css"; // plasmic-import: dll1IL-E0S2M/css

createPlasmicElementProxy;

export type PlasmicTestimonialComponentTestimonialGroup__VariantMembers = {};
export type PlasmicTestimonialComponentTestimonialGroup__VariantsArgs = {};
type VariantPropType =
  keyof PlasmicTestimonialComponentTestimonialGroup__VariantsArgs;
export const PlasmicTestimonialComponentTestimonialGroup__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTestimonialComponentTestimonialGroup__ArgsType = {};
type ArgPropType = keyof PlasmicTestimonialComponentTestimonialGroup__ArgsType;
export const PlasmicTestimonialComponentTestimonialGroup__ArgProps =
  new Array<ArgPropType>();

export type PlasmicTestimonialComponentTestimonialGroup__OverridesType = {
  testimonialGroup?: Flex__<"div">;
  testimonialItemWrapper?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  testimonialComponentTestimonialItem?: Flex__<
    typeof TestimonialComponentTestimonialItem
  >;
};

export interface DefaultTestimonialComponentTestimonialGroupProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTestimonialComponentTestimonialGroup__RenderFunc(props: {
  variants: PlasmicTestimonialComponentTestimonialGroup__VariantsArgs;
  args: PlasmicTestimonialComponentTestimonialGroup__ArgsType;
  overrides: PlasmicTestimonialComponentTestimonialGroup__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsohEUf6Jd0EV8(),
    theme: useTheme()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"testimonialGroup"}
      data-plasmic-override={overrides.testimonialGroup}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_core_css.plasmic_tokens,
        plasmic_semantic_css.plasmic_tokens,
        plasmic_desktop_ui_theme_css.plasmic_tokens,
        plasmic_advance_card_css.plasmic_tokens,
        plasmic_form_input_css.plasmic_tokens,
        plasmic_icon_css.plasmic_tokens,
        plasmic_statistic_css.plasmic_tokens,
        plasmic_avatar_css.plasmic_tokens,
        plasmic_button_css.plasmic_tokens,
        plasmic_image_css.plasmic_tokens,
        plasmic_container_css.plasmic_tokens,
        plasmic_switch_css.plasmic_tokens,
        plasmic_label_css.plasmic_tokens,
        plasmic_menu_item_css.plasmic_tokens,
        plasmic_separator_css.plasmic_tokens,
        plasmic_form_checkbox_css.plasmic_tokens,
        plasmic_form_select_css.plasmic_tokens,
        plasmic_list_item_css.plasmic_tokens,
        sty.testimonialGroup,
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
          )
        }
      )}
    >
      <div
        data-plasmic-name={"testimonialItemWrapper"}
        data-plasmic-override={overrides.testimonialItemWrapper}
        className={classNames(projectcss.all, sty.testimonialItemWrapper)}
      >
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
          (() => {
            try {
              return [2, 3, 4, 5, 6, 7];
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
        ).map((__plasmic_item_0, __plasmic_idx_0) => {
          const currentItem = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
              key={currentIndex}
            >
              <TestimonialComponentTestimonialItem
                data-plasmic-name={"testimonialComponentTestimonialItem"}
                data-plasmic-override={
                  overrides.testimonialComponentTestimonialItem
                }
                className={classNames(
                  "__wab_instance",
                  sty.testimonialComponentTestimonialItem
                )}
              />
            </div>
          );
        })}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  testimonialGroup: [
    "testimonialGroup",
    "testimonialItemWrapper",
    "freeBox",
    "testimonialComponentTestimonialItem"
  ],
  testimonialItemWrapper: [
    "testimonialItemWrapper",
    "freeBox",
    "testimonialComponentTestimonialItem"
  ],
  freeBox: ["freeBox", "testimonialComponentTestimonialItem"],
  testimonialComponentTestimonialItem: ["testimonialComponentTestimonialItem"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  testimonialGroup: "div";
  testimonialItemWrapper: "div";
  freeBox: "div";
  testimonialComponentTestimonialItem: typeof TestimonialComponentTestimonialItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestimonialComponentTestimonialGroup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonialComponentTestimonialGroup__VariantsArgs;
    args?: PlasmicTestimonialComponentTestimonialGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicTestimonialComponentTestimonialGroup__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicTestimonialComponentTestimonialGroup__ArgsType,
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
          internalArgPropNames:
            PlasmicTestimonialComponentTestimonialGroup__ArgProps,
          internalVariantPropNames:
            PlasmicTestimonialComponentTestimonialGroup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTestimonialComponentTestimonialGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "testimonialGroup") {
    func.displayName = "PlasmicTestimonialComponentTestimonialGroup";
  } else {
    func.displayName = `PlasmicTestimonialComponentTestimonialGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonialComponentTestimonialGroup = Object.assign(
  // Top-level PlasmicTestimonialComponentTestimonialGroup renders the root element
  makeNodeComponent("testimonialGroup"),
  {
    // Helper components rendering sub-elements
    testimonialItemWrapper: makeNodeComponent("testimonialItemWrapper"),
    freeBox: makeNodeComponent("freeBox"),
    testimonialComponentTestimonialItem: makeNodeComponent(
      "testimonialComponentTestimonialItem"
    ),

    // Metadata about props expected for PlasmicTestimonialComponentTestimonialGroup
    internalVariantProps:
      PlasmicTestimonialComponentTestimonialGroup__VariantProps,
    internalArgProps: PlasmicTestimonialComponentTestimonialGroup__ArgProps
  }
);

export default PlasmicTestimonialComponentTestimonialGroup;
/* prettier-ignore-end */
