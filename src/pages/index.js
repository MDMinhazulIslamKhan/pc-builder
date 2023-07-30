import RootLayout from "@/Components/Layouts/RootLayout";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>OurPC.com</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      <h1 className="text-5xl">Welcome to Home for testing</h1>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
