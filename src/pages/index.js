import RootLayout from "@/Components/Layouts/RootLayout";
import Meta from "@/Components/meta/meta";
import { SessionProvider } from "next-auth/react";

const Home = () => {
  console.log(SessionProvider);
  return (
    <>
      <Meta />
      <h1 className="text-5xl">Welcome to pc builder</h1>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
