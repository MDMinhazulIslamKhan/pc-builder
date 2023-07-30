import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div className="h-screen bg-slate-200 py-20">
      <Head>
        <title>Not found OurPC.com</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      <h1 className="text-center font-extrabold text-4xl">
        Page is not found.
      </h1>
      <Link href="/">
        <h5 className="text-center font-bold text-xl mt-5 text-accent hover:text-neutral">
          Go to home
        </h5>
      </Link>
    </div>
  );
};

export default NotFound;
