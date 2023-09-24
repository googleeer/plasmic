// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aibJ3fYdg3gA8bsukWWV8J
// Component: Hl--hrC1NsQO

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button2 from "../../Button2"; // plasmic-import: ozOApxgSHvpK/component
import { ProductCollection } from "@plasmicpkgs/commerce"; // plasmic-import: vU2jzVAnFP/codeComponent
import { ProductTextField } from "@plasmicpkgs/commerce"; // plasmic-import: S1F4q0wN6b/codeComponent
import { ProductMedia } from "@plasmicpkgs/commerce"; // plasmic-import: qpULM0wwWW/codeComponent
import { AddToCartButton } from "@plasmicpkgs/commerce"; // plasmic-import: NR7KYUJmEqx/codeComponent

import { useScreenVariants as useScreenVariantsmYkAi1HuWOp9 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: MYkAi1huWOp9/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fast_buds_front.module.css"; // plasmic-import: aibJ3fYdg3gA8bsukWWV8J/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: Hl--hrC1NsQO/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: LzP5VeWmLtRd/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: TlLaNAw8n1kO/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  home?: p.Flex<"main">;
  hero?: p.Flex<"section">;
  img?: p.Flex<typeof p.PlasmicImg>;
  h1?: p.Flex<"h1">;
  productCollection?: p.Flex<typeof ProductCollection>;
  productTextField?: p.Flex<typeof ProductTextField>;
  productMedia?: p.Flex<typeof ProductMedia>;
  addToCartButton?: p.Flex<typeof AddToCartButton>;
};

export interface DefaultHomepageProps {}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsmYkAi1HuWOp9()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <main
          data-plasmic-name={"home"}
          data-plasmic-override={overrides.home}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.home
          )}
        >
          <section
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___8AlGa)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wu7Ne)}
              >
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"63px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={{
                    src: "/plasmic/fast_buds_front/images/fastbudsLogojpeg.png",
                    fullWidth: 1000,
                    fullHeight: 626,
                    aspectRatio: undefined
                  }}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__wwmAw)}
                >
                  <Button2
                    className={classNames("__wab_instance", sty.button2__kno5)}
                    color={"blue"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__n2YRv)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__qtPsZ)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pXqlP
                      )}
                    >
                      {"Features"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__b5Q7I)}
                    color={"blue"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg___5Tda)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg___8Ze53)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__i8TSn
                      )}
                    >
                      {"Company"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__gssuF)}
                    color={"blue"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg___1Ydtm)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__vo0Qf)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xhfXp
                      )}
                    >
                      {"Contact"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__yz3UL)}
                    color={"green"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__gJKw)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__jf1Bd)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___1PvbZ
                      )}
                    >
                      {"Log in"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__bMUdm)}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__dPDs2)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__wxwAx)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yyj2M
                      )}
                    >
                      {"Sign up"}
                    </div>
                  </Button2>
                </p.Stack>
                <div className={classNames(projectcss.all, sty.freeBox__rf7D4)}>
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button__tUngb
                    )}
                  >
                    {"Sign up"}
                  </button>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__oV9B)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__mQwYu)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__iutOk)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__uh65M
                      )}
                    >
                      {"Log in"}
                    </div>
                  </Button2>
                </div>
              </p.Stack>
            </p.Stack>
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Welcome to your first page."}
            </h1>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gn5A5
              )}
            >
              <React.Fragment>
                <React.Fragment>
                  {
                    "If you haven't already done so, go back and learn the basics by going through the Plasmic Levels tutorial.\n\nIt's always easier to start from examples! Add a new page using a template\u2014do this from the list of pages in the top toolbar.\n\nOr press the big blue + button to start inserting items into this page.\n\nIntegrate this project into your codebase\u2014press the "
                  }
                </React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"Code"}
                </span>
                <React.Fragment>
                  {
                    " button in the top right and follow the quickstart instructions.\n\nJoin our Slack community (icon in bottom left) for help any time."
                  }
                </React.Fragment>
              </React.Fragment>
            </div>
            <ProductCollection
              data-plasmic-name={"productCollection"}
              data-plasmic-override={overrides.productCollection}
              className={classNames("__wab_instance", sty.productCollection)}
              count={4}
              emptyMessage={
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bWGg
                      )}
                    >
                      {"No product found!"}
                    </div>
                  )}
                </ph.DataCtxReader>
              }
              loadingMessage={
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__imNm0
                      )}
                    >
                      {"Loading..."}
                    </div>
                  )}
                </ph.DataCtxReader>
              }
            >
              <ph.DataCtxReader>
                {$ctx => (
                  <div
                    className={classNames(projectcss.all, sty.freeBox___786Co)}
                  >
                    <ProductTextField
                      data-plasmic-name={"productTextField"}
                      data-plasmic-override={overrides.productTextField}
                      className={classNames(
                        "__wab_instance",
                        sty.productTextField
                      )}
                      field={"name"}
                    />

                    <ProductMedia
                      data-plasmic-name={"productMedia"}
                      data-plasmic-override={overrides.productMedia}
                      className={classNames("__wab_instance", sty.productMedia)}
                    />

                    <AddToCartButton
                      data-plasmic-name={"addToCartButton"}
                      data-plasmic-override={overrides.addToCartButton}
                      className={classNames(
                        "__wab_instance",
                        sty.addToCartButton
                      )}
                    >
                      <button
                        className={classNames(
                          projectcss.all,
                          projectcss.button,
                          projectcss.__wab_text,
                          sty.button__wBPrY
                        )}
                      >
                        {"Add To Cart"}
                      </button>
                    </AddToCartButton>
                  </div>
                )}
              </ph.DataCtxReader>
            </ProductCollection>
          </section>
        </main>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  home: [
    "home",
    "hero",
    "img",
    "h1",
    "productCollection",
    "productTextField",
    "productMedia",
    "addToCartButton"
  ],
  hero: [
    "hero",
    "img",
    "h1",
    "productCollection",
    "productTextField",
    "productMedia",
    "addToCartButton"
  ],
  img: ["img"],
  h1: ["h1"],
  productCollection: [
    "productCollection",
    "productTextField",
    "productMedia",
    "addToCartButton"
  ],
  productTextField: ["productTextField"],
  productMedia: ["productMedia"],
  addToCartButton: ["addToCartButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  home: "main";
  hero: "section";
  img: typeof p.PlasmicImg;
  h1: "h1";
  productCollection: typeof ProductCollection;
  productTextField: typeof ProductTextField;
  productMedia: typeof ProductMedia;
  addToCartButton: typeof AddToCartButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "home") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("home"),
  {
    // Helper components rendering sub-elements
    hero: makeNodeComponent("hero"),
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    productCollection: makeNodeComponent("productCollection"),
    productTextField: makeNodeComponent("productTextField"),
    productMedia: makeNodeComponent("productMedia"),
    addToCartButton: makeNodeComponent("addToCartButton"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Fast Buds Apparel Store",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */