// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xoA7omHX1aucC3LFX3rgWp
// Component: d5TK5QUCA6Bk

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

import Container from "../../Container"; // plasmic-import: yjb-qhVvhQe-/component

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
import sty from "./PlasmicSocialProofSectionSocialProof.module.css"; // plasmic-import: d5TK5QUCA6Bk/css

createPlasmicElementProxy;

export type PlasmicSocialProofSectionSocialProof__VariantMembers = {};
export type PlasmicSocialProofSectionSocialProof__VariantsArgs = {};
type VariantPropType = keyof PlasmicSocialProofSectionSocialProof__VariantsArgs;
export const PlasmicSocialProofSectionSocialProof__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSocialProofSectionSocialProof__ArgsType = {};
type ArgPropType = keyof PlasmicSocialProofSectionSocialProof__ArgsType;
export const PlasmicSocialProofSectionSocialProof__ArgProps =
  new Array<ArgPropType>();

export type PlasmicSocialProofSectionSocialProof__OverridesType = {
  socialProofContainer?: Flex__<typeof Container>;
};

export interface DefaultSocialProofSectionSocialProofProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSocialProofSectionSocialProof__RenderFunc(props: {
  variants: PlasmicSocialProofSectionSocialProof__VariantsArgs;
  args: PlasmicSocialProofSectionSocialProof__ArgsType;
  overrides: PlasmicSocialProofSectionSocialProof__OverridesType;
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
    <Container
      data-plasmic-name={"socialProofContainer"}
      data-plasmic-override={overrides.socialProofContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.socialProofContainer)}
      containerLayout={[]}
      containerSlot={null}
      layer01={["backgroundUniversal"]}
      overflowVisible={true}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  socialProofContainer: ["socialProofContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  socialProofContainer: typeof Container;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSocialProofSectionSocialProof__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSocialProofSectionSocialProof__VariantsArgs;
    args?: PlasmicSocialProofSectionSocialProof__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicSocialProofSectionSocialProof__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicSocialProofSectionSocialProof__ArgsType,
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
          internalArgPropNames: PlasmicSocialProofSectionSocialProof__ArgProps,
          internalVariantPropNames:
            PlasmicSocialProofSectionSocialProof__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSocialProofSectionSocialProof__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "socialProofContainer") {
    func.displayName = "PlasmicSocialProofSectionSocialProof";
  } else {
    func.displayName = `PlasmicSocialProofSectionSocialProof.${nodeName}`;
  }
  return func;
}

export const PlasmicSocialProofSectionSocialProof = Object.assign(
  // Top-level PlasmicSocialProofSectionSocialProof renders the root element
  makeNodeComponent("socialProofContainer"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSocialProofSectionSocialProof
    internalVariantProps: PlasmicSocialProofSectionSocialProof__VariantProps,
    internalArgProps: PlasmicSocialProofSectionSocialProof__ArgProps
  }
);

export default PlasmicSocialProofSectionSocialProof;
/* prettier-ignore-end */
