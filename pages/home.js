import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { useRouter } from "next/router";
import { CallToAction } from "../components/molecules/CallToAction";
import { ActionButton } from "../components/atoms/ActionButton";

export default function Home(props) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();

  return (
    <Layout
      bannerTitle={t("bannerTitle")}
      bannerText={t("bannerText")}
      locale={props.locale}
      langUrl={asPath}
    >
      <Head>
        {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
          <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
        ) : (
          ""
        )}
        <title>{t("scLabsHome")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="dcterms.title" content={t("scLabsHome")} />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
        />
        <meta name="dcterms.creator" content={t("creator")} />
        <meta name="dcterms.accessRights" content="2" />
        <meta name="dcterms.service" content="ESDC-EDSC_SCLabs-LaboratoireSC" />
        <meta name="dcterms.issued" content="2021-03-18" />
      </Head>
      <section className="layout-container my-12">
        <div className="xl:w-2/3">
          <ActionButton
            href="/signup"
            id="signup-home-page"
            dataCy="signup-home-page"
            className="rounded px-6 py-4 font-bold"
          >
            {t("signupHomeButton")}
          </ActionButton>
          <h2 className="my-10" tabIndex="-1" id="pageMainTitle">
            {t("experimentsAndExplorationTitle")}
          </h2>
          <p className="mb-4 whitespace-pre-line">
            {t("experimentsAndExploration-1/3")}
          </p>
          <ul className="mb-4 pl-10 text-p list-disc">
            <li>{t("experimentsAndExplorationList.1")}</li>
            <li>{t("experimentsAndExplorationList.2")}</li>
            <li>{t("experimentsAndExplorationList.3")}</li>
          </ul>
          <p className="mb-4">{t("experimentsAndExploration-2/3")}</p>
          <p className="mb-10">{t("experimentsAndExploration-3/3")}</p>
        </div>
        <div className="flex flex-col gap-6 lg:gap-10 lg:flex-row ">
          <ActionButton
            href="/experiments"
            text={t("experimentsBtnTxt")}
            id="ExperimentsButton"
            dataCy="ExperimentsButton"
            className="flex py-2 px-6 justify-center font-bold rounded"
            secondary
          />
          <ActionButton
            href="/about"
            text={t("learnMoreAboutSCL")}
            id="AboutButton"
            dataCy="AboutButton"
            className="flex py-2 px-6 justify-center font-bold rounded"
            secondary
          />
        </div>
      </section>
      <CallToAction
        title={t("signupTitle")}
        html={t("becomeAParticipantDescription")}
        href={"/signup"}
        hrefText={t("signupTitle").slice(0, t("signupTitle").length - 1)}
      />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
