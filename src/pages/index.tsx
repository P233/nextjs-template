// import { clsx } from "clsx";
import Head from "next/head";
import css from "styles/pages/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage description." />
      </Head>

      <main className={css.Home}>Homepage</main>
    </>
  );
}
