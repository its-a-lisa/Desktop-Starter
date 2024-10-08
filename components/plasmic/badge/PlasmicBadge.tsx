// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6PoNur73nfoJqbzNtkNpAX
// Component: pnXQiYjPocAS

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

import plasmic_semantic_css from "../semantic/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import plasmic_core_css from "../core/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6PoNur73nfoJqbzNtkNpAX/projectcss
import sty from "./PlasmicBadge.module.css"; // plasmic-import: pnXQiYjPocAS/css

createPlasmicElementProxy;

export type PlasmicBadge__VariantMembers = {
  emphasis: "outline" | "bold" | "ghost";
  size: "small" | "medium" | "large";
  shape: "square" | "pill";
  background:
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "lime"
    | "teal"
    | "turquoise"
    | "aqua"
    | "indigo"
    | "pink"
    | "purple";
  status: "neutral" | "negative" | "notice" | "positive" | "info";
};
export type PlasmicBadge__VariantsArgs = {
  emphasis?: SingleChoiceArg<"outline" | "bold" | "ghost">;
  size?: SingleChoiceArg<"small" | "medium" | "large">;
  shape?: SingleChoiceArg<"square" | "pill">;
  background?: SingleChoiceArg<
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "lime"
    | "teal"
    | "turquoise"
    | "aqua"
    | "indigo"
    | "pink"
    | "purple"
  >;
  status?: SingleChoiceArg<
    "neutral" | "negative" | "notice" | "positive" | "info"
  >;
};
type VariantPropType = keyof PlasmicBadge__VariantsArgs;
export const PlasmicBadge__VariantProps = new Array<VariantPropType>(
  "emphasis",
  "size",
  "shape",
  "background",
  "status"
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
  emphasis?: SingleChoiceArg<"outline" | "bold" | "ghost">;
  size?: SingleChoiceArg<"small" | "medium" | "large">;
  shape?: SingleChoiceArg<"square" | "pill">;
  background?: SingleChoiceArg<
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "lime"
    | "teal"
    | "turquoise"
    | "aqua"
    | "indigo"
    | "pink"
    | "purple"
  >;
  status?: SingleChoiceArg<
    "neutral" | "negative" | "notice" | "positive" | "info"
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
        path: "background",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.background
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
        plasmic_semantic_css.plasmic_tokens,
        plasmic_core_css.plasmic_tokens,
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
          [sty.badgeBasebackground_purple]: hasVariant(
            $state,
            "background",
            "purple"
          ),
          [sty.badgeBasebackground_red]: hasVariant(
            $state,
            "background",
            "red"
          ),
          [sty.badgeBaseemphasis_outline]: hasVariant(
            $state,
            "emphasis",
            "outline"
          ),
          [sty.badgeBasesize_large]: hasVariant($state, "size", "large"),
          [sty.badgeBasesize_medium]: hasVariant($state, "size", "medium"),
          [sty.badgeBasesize_small]: hasVariant($state, "size", "small"),
          [sty.badgeBasestatus_info]: hasVariant($state, "status", "info"),
          [sty.badgeBasestatus_notice]: hasVariant($state, "status", "notice"),
          [sty.badgeBasestatus_positive]: hasVariant(
            $state,
            "status",
            "positive"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"badgeStack"}
        data-plasmic-override={overrides.badgeStack}
        className={classNames(projectcss.all, sty.badgeStack, {
          [sty.badgeStackbackground_aqua]: hasVariant(
            $state,
            "background",
            "aqua"
          ),
          [sty.badgeStackbackground_blue]: hasVariant(
            $state,
            "background",
            "blue"
          ),
          [sty.badgeStackbackground_green]: hasVariant(
            $state,
            "background",
            "green"
          ),
          [sty.badgeStackbackground_indigo]: hasVariant(
            $state,
            "background",
            "indigo"
          ),
          [sty.badgeStackbackground_lime]: hasVariant(
            $state,
            "background",
            "lime"
          ),
          [sty.badgeStackbackground_pink]: hasVariant(
            $state,
            "background",
            "pink"
          ),
          [sty.badgeStackbackground_purple]: hasVariant(
            $state,
            "background",
            "purple"
          ),
          [sty.badgeStackbackground_red]: hasVariant(
            $state,
            "background",
            "red"
          ),
          [sty.badgeStackbackground_teal]: hasVariant(
            $state,
            "background",
            "teal"
          ),
          [sty.badgeStackbackground_turquoise]: hasVariant(
            $state,
            "background",
            "turquoise"
          ),
          [sty.badgeStackbackground_yellow]: hasVariant(
            $state,
            "background",
            "yellow"
          ),
          [sty.badgeStackemphasis_ghost]: hasVariant(
            $state,
            "emphasis",
            "ghost"
          ),
          [sty.badgeStackemphasis_outline]: hasVariant(
            $state,
            "emphasis",
            "outline"
          ),
          [sty.badgeStackshape_pill]: hasVariant($state, "shape", "pill"),
          [sty.badgeStackshape_square]: hasVariant($state, "shape", "square"),
          [sty.badgeStacksize_large]: hasVariant($state, "size", "large"),
          [sty.badgeStacksize_medium]: hasVariant($state, "size", "medium"),
          [sty.badgeStacksize_small]: hasVariant($state, "size", "small"),
          [sty.badgeStackstatus_info]: hasVariant($state, "status", "info"),
          [sty.badgeStackstatus_negative]: hasVariant(
            $state,
            "status",
            "negative"
          ),
          [sty.badgeStackstatus_neutral]: hasVariant(
            $state,
            "status",
            "neutral"
          ),
          [sty.badgeStackstatus_notice]: hasVariant($state, "status", "notice"),
          [sty.badgeStackstatus_positive]: hasVariant(
            $state,
            "status",
            "positive"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ymoUn
              )}
            >
              {"BADGE"}
            </div>
          ),
          value: args.avatarInitialsSlot,
          className: classNames(sty.slotTargetAvatarInitialsSlot, {
            [sty.slotTargetAvatarInitialsSlotemphasis_bold]: hasVariant(
              $state,
              "emphasis",
              "bold"
            ),
            [sty.slotTargetAvatarInitialsSlotemphasis_ghost]: hasVariant(
              $state,
              "emphasis",
              "ghost"
            ),
            [sty.slotTargetAvatarInitialsSlotemphasis_outline]: hasVariant(
              $state,
              "emphasis",
              "outline"
            ),
            [sty.slotTargetAvatarInitialsSlotsize_large]: hasVariant(
              $state,
              "size",
              "large"
            ),
            [sty.slotTargetAvatarInitialsSlotsize_small]: hasVariant(
              $state,
              "size",
              "small"
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
