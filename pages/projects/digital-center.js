import PropTypes from "prop-types";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../components/organisms/Layout";
import { useRouter } from "next/router";
import { CallToAction } from "../../components/molecules/CallToAction";

function ThumbnailWithCaption({
  title = "Image 1",
  src = "https://uhdwallpapers.org/uploads/converted/20/01/14/the-mandalorian-5k-1920x1080_477555-mm-90.jpg",
  alt = "",
  children,
}) {
  return (
    <div className="flex justify-center flex-col">
      <h3 className="text-lg mt-3">{title}</h3>
      <figure className="shadow-experiment-shadow">
        <img src={src} alt={alt} className="border-b-2" />
        <figcaption className="text-base p-8">{children}</figcaption>
      </figure>
    </div>
  );
}

ThumbnailWithCaption.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  caption: PropTypes.string,
};

export default function Home(props) {
  const { t } = useTranslation(["common", "dc"]);
  const { asPath } = useRouter();

  return (
    <Layout locale={props.locale} langUrl={asPath}>
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

      <section className="layout-container mb-10">
        <h1
          id="pageMainTitle"
          className="mb-10 mt-10 text-h1l font-bold sm:w-max"
          tabIndex="-1"
        >
          {t("dc:OverviewTitle")}
        </h1>
        <p className="text-base mt-3">{t("dc:ProductGoal1")}</p>
        <p className="text-base mt-3">{t("dc:ProductGoal2")}</p>

        <h2 className="text-lg mt-8">{t("dc:Concept1Heading")}</h2>
        <p className="text-base mt-6">{t("dc:Concept1P1")}</p>
        <p className="text-base mt-6">{t("dc:Concept1P2")}</p>
        <p className="text-base mt-6">{t("dc:Concept1P3")}</p>

        <div className="mx-auto">
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6">
            <ThumbnailWithCaption
              title={t("dc:Concept1ImgTitle1")}
              alt={t("dc:Concept1ImgAlt1")}
              src={"/dc-1.1.jpg"}
            >
              <div>{t("dc:Concept1ImgCaption1")}</div>
              <ol className="ml-2 mt-2">
                <li className="mt-1">{t("dc:Concept1ImgCaption1LI1")}</li>
                <li className="mt-1">{t("dc:Concept1ImgCaption1LI2")}</li>
                <li className="mt-1">{t("dc:Concept1ImgCaption1LI3")}</li>
                <li className="mt-1">{t("dc:Concept1ImgCaption1LI4")}</li>
                <li className="mt-1">{t("dc:Concept1ImgCaption1LI5")}</li>
                <li className="mt-1">{t("dc:Concept1ImgCaption1LI6")}</li>
              </ol>
            </ThumbnailWithCaption>
            <ThumbnailWithCaption
              title={t("dc:Concept1ImgTitle2")}
              alt={t("dc:Concept1ImgAlt2")}
              src={"/dc-1.2.jpg"}
            >
              <div>{t("dc:Concept1ImgCaption2")}</div>
            </ThumbnailWithCaption>
            <ThumbnailWithCaption
              title={t("dc:Concept1ImgTitle3")}
              alt={t("dc:Concept1ImgAlt3")}
              src={"/dc-1.3.jpg"}
            >
              <div>{t("dc:Concept1ImgCaption3")}</div>
            </ThumbnailWithCaption>
          </div>
        </div>
      </section>

      <CallToAction
        title={t("signupTitle")}
        description={t("becomeAParticipantDescription")}
        href={"/signup"}
        hrefText={t("signupTitle").slice(0, t("signupTitle").length - 1)}
      />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    ...(await serverSideTranslations(locale, ["common", "dc"])),
  },
});
