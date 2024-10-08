// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6eqm1KNiFrAWEs21Xh4t1D
// Component: iK_qOjAniSyq

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
import sty from "./PlasmicAvatar.module.css"; // plasmic-import: iK_qOjAniSyq/css

import FaUserSvgIcon from "../icons/icons/PlasmicIcon__FaUsersvg"; // plasmic-import: UVx9tKpnIxXP/icon

createPlasmicElementProxy;

export type PlasmicAvatar__VariantMembers = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  type: "icon" | "image" | "text";
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
  emphasis: "minimal" | "bold";
};
export type PlasmicAvatar__VariantsArgs = {
  size?: SingleChoiceArg<"xs" | "sm" | "md" | "lg" | "xl">;
  type?: SingleChoiceArg<"icon" | "image" | "text">;
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
  emphasis?: SingleChoiceArg<"minimal" | "bold">;
};
type VariantPropType = keyof PlasmicAvatar__VariantsArgs;
export const PlasmicAvatar__VariantProps = new Array<VariantPropType>(
  "size",
  "type",
  "status",
  "shape",
  "color",
  "emphasis"
);

export type PlasmicAvatar__ArgsType = {
  avatarIconSlot?: React.ReactNode;
  avatarImageSlot?: React.ReactNode;
  avatarInitialsSlot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicAvatar__ArgsType;
export const PlasmicAvatar__ArgProps = new Array<ArgPropType>(
  "avatarIconSlot",
  "avatarImageSlot",
  "avatarInitialsSlot"
);

export type PlasmicAvatar__OverridesType = {
  avatarBase?: Flex__<"div">;
  avatarStack?: Flex__<"div">;
};

export interface DefaultAvatarProps {
  avatarIconSlot?: React.ReactNode;
  avatarImageSlot?: React.ReactNode;
  avatarInitialsSlot?: React.ReactNode;
  size?: SingleChoiceArg<"xs" | "sm" | "md" | "lg" | "xl">;
  type?: SingleChoiceArg<"icon" | "image" | "text">;
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
  emphasis?: SingleChoiceArg<"minimal" | "bold">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAvatar__RenderFunc(props: {
  variants: PlasmicAvatar__VariantsArgs;
  args: PlasmicAvatar__ArgsType;
  overrides: PlasmicAvatar__OverridesType;
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
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
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
      data-plasmic-name={"avatarBase"}
      data-plasmic-override={overrides.avatarBase}
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
        sty.avatarBase,
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
          [sty.avatarBasecolor_none]: hasVariant($state, "color", "none"),
          [sty.avatarBasecolor_purple]: hasVariant($state, "color", "purple"),
          [sty.avatarBasecolor_red]: hasVariant($state, "color", "red"),
          [sty.avatarBasesize_lg]: hasVariant($state, "size", "lg"),
          [sty.avatarBasesize_md]: hasVariant($state, "size", "md"),
          [sty.avatarBasesize_sm]: hasVariant($state, "size", "sm"),
          [sty.avatarBasesize_xl]: hasVariant($state, "size", "xl"),
          [sty.avatarBasesize_xs]: hasVariant($state, "size", "xs"),
          [sty.avatarBasestatus_information]: hasVariant(
            $state,
            "status",
            "information"
          ),
          [sty.avatarBasestatus_success]: hasVariant(
            $state,
            "status",
            "success"
          ),
          [sty.avatarBasestatus_warning]: hasVariant(
            $state,
            "status",
            "warning"
          ),
          [sty.avatarBasetype_icon]: hasVariant($state, "type", "icon"),
          [sty.avatarBasetype_image]: hasVariant($state, "type", "image"),
          [sty.avatarBasetype_text]: hasVariant($state, "type", "text")
        }
      )}
    >
      <div
        data-plasmic-name={"avatarStack"}
        data-plasmic-override={overrides.avatarStack}
        className={classNames(projectcss.all, sty.avatarStack, {
          [sty.avatarStackcolor_aqua]: hasVariant($state, "color", "aqua"),
          [sty.avatarStackcolor_blue]: hasVariant($state, "color", "blue"),
          [sty.avatarStackcolor_green]: hasVariant($state, "color", "green"),
          [sty.avatarStackcolor_indigo]: hasVariant($state, "color", "indigo"),
          [sty.avatarStackcolor_lime]: hasVariant($state, "color", "lime"),
          [sty.avatarStackcolor_none]: hasVariant($state, "color", "none"),
          [sty.avatarStackcolor_pink]: hasVariant($state, "color", "pink"),
          [sty.avatarStackcolor_purple]: hasVariant($state, "color", "purple"),
          [sty.avatarStackcolor_red]: hasVariant($state, "color", "red"),
          [sty.avatarStackcolor_teal]: hasVariant($state, "color", "teal"),
          [sty.avatarStackcolor_turquiose]: hasVariant(
            $state,
            "color",
            "turquiose"
          ),
          [sty.avatarStackcolor_yellow]: hasVariant($state, "color", "yellow"),
          [sty.avatarStackemphasis_minimal]: hasVariant(
            $state,
            "emphasis",
            "minimal"
          ),
          [sty.avatarStackshape_square]: hasVariant($state, "shape", "square"),
          [sty.avatarStacksize_lg]: hasVariant($state, "size", "lg"),
          [sty.avatarStacksize_md]: hasVariant($state, "size", "md"),
          [sty.avatarStacksize_sm]: hasVariant($state, "size", "sm"),
          [sty.avatarStacksize_xl]: hasVariant($state, "size", "xl"),
          [sty.avatarStacksize_xs]: hasVariant($state, "size", "xs"),
          [sty.avatarStackstatus_error]: hasVariant($state, "status", "error"),
          [sty.avatarStackstatus_information]: hasVariant(
            $state,
            "status",
            "information"
          ),
          [sty.avatarStackstatus_success]: hasVariant(
            $state,
            "status",
            "success"
          ),
          [sty.avatarStackstatus_warning]: hasVariant(
            $state,
            "status",
            "warning"
          )
        })}
      >
        {(
          hasVariant($state, "type", "text")
            ? false
            : hasVariant($state, "type", "image")
            ? false
            : true
        )
          ? renderPlasmicSlot({
              defaultContents: (
                <FaUserSvgIcon
                  className={classNames(projectcss.all, sty.svg__cUiS)}
                  role={"img"}
                />
              ),

              value: args.avatarIconSlot,
              className: classNames(sty.slotTargetAvatarIconSlot, {
                [sty.slotTargetAvatarIconSlotcolor_yellow]: hasVariant(
                  $state,
                  "color",
                  "yellow"
                ),
                [sty.slotTargetAvatarIconSlotemphasis_minimal]: hasVariant(
                  $state,
                  "emphasis",
                  "minimal"
                ),
                [sty.slotTargetAvatarIconSlotsize_xs]: hasVariant(
                  $state,
                  "size",
                  "xs"
                ),
                [sty.slotTargetAvatarIconSlottype_image]: hasVariant(
                  $state,
                  "type",
                  "image"
                ),
                [sty.slotTargetAvatarIconSlottype_text]: hasVariant(
                  $state,
                  "type",
                  "text"
                )
              })
            })
          : null}
        {(
          hasVariant($state, "type", "text")
            ? false
            : hasVariant($state, "type", "image")
            ? true
            : false
        )
          ? renderPlasmicSlot({
              defaultContents: (
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__hUCjI)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                />
              ),

              value: args.avatarImageSlot
            })
          : null}
        {(
          hasVariant($state, "type", "text")
            ? true
            : hasVariant($state, "type", "image")
            ? false
            : false
        )
          ? renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__maG0P
                  )}
                >
                  {"AB"}
                </div>
              ),
              value: args.avatarInitialsSlot,
              className: classNames(sty.slotTargetAvatarInitialsSlot, {
                [sty.slotTargetAvatarInitialsSlottype_image]: hasVariant(
                  $state,
                  "type",
                  "image"
                ),
                [sty.slotTargetAvatarInitialsSlottype_text]: hasVariant(
                  $state,
                  "type",
                  "text"
                )
              })
            })
          : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  avatarBase: ["avatarBase", "avatarStack"],
  avatarStack: ["avatarStack"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  avatarBase: "div";
  avatarStack: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAvatar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAvatar__VariantsArgs;
    args?: PlasmicAvatar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAvatar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAvatar__ArgsType,
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
          internalArgPropNames: PlasmicAvatar__ArgProps,
          internalVariantPropNames: PlasmicAvatar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAvatar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "avatarBase") {
    func.displayName = "PlasmicAvatar";
  } else {
    func.displayName = `PlasmicAvatar.${nodeName}`;
  }
  return func;
}

export const PlasmicAvatar = Object.assign(
  // Top-level PlasmicAvatar renders the root element
  makeNodeComponent("avatarBase"),
  {
    // Helper components rendering sub-elements
    avatarStack: makeNodeComponent("avatarStack"),

    // Metadata about props expected for PlasmicAvatar
    internalVariantProps: PlasmicAvatar__VariantProps,
    internalArgProps: PlasmicAvatar__ArgProps
  }
);

export default PlasmicAvatar;
/* prettier-ignore-end */
