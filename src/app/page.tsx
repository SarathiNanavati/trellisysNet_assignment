import PageContainer from "@/components/page-container/page-container";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trellisys.net Project Assignment</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <PageContainer />
      </main>
    </>
  );
}
