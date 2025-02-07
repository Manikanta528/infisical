import { useTranslation } from "react-i18next";
import Head from "next/head";

import { DashboardPage } from "@app/views/DashboardPage";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("common.head-title", { title: t("dashboard.title") })}</title>
        <link rel="icon" href="/infisical.ico" />
        <meta property="og:image" content="/images/message.png" />
        <meta property="og:title" content={String(t("dashboard.og-title"))} />
        <meta name="og:description" content={String(t("dashboard.og-description"))} />
      </Head>
      <div className="h-full">
        <DashboardPage />
      </div>
    </>
  );
};

export default Dashboard;

Dashboard.requireAuth = true;
