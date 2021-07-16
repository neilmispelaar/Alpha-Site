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
  caption = "The Service Canada homepage serves over (xxx,xxx) people a year.",
}) {
  return (
    <div>
      <h3 className="text-lg mt-3">{title}</h3>
      <figure className="shadow-experiment-shadow">
        <img src={src} alt="" className="border-b-2" />
        <figcaption className="text-base p-8">{caption}</figcaption>
      </figure>
    </div>
  );
}

ThumbnailWithCaption.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  caption: PropTypes.string,
};

const imgSrc =
  "../dc-1.1.jpg";

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
          className="mb-10 text-h1l font-bold sm:w-max"
          tabIndex="-1"
        >
          {t("dc:h1")}
        </h1>
        <p className="text-base mt-3">{t("dc:intro-1")}</p>
        <p className="text-base mt-3">{t("dc:intro-2")}</p>

        <h2 className="text-lg mt-8">{t("dc:h2-1")}</h2>
        <p className="text-base mt-6">{t("dc:concept1-1")}</p>
        <p className="text-base mt-6">{t("dc:concept1-2")}</p>
        <p className="text-base mt-6">{t("dc:concept1-3")}</p>
        
        <div className="mx-auto">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="flex justify-center">
          <ThumbnailWithCaption
            title={t("dc:concept1-imgTitle-1")}
            src={imgSrc}
            caption={t("dc:concept1-imgCaption-1")}
          />
          </div>

           <div class="flex justify-center">
          <ThumbnailWithCaption
            title={"Image 2: Homepage"}
            src={imgSrc}
            caption={t("dc:concept1-imgCaption-1")}
          />
          </div>

           <div class="flex justify-center">
          <ThumbnailWithCaption
            title={"Image 3: Homepage"}
            src={imgSrc}
            caption={t("dc:concept1-imgCaption-1")}
          />
          </div>

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
