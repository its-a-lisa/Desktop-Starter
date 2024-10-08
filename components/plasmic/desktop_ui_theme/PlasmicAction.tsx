// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6eqm1KNiFrAWEs21Xh4t1D
// Component: J_cUKjk9gvav

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

import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../core/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant
import { ThemeValue, useTheme } from "../core/PlasmicGlobalVariant__Theme"; // plasmic-import: yBTVTgAz2Co9/globalVariant

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
import sty from "./PlasmicAction.module.css"; // plasmic-import: J_cUKjk9gvav/css

import OldCollapseIcon from "./icons/PlasmicIcon__OldCollapse"; // plasmic-import: 6zJDBAS-e3KN/icon
import OldViewIcon from "./icons/PlasmicIcon__OldView"; // plasmic-import: AeczOsmJqGbJ/icon
import OldEditIcon from "./icons/PlasmicIcon__OldEdit"; // plasmic-import: 8f3EcS7CzjgQ/icon
import OldSaveIcon from "./icons/PlasmicIcon__OldSave"; // plasmic-import: cMrQdEm3XOm6/icon
import OldCloseIcon from "./icons/PlasmicIcon__OldClose"; // plasmic-import: 66Pf94OCpGB1/icon
import OldLeftArrowSvgIcon from "./icons/PlasmicIcon__OldLeftArrowSvg"; // plasmic-import: hvLUcIvPKTOG/icon

createPlasmicElementProxy;

export type PlasmicAction__VariantMembers = {
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
  action: "view" | "edit" | "save" | "close" | "collapse" | "back";
};
export type PlasmicAction__VariantsArgs = {
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
  action?: SingleChoiceArg<
    "view" | "edit" | "save" | "close" | "collapse" | "back"
  >;
};
type VariantPropType = keyof PlasmicAction__VariantsArgs;
export const PlasmicAction__VariantProps = new Array<VariantPropType>(
  "size",
  "disabled",
  "boldColor",
  "subtleColor",
  "action"
);

export type PlasmicAction__ArgsType = {};
type ArgPropType = keyof PlasmicAction__ArgsType;
export const PlasmicAction__ArgProps = new Array<ArgPropType>();

export type PlasmicAction__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  svg?: Flex__<"svg">;
};

export interface DefaultActionProps {
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
  action?: SingleChoiceArg<
    "view" | "edit" | "save" | "close" | "collapse" | "back"
  >;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAction__RenderFunc(props: {
  variants: PlasmicAction__VariantsArgs;
  args: PlasmicAction__ArgsType;
  overrides: PlasmicAction__OverridesType;
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
        path: "action",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.action
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
    screen: useScreenVariantsohEUf6Jd0EV8(),
    theme: useTheme()
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
          [sty.rootaction_view]: hasVariant($state, "action", "view"),
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
        <PlasmicIcon__
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          PlasmicIconType={
            hasVariant($state, "action", "back")
              ? OldLeftArrowSvgIcon
              : hasVariant($state, "action", "close")
              ? OldCloseIcon
              : hasVariant($state, "action", "save")
              ? OldSaveIcon
              : hasVariant($state, "action", "edit")
              ? OldEditIcon
              : hasVariant($state, "action", "view")
              ? OldViewIcon
              : OldCollapseIcon
          }
          className={classNames(projectcss.all, sty.svg, {
            [sty.svgaction_back]: hasVariant($state, "action", "back"),
            [sty.svgaction_close]: hasVariant($state, "action", "close"),
            [sty.svgaction_collapse]: hasVariant($state, "action", "collapse"),
            [sty.svgaction_edit]: hasVariant($state, "action", "edit"),
            [sty.svgaction_save]: hasVariant($state, "action", "save"),
            [sty.svgaction_view]: hasVariant($state, "action", "view")
          })}
          role={"img"}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "svg"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAction__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAction__VariantsArgs;
    args?: PlasmicAction__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAction__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAction__ArgsType,
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
          internalArgPropNames: PlasmicAction__ArgProps,
          internalVariantPropNames: PlasmicAction__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAction__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAction";
  } else {
    func.displayName = `PlasmicAction.${nodeName}`;
  }
  return func;
}

export const PlasmicAction = Object.assign(
  // Top-level PlasmicAction renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicAction
    internalVariantProps: PlasmicAction__VariantProps,
    internalArgProps: PlasmicAction__ArgProps
  }
);

export default PlasmicAction;
/* prettier-ignore-end */
