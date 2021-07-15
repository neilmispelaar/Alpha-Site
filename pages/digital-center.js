import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { TextButtonField } from "../components/molecules/TextButtonField";
import { useRouter } from "next/router";
import { CallToAction } from "../components/molecules/CallToAction";

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

<section class="layout-container mb-10">

<h2 id="pageMainTitle" tabindex="-1" class="flex-wrap text-xl mt-6">Digital Center Product Overview</h2>

  <p class="text-base mt-3">The goal for our product is to bring the experience of visiting a Service Canada location online. We call our product Digital Centre, but eventually, it will simply be the new Service Canada website. Think of it as the “home base” where your new Service Canada experience will happen. Our goal is to empower you to learn about benefits and services specific to your situation, and then apply and manage your benefits.</p>

  <p class="text-base mt-3">This is also the place where you will create an account, have your identity verified, and later, log in. The Digital Centre will collect your benefit choices and profile and share this with frontline Service Canada staff. If you decide to call or visit a location, staff will already have your account information to serve you faster. We are still thinking about how this will all work, and we can’t do it without you! </p>

    <h3 class="text-lg mt-4">Concept 1: Finding Information on Benefits and Services</h3>
    <p class="text-base mt-3">Miskomin is preparing to have her first child. She’s not sure which benefits apply to her. She lands on the Service Canada home page and notices a “life journey” for having a child. She clicks on the link and discovers new information on applicable benefits and services for expectant First Nations mothers.</p>

    <p class="text-base mt-3">A few months later, Miskomin realizes that she needs to apply for maternity employment insurance. She Googles “maternity EI” and clicks on a link to the Service Canada maternity EI page and applies online. She then remembers there are other benefits she’s eligible for. She notices a search bar on the Service Canada page. She types in the keywords and presses the search button. A list of benefits come up along with a panel with search filters. She adjusts her filters to find additional programs that she can apply for. </p>

    <p class="mt-3 text-base">If you were Miskomin, how would you want to find maternity benefits? Would it be through a life journey guide, completing a search on Service Canada, or both? </p>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-3">

      <div>
      <h4 class="text-lg mt-3">Image 1: Homepage</h4>
          <figure class="shadow-experiment-shadow">
          <img src="https://uhdwallpapers.org/uploads/converted/20/01/14/the-mandalorian-5k-1920x1080_477555-mm-90.jpg" alt="" class="thumbnail"/>
          <figcaption class="text-sm p-8">The Service Canada homepage serves over (xxx,xxx) people a year. We designed a more personalized and intuitive interface based on what we learned from current analytics and user research. The first function on the homepage is the Benefit and Services search tool, which allows you to search through the full directory of our services using common language, like “having a baby”. We use regional data to customize a list of popular benefits based on current user behaviour on the Service Canada website. </figcaption>
          </figure>
      </div>

      <div>
     <h4 class="text-lg mt-3">Image 1: Homepage</h4>
          <figure class="shadow-experiment-shadow">
          <img src="https://uhdwallpapers.org/uploads/converted/20/01/14/the-mandalorian-5k-1920x1080_477555-mm-90.jpg" alt="" class="thumbnail"/>
          <figcaption class="text-sm p-8">The Service Canada homepage serves over (xxx,xxx) people a year. We designed a more personalized and intuitive interface based on what we learned from current analytics and user research. The first function on the homepage is the Benefit and Services search tool, which allows you to search through the full directory of our services using common language, like “having a baby”. We use regional data to customize a list of popular benefits based on current user behaviour on the Service Canada website. </figcaption>
          </figure>
      </div>
         <div>
     <h4 class="text-lg mt-3">Image 1: Homepage</h4>
          <figure class="shadow-experiment-shadow">
          <img src="https://uhdwallpapers.org/uploads/converted/20/01/14/the-mandalorian-5k-1920x1080_477555-mm-90.jpg" alt="" class="thumbnail"/>
          <figcaption class="text-sm p-8">The Service Canada homepage serves over (xxx,xxx) people a year. We designed a more personalized and intuitive interface based on what we learned from current analytics and user research. The first function on the homepage is the Benefit and Services search tool, which allows you to search through the full directory of our services using common language, like “having a baby”. We use regional data to customize a list of popular benefits based on current user behaviour on the Service Canada website. </figcaption>
          </figure>
      </div>
      </div>
 <hr class="mt-12"/>

 <h3 class="text-lg mt-8">Concept 1: Finding Information on Benefits and Services</h3>
    <p class="text-base mt-3">Miskomin is preparing to have her first child. She’s not sure which benefits apply to her. She lands on the Service Canada home page and notices a “life journey” for having a child. She clicks on the link and discovers new information on applicable benefits and services for expectant First Nations mothers.</p>

    <p class="text-base mt-3">A few months later, Miskomin realizes that she needs to apply for maternity employment insurance. She Googles “maternity EI” and clicks on a link to the Service Canada maternity EI page and applies online. She then remembers there are other benefits she’s eligible for. She notices a search bar on the Service Canada page. She types in the keywords and presses the search button. A list of benefits come up along with a panel with search filters. She adjusts her filters to find additional programs that she can apply for. </p>

    <p class="mt-3 text-base">If you were Miskomin, how would you want to find maternity benefits? Would it be through a life journey guide, completing a search on Service Canada, or both? </p>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-3">

      <div>
      <h4 class="text-lg mt-3">Image 1: Homepage</h4>
          <figure class="shadow-experiment-shadow">
          <img src="https://uhdwallpapers.org/uploads/converted/20/01/14/the-mandalorian-5k-1920x1080_477555-mm-90.jpg" alt="" class="thumbnail"/>
          <figcaption class="text-sm p-8">The Service Canada homepage serves over (xxx,xxx) people a year. We designed a more personalized and intuitive interface based on what we learned from current analytics and user research. The first function on the homepage is the Benefit and Services search tool, which allows you to search through the full directory of our services using common language, like “having a baby”. We use regional data to customize a list of popular benefits based on current user behaviour on the Service Canada website. </figcaption>
          </figure>
      </div>

      <div>
     <h4 class="text-lg mt-3">Image 1: Homepage</h4>
          <figure class="shadow-experiment-shadow">
          <img src="https://uhdwallpapers.org/uploads/converted/20/01/14/the-mandalorian-5k-1920x1080_477555-mm-90.jpg" alt="" class="thumbnail"/>
          <figcaption class="text-sm p-8">The Service Canada homepage serves over (xxx,xxx) people a year. We designed a more personalized and intuitive interface based on what we learned from current analytics and user research. The first function on the homepage is the Benefit and Services search tool, which allows you to search through the full directory of our services using common language, like “having a baby”. We use regional data to customize a list of popular benefits based on current user behaviour on the Service Canada website. </figcaption>
          </figure>
      </div>
         <div>
     <h4 class="text-lg mt-3">Image 1: Homepage</h4>
          <figure class="shadow-experiment-shadow">
          <img src="https://uhdwallpapers.org/uploads/converted/20/01/14/the-mandalorian-5k-1920x1080_477555-mm-90.jpg" alt="" class="thumbnail"/>
          <figcaption class="text-sm p-8">The Service Canada homepage serves over (xxx,xxx) people a year. We designed a more personalized and intuitive interface based on what we learned from current analytics and user research. The first function on the homepage is the Benefit and Services search tool, which allows you to search through the full directory of our services using common language, like “having a baby”. We use regional data to customize a list of popular benefits based on current user behaviour on the Service Canada website. </figcaption>
          </figure>
      </div>
      </div>

      <hr class="mt-12"/>

       <h3 class="text-lg mt-8">Concept 1: Finding Information on Benefits and Services</h3>
    <p class="text-base mt-3">Miskomin is preparing to have her first child. She’s not sure which benefits apply to her. She lands on the Service Canada home page and notices a “life journey” for having a child. She clicks on the link and discovers new information on applicable benefits and services for expectant First Nations mothers.</p>

    <p class="text-base mt-3">A few months later, Miskomin realizes that she needs to apply for maternity employment insurance. She Googles “maternity EI” and clicks on a link to the Service Canada maternity EI page and applies online. She then remembers there are other benefits she’s eligible for. She notices a search bar on the Service Canada page. She types in the keywords and presses the search button. A list of benefits come up along with a panel with search filters. She adjusts her filters to find additional programs that she can apply for. </p>

    <p class="mt-3 text-base">If you were Miskomin, how would you want to find maternity benefits? Would it be through a life journey guide, completing a search on Service Canada, or both? </p>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-3">

      <div>
      <h4 class="text-lg mt-3">Image 1: Homepage</h4>
          <figure class="shadow-experiment-shadow">
          <img src="https://uhdwallpapers.org/uploads/converted/20/01/14/the-mandalorian-5k-1920x1080_477555-mm-90.jpg" alt="" class="thumbnail"/>
          <figcaption class="text-sm p-8">The Service Canada homepage serves over (xxx,xxx) people a year. We designed a more personalized and intuitive interface based on what we learned from current analytics and user research. The first function on the homepage is the Benefit and Services search tool, which allows you to search through the full directory of our services using common language, like “having a baby”. We use regional data to customize a list of popular benefits based on current user behaviour on the Service Canada website. </figcaption>
          </figure>
      </div>

      <div>
     <h4 class="text-lg mt-3">Image 1: Homepage</h4>
          <figure class="shadow-experiment-shadow">
          <img src="https://uhdwallpapers.org/uploads/converted/20/01/14/the-mandalorian-5k-1920x1080_477555-mm-90.jpg" alt="" class="thumbnail"/>
          <figcaption class="text-sm p-8">The Service Canada homepage serves over (xxx,xxx) people a year. We designed a more personalized and intuitive interface based on what we learned from current analytics and user research. The first function on the homepage is the Benefit and Services search tool, which allows you to search through the full directory of our services using common language, like “having a baby”. We use regional data to customize a list of popular benefits based on current user behaviour on the Service Canada website. </figcaption>
          </figure>
      </div>
         <div>
     <h4 class="text-lg mt-3">Image 1: Homepage</h4>
          <figure class="shadow-experiment-shadow">
          <img src="https://uhdwallpapers.org/uploads/converted/20/01/14/the-mandalorian-5k-1920x1080_477555-mm-90.jpg" alt="" class="thumbnail"/>
          <figcaption class="text-sm p-8">The Service Canada homepage serves over (xxx,xxx) people a year. We designed a more personalized and intuitive interface based on what we learned from current analytics and user research. The first function on the homepage is the Benefit and Services search tool, which allows you to search through the full directory of our services using common language, like “having a baby”. We use regional data to customize a list of popular benefits based on current user behaviour on the Service Canada website. </figcaption>
          </figure>
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
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
