import Head from "next/head";
import Layout from "../../layouts/Layout";
import Sidebar from "../../layouts/Sidebar";
import Header from "../../layouts/Header";
import { useRouter } from "next/router";
import DoctorPageFour from "../../consult/pagefour";

const DoctorPageFourPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Kanakku</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <DoctorPageFour />
    </div>
  );
};

DoctorPageFourPage.getLayout = (page) => (
  <Layout>
    {/* <Header />
        <Sidebar /> */}
    {page}
  </Layout>
);

export default DoctorPageFourPage;
