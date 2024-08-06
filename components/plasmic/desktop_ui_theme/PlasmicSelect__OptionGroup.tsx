// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6eqm1KNiFrAWEs21Xh4t1D
// Component: XiqL4Oj9TZd7

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

import * as pp from "@plasmicapp/react-web";
import Select__Option from "../../Select__Option"; // plasmic-import: l0AtfcFTAmNa/component

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
import sty from "./PlasmicSelect__OptionGroup.module.css"; // plasmic-import: XiqL4Oj9TZd7/css

import SUPER__PlasmicSelect from "./PlasmicSelect"; // plasmic-import: 2GYQGwOQ47K2/render

createPlasmicElementProxy;

export type PlasmicSelect__OptionGroup__VariantMembers = {
  noTitle: "noTitle";
  isFirst: "isFirst";
};
export type PlasmicSelect__OptionGroup__VariantsArgs = {
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  isFirst?: SingleBooleanChoiceArg<"isFirst">;
};
type VariantPropType = keyof PlasmicSelect__OptionGroup__VariantsArgs;
export const PlasmicSelect__OptionGroup__VariantProps =
  new Array<VariantPropType>("noTitle", "isFirst");

export type PlasmicSelect__OptionGroup__ArgsType = {
  children?: React.ReactNode;
  title?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSelect__OptionGroup__ArgsType;
export const PlasmicSelect__OptionGroup__ArgProps = new Array<ArgPropType>(
  "children",
  "title"
);

export type PlasmicSelect__OptionGroup__OverridesType = {
  root?: Flex__<"div">;
  separator?: Flex__<"div">;
  titleContainer?: Flex__<"div">;
  optionsContainer?: Flex__<"div">;
};

export interface DefaultSelect__OptionGroupProps
  extends pp.BaseSelectOptionGroupProps {
  title?: React.ReactNode;
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSelect__OptionGroup__RenderFunc(props: {
  variants: PlasmicSelect__OptionGroup__VariantsArgs;
  args: PlasmicSelect__OptionGroup__ArgsType;
  overrides: PlasmicSelect__OptionGroup__OverridesType;
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
        path: "noTitle",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTitle
      },
      {
        path: "isFirst",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isFirst
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

  const superContexts = {
    Select: React.useContext(SUPER__PlasmicSelect.Context)
  };

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
          [plasmic_core_css.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          )
        }
      )}
    >
      {(hasVariant($state, "isFirst", "isFirst") ? false : true) ? (
        <div
          data-plasmic-name={"separator"}
          data-plasmic-override={overrides.separator}
          className={classNames(projectcss.all, sty.separator, {
            [sty.separatorisFirst]: hasVariant($state, "isFirst", "isFirst"),
            [sty.separatornoTitle]: hasVariant($state, "noTitle", "noTitle")
          })}
        />
      ) : null}
      {(hasVariant($state, "noTitle", "noTitle") ? false : true) ? (
        <div
          data-plasmic-name={"titleContainer"}
          data-plasmic-override={overrides.titleContainer}
          className={classNames(projectcss.all, sty.titleContainer, {
            [sty.titleContainerisFirst]: hasVariant(
              $state,
              "isFirst",
              "isFirst"
            ),
            [sty.titleContainernoTitle]: hasVariant(
              $state,
              "noTitle",
              "noTitle"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: "Group Name",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </div>
      ) : null}
      <div
        data-plasmic-name={"optionsContainer"}
        data-plasmic-override={overrides.optionsContainer}
        className={classNames(projectcss.all, sty.optionsContainer)}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <Select__Option
                className={classNames("__wab_instance", sty.option__tbZbm)}
              />

              <Select__Option
                className={classNames("__wab_instance", sty.option__qihD2)}
              />
            </React.Fragment>
          ),
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseSelectOptionGroupProps>(props: P) {
  return pp.useSelectOptionGroup(PlasmicSelect__OptionGroup, props, {
    noTitleVariant: { group: "noTitle", variant: "noTitle" },
    isFirstVariant: { group: "isFirst", variant: "isFirst" },
    optionsSlot: "children",
    titleSlot: "title",
    root: "root",
    separator: "separator",
    titleContainer: "titleContainer",
    optionsContainer: "optionsContainer"
  });
}

const PlasmicDescendants = {
  root: ["root", "separator", "titleContainer", "optionsContainer"],
  separator: ["separator"],
  titleContainer: ["titleContainer"],
  optionsContainer: ["optionsContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  separator: "div";
  titleContainer: "div";
  optionsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelect__OptionGroup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelect__OptionGroup__VariantsArgs;
    args?: PlasmicSelect__OptionGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSelect__OptionGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSelect__OptionGroup__ArgsType,
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
          internalArgPropNames: PlasmicSelect__OptionGroup__ArgProps,
          internalVariantPropNames: PlasmicSelect__OptionGroup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSelect__OptionGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect__OptionGroup";
  } else {
    func.displayName = `PlasmicSelect__OptionGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect__OptionGroup = Object.assign(
  // Top-level PlasmicSelect__OptionGroup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    separator: makeNodeComponent("separator"),
    titleContainer: makeNodeComponent("titleContainer"),
    optionsContainer: makeNodeComponent("optionsContainer"),

    // Metadata about props expected for PlasmicSelect__OptionGroup
    internalVariantProps: PlasmicSelect__OptionGroup__VariantProps,
    internalArgProps: PlasmicSelect__OptionGroup__ArgProps,

    useBehavior
  }
);

export default PlasmicSelect__OptionGroup;
/* prettier-ignore-end */
