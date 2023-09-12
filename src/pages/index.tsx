import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs Hello World Testing App</title>
      </Head>
      <main className={`${inter.className} text-center`}>
        <h1 className="mt-12 text-5xl text-center">
          Hello Nextjs + Typescript
        </h1>
        <p className="mt-10 text-xl opacity-80">Nice to meet you</p>
      </main>
    </>
  );
}
