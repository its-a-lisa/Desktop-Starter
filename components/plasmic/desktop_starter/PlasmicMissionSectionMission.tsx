// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xoA7omHX1aucC3LFX3rgWp
// Component: M_deSSxLuHjN

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

import { useScreenVariants as useScreenVariantst0N9QbVX87V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: T0n9qbV-X87V/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../core/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant
import { ModeValue, useMode } from "../core/PlasmicGlobalVariant__Mode"; // plasmic-import: yBTVTgAz2Co9/globalVariant

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
import plasmic_badge_css from "../badge/plasmic.module.css"; // plasmic-import: 6PoNur73nfoJqbzNtkNpAX/projectcss
import plasmic_menu_item_css from "../menu_item/plasmic.module.css"; // plasmic-import: 2ejMdvJDoJWjwd6DCNSCHJ/projectcss
import plasmic_separator_css from "../separator/plasmic.module.css"; // plasmic-import: mGt6E9beS9xM1LmsApto9L/projectcss
import plasmic_form_checkbox_css from "../form_checkbox/plasmic.module.css"; // plasmic-import: bEVQSMSYHutfoPgsCgDaki/projectcss
import plasmic_form_select_css from "../form_select/plasmic.module.css"; // plasmic-import: ivrmEdvdUKbShkHq3Wnmy4/projectcss
import plasmic_list_item_css from "../list_item/plasmic.module.css"; // plasmic-import: fKizj5juSSuZK31zh3BBJE/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: xoA7omHX1aucC3LFX3rgWp/projectcss
import sty from "./PlasmicMissionSectionMission.module.css"; // plasmic-import: M_deSSxLuHjN/css

createPlasmicElementProxy;

export type PlasmicMissionSectionMission__VariantMembers = {};
export type PlasmicMissionSectionMission__VariantsArgs = {};
type VariantPropType = keyof PlasmicMissionSectionMission__VariantsArgs;
export const PlasmicMissionSectionMission__VariantProps =
  new Array<VariantPropType>();

export type PlasmicMissionSectionMission__ArgsType = {};
type ArgPropType = keyof PlasmicMissionSectionMission__ArgsType;
export const PlasmicMissionSectionMission__ArgProps = new Array<ArgPropType>();

export type PlasmicMissionSectionMission__OverridesType = {
  missionContainer?: Flex__<typeof Container>;
  missionSection?: Flex__<"div">;
  missionArea?: Flex__<"div">;
  missionInfoStack?: Flex__<"div">;
  h2?: Flex__<"h2">;
  missionImageStack?: Flex__<"div">;
};

export interface DefaultMissionSectionMissionProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMissionSectionMission__RenderFunc(props: {
  variants: PlasmicMissionSectionMission__VariantsArgs;
  args: PlasmicMissionSectionMission__ArgsType;
  overrides: PlasmicMissionSectionMission__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantst0N9QbVX87V(),
    screen: useScreenVariantsohEUf6Jd0EV8(),
    mode: useMode()
  });

  return (
    <Container
      data-plasmic-name={"missionContainer"}
      data-plasmic-override={overrides.missionContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.missionContainer)}
      containerLayout={["widthHug"]}
      containerSlot={
        <div
          data-plasmic-name={"missionSection"}
          data-plasmic-override={overrides.missionSection}
          className={classNames(projectcss.all, sty.missionSection)}
        >
          <div
            data-plasmic-name={"missionArea"}
            data-plasmic-override={overrides.missionArea}
            className={classNames(projectcss.all, sty.missionArea)}
          >
            <div
              data-plasmic-name={"missionInfoStack"}
              data-plasmic-override={overrides.missionInfoStack}
              className={classNames(projectcss.all, sty.missionInfoStack)}
            >
              <h2
                data-plasmic-name={"h2"}
                data-plasmic-override={overrides.h2}
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2
                )}
              >
                {"Lorem Ipsum"}
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__k8Nz8
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
                }
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___6AbTy)}>
                <div className={classNames(projectcss.all, sty.freeBox__vmWxj)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__ubZlp)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/desktop_starter/images/image25.svg",
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: 1
                    }}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__y5Cgh)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8WkBh
                    )}
                  >
                    {"Lorem ipsum dolor sit amet"}
                  </div>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__zmZ7J)}>
                <div className={classNames(projectcss.all, sty.freeBox__fv12)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__mw8Gz)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/desktop_starter/images/image25.svg",
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: 1
                    }}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__xpa6G)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rygVg
                    )}
                  >
                    {"Lorem ipsum dolor sit amet"}
                  </div>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__b7Fz4)}>
                <div className={classNames(projectcss.all, sty.freeBox__k50MM)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__swV)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/desktop_starter/images/image25.svg",
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: 1
                    }}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__zr2X5)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ioLrb
                    )}
                  >
                    {"Lorem ipsum dolor sit amet"}
                  </div>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__zt0Td)}>
                <div className={classNames(projectcss.all, sty.freeBox__vZatX)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__bu7Pf)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/desktop_starter/images/image25.svg",
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: 1
                    }}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__d6HyC)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1Ce7P
                    )}
                  >
                    {"Lorem ipsum dolor sit amet"}
                  </div>
                </div>
              </div>
            </div>
            <div
              data-plasmic-name={"missionImageStack"}
              data-plasmic-override={overrides.missionImageStack}
              className={classNames(projectcss.all, sty.missionImageStack)}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___9O2G)}
                displayHeight={"700px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"1440px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/desktop_starter/images/image26.png",
                  fullWidth: 1070,
                  fullHeight: 1402,
                  aspectRatio: undefined
                }}
              />

              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__iAqDd)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/desktop_starter/images/image3.png",
                  fullWidth: 2280,
                  fullHeight: 1400,
                  aspectRatio: undefined
                }}
              />
            </div>
          </div>
        </div>
      }
      contentLayout={["widthStretch", "heightHug"]}
      layer01={["backgroundBold"]}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  missionContainer: [
    "missionContainer",
    "missionSection",
    "missionArea",
    "missionInfoStack",
    "h2",
    "missionImageStack"
  ],
  missionSection: [
    "missionSection",
    "missionArea",
    "missionInfoStack",
    "h2",
    "missionImageStack"
  ],
  missionArea: ["missionArea", "missionInfoStack", "h2", "missionImageStack"],
  missionInfoStack: ["missionInfoStack", "h2"],
  h2: ["h2"],
  missionImageStack: ["missionImageStack"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  missionContainer: typeof Container;
  missionSection: "div";
  missionArea: "div";
  missionInfoStack: "div";
  h2: "h2";
  missionImageStack: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMissionSectionMission__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMissionSectionMission__VariantsArgs;
    args?: PlasmicMissionSectionMission__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMissionSectionMission__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMissionSectionMission__ArgsType,
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
          internalArgPropNames: PlasmicMissionSectionMission__ArgProps,
          internalVariantPropNames: PlasmicMissionSectionMission__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMissionSectionMission__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "missionContainer") {
    func.displayName = "PlasmicMissionSectionMission";
  } else {
    func.displayName = `PlasmicMissionSectionMission.${nodeName}`;
  }
  return func;
}

export const PlasmicMissionSectionMission = Object.assign(
  // Top-level PlasmicMissionSectionMission renders the root element
  makeNodeComponent("missionContainer"),
  {
    // Helper components rendering sub-elements
    missionSection: makeNodeComponent("missionSection"),
    missionArea: makeNodeComponent("missionArea"),
    missionInfoStack: makeNodeComponent("missionInfoStack"),
    h2: makeNodeComponent("h2"),
    missionImageStack: makeNodeComponent("missionImageStack"),

    // Metadata about props expected for PlasmicMissionSectionMission
    internalVariantProps: PlasmicMissionSectionMission__VariantProps,
    internalArgProps: PlasmicMissionSectionMission__ArgProps
  }
);

export default PlasmicMissionSectionMission;
/* prettier-ignore-end */
