// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6eqm1KNiFrAWEs21Xh4t1D
// Component: gIAG8bQPaETo

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
import sty from "./PlasmicCheckbox.module.css"; // plasmic-import: gIAG8bQPaETo/css

import FaSquareRegularSvgIcon from "../icons/icons/PlasmicIcon__FaSquareRegularsvg"; // plasmic-import: rS1Pya07v6Ph/icon
import FaSquareCheckRegularSvgIcon from "../icons/icons/PlasmicIcon__FaSquareCheckRegularsvg"; // plasmic-import: tIXM01Nd7aha/icon
import FaSquareMinusRegularSvgIcon from "../icons/icons/PlasmicIcon__FaSquareMinusRegularsvg"; // plasmic-import: 1Eu_Oh-5WwPP/icon

createPlasmicElementProxy;

export type PlasmicCheckbox__VariantMembers = {
  isDisabled: "isDisabled";
  isChecked: "isChecked";
  noLabel: "noLabel";
  isIndeterminate: "isIndeterminate";
  size: "s" | "md" | "lg";
  reverse: "reverse";
};
export type PlasmicCheckbox__VariantsArgs = {
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  isIndeterminate?: SingleBooleanChoiceArg<"isIndeterminate">;
  size?: SingleChoiceArg<"s" | "md" | "lg">;
  reverse?: SingleBooleanChoiceArg<"reverse">;
};
type VariantPropType = keyof PlasmicCheckbox__VariantsArgs;
export const PlasmicCheckbox__VariantProps = new Array<VariantPropType>(
  "isDisabled",
  "isChecked",
  "noLabel",
  "isIndeterminate",
  "size",
  "reverse"
);

export type PlasmicCheckbox__ArgsType = {
  children?: React.ReactNode;
  name?: string;
  value?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (isChecked: boolean) => void;
};
type ArgPropType = keyof PlasmicCheckbox__ArgsType;
export const PlasmicCheckbox__ArgProps = new Array<ArgPropType>(
  "children",
  "name",
  "value",
  "aria-label",
  "aria-labelledby",
  "onChange"
);

export type PlasmicCheckbox__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  svg?: Flex__<"svg">;
  labelContainer?: Flex__<"div">;
};

export interface DefaultCheckboxProps extends pp.CheckboxProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (isChecked: boolean) => void;
  size?: SingleChoiceArg<"s" | "md" | "lg">;
  reverse?: SingleBooleanChoiceArg<"reverse">;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCheckbox__RenderFunc(props: {
  variants: PlasmicCheckbox__VariantsArgs;
  args: PlasmicCheckbox__ArgsType;
  overrides: PlasmicCheckbox__OverridesType;
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
        path: "noLabel",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noLabel
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "isChecked",
        type: "writable",
        variableType: "boolean",

        valueProp: "isChecked",
        onChangeProp: "onChange"
      },
      {
        path: "isIndeterminate",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isIndeterminate
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "reverse",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.reverse
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

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  const globalVariants = ensureGlobalVariants({
    theme: useTheme(),
    screen: useScreenVariantsohEUf6Jd0EV8()
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
          ),
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootisIndeterminate]: hasVariant(
            $state,
            "isIndeterminate",
            "isIndeterminate"
          ),
          [sty.rootnoLabel]: hasVariant($state, "noLabel", "noLabel"),
          [sty.rootreverse]: hasVariant($state, "reverse", "reverse"),
          [sty.rootsize_s]: hasVariant($state, "size", "s")
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBox___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.freeBoxisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.freeBoxisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.freeBoxisIndeterminate]: hasVariant(
            $state,
            "isIndeterminate",
            "isIndeterminate"
          ),
          [sty.freeBoxnoLabel]: hasVariant($state, "noLabel", "noLabel")
        })}
      >
        <PlasmicIcon__
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          PlasmicIconType={
            hasVariant($state, "isIndeterminate", "isIndeterminate")
              ? FaSquareMinusRegularSvgIcon
              : hasVariant($state, "isChecked", "isChecked")
              ? FaSquareCheckRegularSvgIcon
              : FaSquareRegularSvgIcon
          }
          className={classNames(projectcss.all, sty.svg, {
            [sty.svg___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.svgisChecked]: hasVariant($state, "isChecked", "isChecked"),
            [sty.svgisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
            [sty.svgisIndeterminate]: hasVariant(
              $state,
              "isIndeterminate",
              "isIndeterminate"
            ),
            [sty.svgnoLabel]: hasVariant($state, "noLabel", "noLabel"),
            [sty.svgreverse]: hasVariant($state, "reverse", "reverse"),
            [sty.svgsize_lg]: hasVariant($state, "size", "lg"),
            [sty.svgsize_md]: hasVariant($state, "size", "md"),
            [sty.svgsize_s]: hasVariant($state, "size", "s")
          })}
          role={"img"}
        />
      </div>
      {(hasVariant($state, "noLabel", "noLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(projectcss.all, sty.labelContainer, {
            [sty.labelContainer___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.labelContainerisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),
            [sty.labelContainernoLabel]: hasVariant(
              $state,
              "noLabel",
              "noLabel"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: "Label",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildren___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.slotTargetChildrenisChecked]: hasVariant(
                $state,
                "isChecked",
                "isChecked"
              ),
              [sty.slotTargetChildrenisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetChildrenisIndeterminate]: hasVariant(
                $state,
                "isIndeterminate",
                "isIndeterminate"
              ),
              [sty.slotTargetChildrennoLabel]: hasVariant(
                $state,
                "noLabel",
                "noLabel"
              ),
              [sty.slotTargetChildrensize_lg]: hasVariant($state, "size", "lg"),
              [sty.slotTargetChildrensize_s]: hasVariant($state, "size", "s")
            })
          })}
        </div>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.CheckboxProps>(
  props: P,
  ref: pp.CheckboxRef
) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: "Label"
    };
  }

  return pp.useCheckbox<P, typeof PlasmicCheckbox>(
    PlasmicCheckbox,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isIndeterminateVariant: {
        group: "isIndeterminate",
        variant: "isIndeterminate"
      },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "svg", "labelContainer"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"],
  labelContainer: ["labelContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  svg: "svg";
  labelContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCheckbox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCheckbox__VariantsArgs;
    args?: PlasmicCheckbox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCheckbox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCheckbox__ArgsType,
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
          internalArgPropNames: PlasmicCheckbox__ArgProps,
          internalVariantPropNames: PlasmicCheckbox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCheckbox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCheckbox";
  } else {
    func.displayName = `PlasmicCheckbox.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckbox = Object.assign(
  // Top-level PlasmicCheckbox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    labelContainer: makeNodeComponent("labelContainer"),

    // Metadata about props expected for PlasmicCheckbox
    internalVariantProps: PlasmicCheckbox__VariantProps,
    internalArgProps: PlasmicCheckbox__ArgProps,

    useBehavior
  }
);

export default PlasmicCheckbox;
/* prettier-ignore-end */
