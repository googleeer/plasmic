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
import { ProductMedia } from "@plasmicpkgs/commerce"; // plasmic-import: qpULM0wwWW/codeComponent
import { ProductTextField } from "@plasmicpkgs/commerce"; // plasmic-import: S1F4q0wN6b/codeComponent
import { AddToCartButton } from "@plasmicpkgs/commerce"; // plasmic-import: NR7KYUJmEqx/codeComponent

import { useScreenVariants as useScreenVariantsmYkAi1HuWOp9 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: MYkAi1huWOp9/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fast_buds_front.module.css"; // plasmic-import: aibJ3fYdg3gA8bsukWWV8J/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: Hl--hrC1NsQO/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: LzP5VeWmLtRd/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: TlLaNAw8n1kO/icon
import ShoppingCart02SvgrepoComsvgIcon from "./icons/PlasmicIcon__ShoppingCart02SvgrepoComsvg"; // plasmic-import: SCXVTM_TJFJW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: ZT2Cje1C1JYo/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: OW7cAzPo7StY/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: aRlRgl7fc4At/icon

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
  header?: p.Flex<"header">;
  hero?: p.Flex<"section">;
  h1?: p.Flex<"h1">;
  p?: p.Flex<"p">;
  productCollection?: p.Flex<typeof ProductCollection>;
  productMedia?: p.Flex<typeof ProductMedia>;
  productTextField?: p.Flex<typeof ProductTextField>;
  addToCartButton?: p.Flex<typeof AddToCartButton>;
  footer?: p.Flex<"footer">;
  columns?: p.Flex<"div">;
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

  const $globalActions = ph.useGlobalActions?.();

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
          <p.Stack
            as={"header"}
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            hasGap={true}
            className={classNames(projectcss.all, sty.header)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__wu7Ne)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___6LCaQ)}
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
                <ShoppingCart02SvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__r7Hkk)}
                  role={"img"}
                />
              </div>
            </p.Stack>
          </p.Stack>
          <section
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
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
              {"Fast Buds Apparel Store"}
            </h1>
            <p
              data-plasmic-name={"p"}
              data-plasmic-override={overrides.p}
              className={classNames(
                projectcss.all,
                projectcss.p,
                projectcss.__wab_text,
                sty.p
              )}
            >
              {
                "Our merchandise is designed to be worn proudly and to shout loudly to the world about what you love!  With this 100% hemp Fast Buds cap, you can show that you only grow the best."
              }
            </p>
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
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___786Co)}
                    onMouseEnter={async event => {
                      const $steps = {};
                    }}
                  >
                    <ProductMedia
                      data-plasmic-name={"productMedia"}
                      data-plasmic-override={overrides.productMedia}
                      className={classNames("__wab_instance", sty.productMedia)}
                    />

                    <ProductTextField
                      data-plasmic-name={"productTextField"}
                      data-plasmic-override={overrides.productTextField}
                      className={classNames(
                        "__wab_instance",
                        sty.productTextField
                      )}
                      field={"name"}
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
                        onClick={async event => {
                          const $steps = {};
                          $steps["addItemToCart"] = true
                            ? (() => {
                                const actionArgs = {
                                  productId: (() => {
                                    try {
                                      return $ctx.currentProduct.slug;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })(),
                                  quantity: 1
                                };
                                return $globalActions[
                                  "plasmic-commerce-shopify-provider.addItem"
                                ]?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            typeof $steps["addItemToCart"] === "object" &&
                            typeof $steps["addItemToCart"].then === "function"
                          ) {
                            $steps["addItemToCart"] = await $steps[
                              "addItemToCart"
                            ];
                          }
                        }}
                      >
                        {"Add To Cart"}
                      </button>
                    </AddToCartButton>
                  </p.Stack>
                )}
              </ph.DataCtxReader>
            </ProductCollection>
          </section>
          <footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames(projectcss.all, sty.footer)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__qgz5J)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__p9Oth)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___7LCz1)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"110px"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
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
                    className={classNames(projectcss.all, sty.freeBox__gx8F0)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__djeGd
                      )}
                    >
                      {"Connect with us"}
                    </div>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__ejiMj)}
                    >
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__f5FaH)}
                        role={"img"}
                      />

                      <Icon2Icon
                        className={classNames(projectcss.all, sty.svg__mqNr)}
                        role={"img"}
                      />

                      <Icon3Icon
                        className={classNames(projectcss.all, sty.svg___0Lgyq)}
                        role={"img"}
                      />
                    </p.Stack>
                  </p.Stack>
                </p.Stack>
              </div>
              <div className={classNames(projectcss.all, sty.column___6MM0)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__k923B)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__y7Egz
                    )}
                  >
                    {"Product"}
                  </div>
                  <Button2
                    className={classNames(
                      "__wab_instance",
                      sty.button2___3EW1W
                    )}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__bQPc7)}
                        role={"img"}
                      />
                    }
                    size={"minimal"}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__vBOa)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__llU42
                      )}
                    >
                      {"Pricing"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__qIrdL)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__aa1G0)}
                        role={"img"}
                      />
                    }
                    size={"minimal"}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__hmdg4)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__h0Kr8
                      )}
                    >
                      {"Log in"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__vOreI)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__oVhs8)}
                        role={"img"}
                      />
                    }
                    size={"minimal"}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__rhzgz)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cWas
                      )}
                    >
                      {"Integrations"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__efU4K)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__pUoOb)}
                        role={"img"}
                      />
                    }
                    size={"minimal"}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__lJTy0)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__weICk
                      )}
                    >
                      {"Insights"}
                    </div>
                  </Button2>
                </p.Stack>
              </div>
              <div className={classNames(projectcss.all, sty.column___0S2T)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__dPHa5)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oXudT
                    )}
                  >
                    {"Support"}
                  </div>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__j9RcX)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__zH7G)}
                        role={"img"}
                      />
                    }
                    size={"minimal"}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__eDbqg)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__onO06
                      )}
                    >
                      {"Documentation"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__aIxRc)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg___8GSrk)}
                        role={"img"}
                      />
                    }
                    size={"minimal"}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg___3JjK0)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jBbdO
                      )}
                    >
                      {"FAQs"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__iTpi9)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg___2Qn6B)}
                        role={"img"}
                      />
                    }
                    size={"minimal"}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__eCcY)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__suJcu
                      )}
                    >
                      {"Status"}
                    </div>
                  </Button2>
                </p.Stack>
              </div>
              <div className={classNames(projectcss.all, sty.column___5PQw)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zx2Tj)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sZxDm
                    )}
                  >
                    {"Company"}
                  </div>
                  <Button2
                    className={classNames(
                      "__wab_instance",
                      sty.button2___0EMxQ
                    )}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__xl34W)}
                        role={"img"}
                      />
                    }
                    size={"minimal"}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__tQvV4)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__eg8U9
                      )}
                    >
                      {"About"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__bHjcn)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__fv0G)}
                        role={"img"}
                      />
                    }
                    size={"minimal"}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__aIwWh)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lheSa
                      )}
                    >
                      {"Contact us"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__cnNpf)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg___8ZiZm)}
                        role={"img"}
                      />
                    }
                    size={"minimal"}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__kv5Iw)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rSyW
                      )}
                    >
                      {"Careers"}
                    </div>
                  </Button2>
                  <Button2
                    className={classNames("__wab_instance", sty.button2__loPrG)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__mOwlX)}
                        role={"img"}
                      />
                    }
                    size={"minimal"}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg___6Qae)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pXZi4
                      )}
                    >
                      {"Media"}
                    </div>
                  </Button2>
                </p.Stack>
              </div>
            </p.Stack>
          </footer>
        </main>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  home: [
    "home",
    "header",
    "hero",
    "h1",
    "p",
    "productCollection",
    "productMedia",
    "productTextField",
    "addToCartButton",
    "footer",
    "columns"
  ],
  header: ["header"],
  hero: [
    "hero",
    "h1",
    "p",
    "productCollection",
    "productMedia",
    "productTextField",
    "addToCartButton"
  ],
  h1: ["h1"],
  p: ["p"],
  productCollection: [
    "productCollection",
    "productMedia",
    "productTextField",
    "addToCartButton"
  ],
  productMedia: ["productMedia"],
  productTextField: ["productTextField"],
  addToCartButton: ["addToCartButton"],
  footer: ["footer", "columns"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  home: "main";
  header: "header";
  hero: "section";
  h1: "h1";
  p: "p";
  productCollection: typeof ProductCollection;
  productMedia: typeof ProductMedia;
  productTextField: typeof ProductTextField;
  addToCartButton: typeof AddToCartButton;
  footer: "footer";
  columns: "div";
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
    header: makeNodeComponent("header"),
    hero: makeNodeComponent("hero"),
    h1: makeNodeComponent("h1"),
    p: makeNodeComponent("p"),
    productCollection: makeNodeComponent("productCollection"),
    productMedia: makeNodeComponent("productMedia"),
    productTextField: makeNodeComponent("productTextField"),
    addToCartButton: makeNodeComponent("addToCartButton"),
    footer: makeNodeComponent("footer"),
    columns: makeNodeComponent("columns"),

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
