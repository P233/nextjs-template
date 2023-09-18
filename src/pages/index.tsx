import clsx from "clsx";
import Head from "next/head";
import { Inter } from "next/font/google";
import css from "styles/pages/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage description." />
      </Head>

      <main className={clsx(css.Home, inter.className)}>Homepage</main>
    </>
  );
}
