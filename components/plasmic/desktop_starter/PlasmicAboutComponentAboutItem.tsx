// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xoA7omHX1aucC3LFX3rgWp
// Component: fxrbwQEUqKmL

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

import Image from "../../Image"; // plasmic-import: p-kJ8jBM6L2n/component
import Container from "../../Container"; // plasmic-import: yjb-qhVvhQe-/component
import Button from "../../Button"; // plasmic-import: 3AR6h0473ToW/component

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
import sty from "./PlasmicAboutComponentAboutItem.module.css"; // plasmic-import: fxrbwQEUqKmL/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 1l0k0f8No_g4/icon
import FaArrowRightSvgIcon from "../icons/icons/PlasmicIcon__FaArrowRightsvg"; // plasmic-import: laMKK4I5P9un/icon

createPlasmicElementProxy;

export type PlasmicAboutComponentAboutItem__VariantMembers = {
  reverseDirections: "reverseDirections";
  overlayContainer:
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "pushToTop"
    | "pushToRight"
    | "pushToBottom"
    | "pushToLeft";
};
export type PlasmicAboutComponentAboutItem__VariantsArgs = {
  reverseDirections?: SingleBooleanChoiceArg<"reverseDirections">;
  overlayContainer?: SingleChoiceArg<
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "pushToTop"
    | "pushToRight"
    | "pushToBottom"
    | "pushToLeft"
  >;
};
type VariantPropType = keyof PlasmicAboutComponentAboutItem__VariantsArgs;
export const PlasmicAboutComponentAboutItem__VariantProps =
  new Array<VariantPropType>("reverseDirections", "overlayContainer");

export type PlasmicAboutComponentAboutItem__ArgsType = {};
type ArgPropType = keyof PlasmicAboutComponentAboutItem__ArgsType;
export const PlasmicAboutComponentAboutItem__ArgProps =
  new Array<ArgPropType>();

export type PlasmicAboutComponentAboutItem__OverridesType = {
  aboutItem?: Flex__<"div">;
  columns?: Flex__<"div">;
  image?: Flex__<typeof Image>;
  container?: Flex__<typeof Container>;
  img?: Flex__<typeof PlasmicImg__>;
  h3?: Flex__<"h3">;
  button?: Flex__<typeof Button>;
};

export interface DefaultAboutComponentAboutItemProps {
  reverseDirections?: SingleBooleanChoiceArg<"reverseDirections">;
  overlayContainer?: SingleChoiceArg<
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "pushToTop"
    | "pushToRight"
    | "pushToBottom"
    | "pushToLeft"
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

function PlasmicAboutComponentAboutItem__RenderFunc(props: {
  variants: PlasmicAboutComponentAboutItem__VariantsArgs;
  args: PlasmicAboutComponentAboutItem__ArgsType;
  overrides: PlasmicAboutComponentAboutItem__OverridesType;
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
        path: "reverseDirections",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.reverseDirections
      },
      {
        path: "overlayContainer",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.overlayContainer
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
      data-plasmic-name={"aboutItem"}
      data-plasmic-override={overrides.aboutItem}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
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
        sty.aboutItem,
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
          [sty.aboutItemoverlayContainer_bottomLeft]: hasVariant(
            $state,
            "overlayContainer",
            "bottomLeft"
          ),
          [sty.aboutItemoverlayContainer_bottomRight]: hasVariant(
            $state,
            "overlayContainer",
            "bottomRight"
          ),
          [sty.aboutItemoverlayContainer_pushToBottom]: hasVariant(
            $state,
            "overlayContainer",
            "pushToBottom"
          ),
          [sty.aboutItemoverlayContainer_pushToLeft]: hasVariant(
            $state,
            "overlayContainer",
            "pushToLeft"
          ),
          [sty.aboutItemoverlayContainer_pushToRight]: hasVariant(
            $state,
            "overlayContainer",
            "pushToRight"
          ),
          [sty.aboutItemoverlayContainer_pushToTop]: hasVariant(
            $state,
            "overlayContainer",
            "pushToTop"
          ),
          [sty.aboutItemoverlayContainer_topLeft]: hasVariant(
            $state,
            "overlayContainer",
            "topLeft"
          ),
          [sty.aboutItemoverlayContainer_topRight]: hasVariant(
            $state,
            "overlayContainer",
            "topRight"
          ),
          [sty.aboutItemreverseDirections]: hasVariant(
            $state,
            "reverseDirections",
            "reverseDirections"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns, {
          [sty.columnsoverlayContainer_bottomRight]: hasVariant(
            $state,
            "overlayContainer",
            "bottomRight"
          ),
          [sty.columnsreverseDirections]: hasVariant(
            $state,
            "reverseDirections",
            "reverseDirections"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.column___1Xc7)}>
          <div
            className={classNames(projectcss.all, sty.freeBox___6ETz7, {
              [sty.freeBoxoverlayContainer_bottomLeft___6ETz7T3Ozn]: hasVariant(
                $state,
                "overlayContainer",
                "bottomLeft"
              ),
              [sty.freeBoxoverlayContainer_pushToBottom___6ETz763YSd]:
                hasVariant($state, "overlayContainer", "pushToBottom"),
              [sty.freeBoxoverlayContainer_pushToRight___6ETz7Zcs1Z]:
                hasVariant($state, "overlayContainer", "pushToRight"),
              [sty.freeBoxoverlayContainer_pushToTop___6ETz7Wf7We]: hasVariant(
                $state,
                "overlayContainer",
                "pushToTop"
              )
            })}
          >
            <Image
              data-plasmic-name={"image"}
              data-plasmic-override={overrides.image}
              className={classNames("__wab_instance", sty.image, {
                [sty.imageoverlayContainer_pushToRight]: hasVariant(
                  $state,
                  "overlayContainer",
                  "pushToRight"
                ),
                [sty.imageoverlayContainer_topLeft]: hasVariant(
                  $state,
                  "overlayContainer",
                  "topLeft"
                ),
                [sty.imagereverseDirections]: hasVariant(
                  $state,
                  "reverseDirections",
                  "reverseDirections"
                )
              })}
              height={"h75"}
              imageUrl={
                "https://fastly.picsum.photos/id/679/200/300.jpg?grayscale&hmac=AtY9NVTYl2u9uE12rIhCVyiDEqhP5Xhceifpq4jk7tY"
              }
              radii={"lg"}
              width={"w90"}
            />

            <Container
              data-plasmic-name={"container"}
              data-plasmic-override={overrides.container}
              className={classNames("__wab_instance", sty.container, {
                [sty.containeroverlayContainer_bottomLeft]: hasVariant(
                  $state,
                  "overlayContainer",
                  "bottomLeft"
                ),
                [sty.containeroverlayContainer_bottomRight]: hasVariant(
                  $state,
                  "overlayContainer",
                  "bottomRight"
                ),
                [sty.containeroverlayContainer_pushToBottom]: hasVariant(
                  $state,
                  "overlayContainer",
                  "pushToBottom"
                ),
                [sty.containeroverlayContainer_pushToLeft]: hasVariant(
                  $state,
                  "overlayContainer",
                  "pushToLeft"
                ),
                [sty.containeroverlayContainer_pushToRight]: hasVariant(
                  $state,
                  "overlayContainer",
                  "pushToRight"
                ),
                [sty.containeroverlayContainer_pushToTop]: hasVariant(
                  $state,
                  "overlayContainer",
                  "pushToTop"
                ),
                [sty.containeroverlayContainer_topLeft]: hasVariant(
                  $state,
                  "overlayContainer",
                  "topLeft"
                ),
                [sty.containeroverlayContainer_topRight]: hasVariant(
                  $state,
                  "overlayContainer",
                  "topRight"
                )
              })}
              containerLayout={[]}
              containerSlot={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__emN0Q,
                    {
                      [sty.textoverlayContainer_pushToTop__emN0QWf7We]:
                        hasVariant($state, "overlayContainer", "pushToTop")
                    }
                  )}
                >
                  {"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
                </div>
              }
              contentLayout={[]}
              layer02={["backgroundSubtle"]}
              overlayLayout={[]}
              overlayPadding={["allLg"]}
              radius={"large"}
            />
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.column__sAiy, {
            [sty.columnoverlayContainer_bottomLeft__sAiyt3Ozn]: hasVariant(
              $state,
              "overlayContainer",
              "bottomLeft"
            ),
            [sty.columnoverlayContainer_topLeft__sAiyudgsf]: hasVariant(
              $state,
              "overlayContainer",
              "topLeft"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.freeBox__akj1Z)}>
            <div className={classNames(projectcss.all, sty.freeBox__gI0X3)}>
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"2px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"26px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/desktop_starter/images/image20.svg",
                  fullWidth: 300,
                  fullHeight: 23,
                  aspectRatio: 13
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mG0O
                )}
              >
                {"Lorem Ipsum"}
              </div>
            </div>
            <h3
              data-plasmic-name={"h3"}
              data-plasmic-override={overrides.h3}
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3
              )}
            >
              {"Lorem Ipsum"}
            </h3>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kHtjx
              )}
            >
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
              }
            </div>
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              background={"primary"}
              className={classNames("__wab_instance", sty.button)}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__zu58V)}
                  role={"img"}
                />
              }
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__bfJXw)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nMmrc
                )}
              >
                {"lorem Ipsum"}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  aboutItem: [
    "aboutItem",
    "columns",
    "image",
    "container",
    "img",
    "h3",
    "button"
  ],
  columns: ["columns", "image", "container", "img", "h3", "button"],
  image: ["image"],
  container: ["container"],
  img: ["img"],
  h3: ["h3"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  aboutItem: "div";
  columns: "div";
  image: typeof Image;
  container: typeof Container;
  img: typeof PlasmicImg__;
  h3: "h3";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAboutComponentAboutItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAboutComponentAboutItem__VariantsArgs;
    args?: PlasmicAboutComponentAboutItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAboutComponentAboutItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAboutComponentAboutItem__ArgsType,
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
          internalArgPropNames: PlasmicAboutComponentAboutItem__ArgProps,
          internalVariantPropNames: PlasmicAboutComponentAboutItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAboutComponentAboutItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "aboutItem") {
    func.displayName = "PlasmicAboutComponentAboutItem";
  } else {
    func.displayName = `PlasmicAboutComponentAboutItem.${nodeName}`;
  }
  return func;
}

export const PlasmicAboutComponentAboutItem = Object.assign(
  // Top-level PlasmicAboutComponentAboutItem renders the root element
  makeNodeComponent("aboutItem"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    image: makeNodeComponent("image"),
    container: makeNodeComponent("container"),
    img: makeNodeComponent("img"),
    h3: makeNodeComponent("h3"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicAboutComponentAboutItem
    internalVariantProps: PlasmicAboutComponentAboutItem__VariantProps,
    internalArgProps: PlasmicAboutComponentAboutItem__ArgProps
  }
);

export default PlasmicAboutComponentAboutItem;
/* prettier-ignore-end */
