import Head from "next/head";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Header />
        </div>
      </div>
    </main>
  );
}
