// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6eqm1KNiFrAWEs21Xh4t1D
// Component: NIA-MgibGkGr

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
import sty from "./PlasmicContactIcons.module.css"; // plasmic-import: NIA-MgibGkGr/css

createPlasmicElementProxy;

export type PlasmicContactIcons__VariantMembers = {
  set: "business" | "developer" | "designer";
  removeIcon: "phone" | "message" | "email" | "calendar";
};
export type PlasmicContactIcons__VariantsArgs = {
  set?: SingleChoiceArg<"business" | "developer" | "designer">;
  removeIcon?: MultiChoiceArg<"phone" | "message" | "email" | "calendar">;
};
type VariantPropType = keyof PlasmicContactIcons__VariantsArgs;
export const PlasmicContactIcons__VariantProps = new Array<VariantPropType>(
  "set",
  "removeIcon"
);

export type PlasmicContactIcons__ArgsType = {
  emailSlot?: React.ReactNode;
  phoneSlot?: React.ReactNode;
  messageSlot?: React.ReactNode;
  calendarSlot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicContactIcons__ArgsType;
export const PlasmicContactIcons__ArgProps = new Array<ArgPropType>(
  "emailSlot",
  "phoneSlot",
  "messageSlot",
  "calendarSlot"
);

export type PlasmicContactIcons__OverridesType = {
  root?: Flex__<"div">;
  socialIconsBase?: Flex__<"div">;
  phoneStack?: Flex__<"div">;
  messageStack?: Flex__<"div">;
  emailStack?: Flex__<"div">;
  calendarStack?: Flex__<"div">;
};

export interface DefaultContactIconsProps {
  emailSlot?: React.ReactNode;
  phoneSlot?: React.ReactNode;
  messageSlot?: React.ReactNode;
  calendarSlot?: React.ReactNode;
  set?: SingleChoiceArg<"business" | "developer" | "designer">;
  removeIcon?: MultiChoiceArg<"phone" | "message" | "email" | "calendar">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContactIcons__RenderFunc(props: {
  variants: PlasmicContactIcons__VariantsArgs;
  args: PlasmicContactIcons__ArgsType;
  overrides: PlasmicContactIcons__OverridesType;
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
        path: "set",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.set
      },
      {
        path: "removeIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.removeIcon
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
          )
        }
      )}
    >
      <div
        data-plasmic-name={"socialIconsBase"}
        data-plasmic-override={overrides.socialIconsBase}
        className={classNames(projectcss.all, sty.socialIconsBase)}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"phoneStack"}
          data-plasmic-override={overrides.phoneStack}
          hasGap={true}
          className={classNames(projectcss.all, sty.phoneStack, {
            [sty.phoneStackremoveIcon_phone]: hasVariant(
              $state,
              "removeIcon",
              "phone"
            ),
            [sty.phoneStackset_designer]: hasVariant($state, "set", "designer"),
            [sty.phoneStackset_developer]: hasVariant(
              $state,
              "set",
              "developer"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__iavY1)}
                role={"img"}
              />
            ),

            value: args.phoneSlot
          })}
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"messageStack"}
          data-plasmic-override={overrides.messageStack}
          hasGap={true}
          className={classNames(projectcss.all, sty.messageStack, {
            [sty.messageStackremoveIcon_message]: hasVariant(
              $state,
              "removeIcon",
              "message"
            ),
            [sty.messageStackset_designer]: hasVariant(
              $state,
              "set",
              "designer"
            ),
            [sty.messageStackset_developer]: hasVariant(
              $state,
              "set",
              "developer"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg___8Q9Bg)}
                role={"img"}
              />
            ),

            value: args.messageSlot
          })}
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"emailStack"}
          data-plasmic-override={overrides.emailStack}
          hasGap={true}
          className={classNames(projectcss.all, sty.emailStack, {
            [sty.emailStackremoveIcon_email]: hasVariant(
              $state,
              "removeIcon",
              "email"
            ),
            [sty.emailStackset_designer]: hasVariant($state, "set", "designer"),
            [sty.emailStackset_developer]: hasVariant(
              $state,
              "set",
              "developer"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__rcCpJ)}
                role={"img"}
              />
            ),

            value: args.emailSlot
          })}
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"calendarStack"}
          data-plasmic-override={overrides.calendarStack}
          hasGap={true}
          className={classNames(projectcss.all, sty.calendarStack, {
            [sty.calendarStackremoveIcon_calendar]: hasVariant(
              $state,
              "removeIcon",
              "calendar"
            ),
            [sty.calendarStackset_designer]: hasVariant(
              $state,
              "set",
              "designer"
            ),
            [sty.calendarStackset_developer]: hasVariant(
              $state,
              "set",
              "developer"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__mKwLf)}
                role={"img"}
              />
            ),

            value: args.calendarSlot
          })}
        </Stack__>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "socialIconsBase",
    "phoneStack",
    "messageStack",
    "emailStack",
    "calendarStack"
  ],
  socialIconsBase: [
    "socialIconsBase",
    "phoneStack",
    "messageStack",
    "emailStack",
    "calendarStack"
  ],
  phoneStack: ["phoneStack"],
  messageStack: ["messageStack"],
  emailStack: ["emailStack"],
  calendarStack: ["calendarStack"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  socialIconsBase: "div";
  phoneStack: "div";
  messageStack: "div";
  emailStack: "div";
  calendarStack: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContactIcons__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContactIcons__VariantsArgs;
    args?: PlasmicContactIcons__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContactIcons__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContactIcons__ArgsType,
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
          internalArgPropNames: PlasmicContactIcons__ArgProps,
          internalVariantPropNames: PlasmicContactIcons__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactIcons__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactIcons";
  } else {
    func.displayName = `PlasmicContactIcons.${nodeName}`;
  }
  return func;
}

export const PlasmicContactIcons = Object.assign(
  // Top-level PlasmicContactIcons renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    socialIconsBase: makeNodeComponent("socialIconsBase"),
    phoneStack: makeNodeComponent("phoneStack"),
    messageStack: makeNodeComponent("messageStack"),
    emailStack: makeNodeComponent("emailStack"),
    calendarStack: makeNodeComponent("calendarStack"),

    // Metadata about props expected for PlasmicContactIcons
    internalVariantProps: PlasmicContactIcons__VariantProps,
    internalArgProps: PlasmicContactIcons__ArgProps
  }
);

export default PlasmicContactIcons;
/* prettier-ignore-end */
