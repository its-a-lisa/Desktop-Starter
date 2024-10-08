// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6eqm1KNiFrAWEs21Xh4t1D
// Component: eCZFUYi22hfd

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
import plasmic_switch_css from "../switch/plasmic.module.css"; // plasmic-import: i4n9AbVD4xq7VvHzvrVDh9/projectcss
import plasmic_label_css from "../badge/plasmic.module.css"; // plasmic-import: 6PoNur73nfoJqbzNtkNpAX/projectcss
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
import sty from "./PlasmicBadge.module.css"; // plasmic-import: eCZFUYi22hfd/css

createPlasmicElementProxy;

export type PlasmicBadge__VariantMembers = {
  size: "xs" | "sm" | "md" | "lg";
  status: "none" | "error" | "warning" | "success" | "information";
  shape: "circle" | "square";
  color:
    | "none"
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "lime"
    | "teal"
    | "turquiose"
    | "aqua"
    | "indigo"
    | "pink"
    | "purple";
  emphasis: "minimal" | "bold" | "subtle";
};
export type PlasmicBadge__VariantsArgs = {
  size?: SingleChoiceArg<"xs" | "sm" | "md" | "lg">;
  status?: SingleChoiceArg<
    "none" | "error" | "warning" | "success" | "information"
  >;
  shape?: SingleChoiceArg<"circle" | "square">;
  color?: SingleChoiceArg<
    | "none"
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "lime"
    | "teal"
    | "turquiose"
    | "aqua"
    | "indigo"
    | "pink"
    | "purple"
  >;
  emphasis?: SingleChoiceArg<"minimal" | "bold" | "subtle">;
};
type VariantPropType = keyof PlasmicBadge__VariantsArgs;
export const PlasmicBadge__VariantProps = new Array<VariantPropType>(
  "size",
  "status",
  "shape",
  "color",
  "emphasis"
);

export type PlasmicBadge__ArgsType = {
  avatarInitialsSlot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicBadge__ArgsType;
export const PlasmicBadge__ArgProps = new Array<ArgPropType>(
  "avatarInitialsSlot"
);

export type PlasmicBadge__OverridesType = {
  badgeBase?: Flex__<"div">;
  badgeStack?: Flex__<"div">;
};

export interface DefaultBadgeProps {
  avatarInitialsSlot?: React.ReactNode;
  size?: SingleChoiceArg<"xs" | "sm" | "md" | "lg">;
  status?: SingleChoiceArg<
    "none" | "error" | "warning" | "success" | "information"
  >;
  shape?: SingleChoiceArg<"circle" | "square">;
  color?: SingleChoiceArg<
    | "none"
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "lime"
    | "teal"
    | "turquiose"
    | "aqua"
    | "indigo"
    | "pink"
    | "purple"
  >;
  emphasis?: SingleChoiceArg<"minimal" | "bold" | "subtle">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBadge__RenderFunc(props: {
  variants: PlasmicBadge__VariantsArgs;
  args: PlasmicBadge__ArgsType;
  overrides: PlasmicBadge__OverridesType;
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
        path: "status",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.status
      },
      {
        path: "shape",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.shape
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "emphasis",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.emphasis
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
      data-plasmic-name={"badgeBase"}
      data-plasmic-override={overrides.badgeBase}
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
        plasmic_label_css.plasmic_tokens,
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
        sty.badgeBase,
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
          [sty.badgeBasecolor_none]: hasVariant($state, "color", "none"),
          [sty.badgeBasecolor_purple]: hasVariant($state, "color", "purple"),
          [sty.badgeBasecolor_red]: hasVariant($state, "color", "red"),
          [sty.badgeBasesize_lg]: hasVariant($state, "size", "lg"),
          [sty.badgeBasesize_md]: hasVariant($state, "size", "md"),
          [sty.badgeBasesize_sm]: hasVariant($state, "size", "sm"),
          [sty.badgeBasesize_xs]: hasVariant($state, "size", "xs"),
          [sty.badgeBasestatus_information]: hasVariant(
            $state,
            "status",
            "information"
          ),
          [sty.badgeBasestatus_success]: hasVariant(
            $state,
            "status",
            "success"
          ),
          [sty.badgeBasestatus_warning]: hasVariant($state, "status", "warning")
        }
      )}
    >
      <div
        data-plasmic-name={"badgeStack"}
        data-plasmic-override={overrides.badgeStack}
        className={classNames(projectcss.all, sty.badgeStack, {
          [sty.badgeStackcolor_aqua]: hasVariant($state, "color", "aqua"),
          [sty.badgeStackcolor_blue]: hasVariant($state, "color", "blue"),
          [sty.badgeStackcolor_green]: hasVariant($state, "color", "green"),
          [sty.badgeStackcolor_indigo]: hasVariant($state, "color", "indigo"),
          [sty.badgeStackcolor_lime]: hasVariant($state, "color", "lime"),
          [sty.badgeStackcolor_none]: hasVariant($state, "color", "none"),
          [sty.badgeStackcolor_pink]: hasVariant($state, "color", "pink"),
          [sty.badgeStackcolor_purple]: hasVariant($state, "color", "purple"),
          [sty.badgeStackcolor_red]: hasVariant($state, "color", "red"),
          [sty.badgeStackcolor_teal]: hasVariant($state, "color", "teal"),
          [sty.badgeStackcolor_turquiose]: hasVariant(
            $state,
            "color",
            "turquiose"
          ),
          [sty.badgeStackcolor_yellow]: hasVariant($state, "color", "yellow"),
          [sty.badgeStackemphasis_minimal]: hasVariant(
            $state,
            "emphasis",
            "minimal"
          ),
          [sty.badgeStackemphasis_subtle]: hasVariant(
            $state,
            "emphasis",
            "subtle"
          ),
          [sty.badgeStackshape_circle]: hasVariant($state, "shape", "circle"),
          [sty.badgeStackshape_square]: hasVariant($state, "shape", "square"),
          [sty.badgeStacksize_lg]: hasVariant($state, "size", "lg"),
          [sty.badgeStacksize_md]: hasVariant($state, "size", "md"),
          [sty.badgeStacksize_sm]: hasVariant($state, "size", "sm"),
          [sty.badgeStacksize_xs]: hasVariant($state, "size", "xs"),
          [sty.badgeStackstatus_error]: hasVariant($state, "status", "error"),
          [sty.badgeStackstatus_information]: hasVariant(
            $state,
            "status",
            "information"
          ),
          [sty.badgeStackstatus_none]: hasVariant($state, "status", "none"),
          [sty.badgeStackstatus_success]: hasVariant(
            $state,
            "status",
            "success"
          ),
          [sty.badgeStackstatus_warning]: hasVariant(
            $state,
            "status",
            "warning"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3Hebs
              )}
            >
              {"BADGE"}
            </div>
          ),
          value: args.avatarInitialsSlot,
          className: classNames(sty.slotTargetAvatarInitialsSlot, {
            [sty.slotTargetAvatarInitialsSlotemphasis_minimal]: hasVariant(
              $state,
              "emphasis",
              "minimal"
            ),
            [sty.slotTargetAvatarInitialsSlotemphasis_subtle]: hasVariant(
              $state,
              "emphasis",
              "subtle"
            ),
            [sty.slotTargetAvatarInitialsSlotsize_lg]: hasVariant(
              $state,
              "size",
              "lg"
            ),
            [sty.slotTargetAvatarInitialsSlotsize_sm]: hasVariant(
              $state,
              "size",
              "sm"
            ),
            [sty.slotTargetAvatarInitialsSlotsize_xs]: hasVariant(
              $state,
              "size",
              "xs"
            )
          })
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  badgeBase: ["badgeBase", "badgeStack"],
  badgeStack: ["badgeStack"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  badgeBase: "div";
  badgeStack: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBadge__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBadge__VariantsArgs;
    args?: PlasmicBadge__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBadge__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBadge__ArgsType,
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
          internalArgPropNames: PlasmicBadge__ArgProps,
          internalVariantPropNames: PlasmicBadge__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBadge__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "badgeBase") {
    func.displayName = "PlasmicBadge";
  } else {
    func.displayName = `PlasmicBadge.${nodeName}`;
  }
  return func;
}

export const PlasmicBadge = Object.assign(
  // Top-level PlasmicBadge renders the root element
  makeNodeComponent("badgeBase"),
  {
    // Helper components rendering sub-elements
    badgeStack: makeNodeComponent("badgeStack"),

    // Metadata about props expected for PlasmicBadge
    internalVariantProps: PlasmicBadge__VariantProps,
    internalArgProps: PlasmicBadge__ArgProps
  }
);

export default PlasmicBadge;
/* prettier-ignore-end */
