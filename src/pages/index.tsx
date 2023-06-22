import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

type Todo = {
  id: number;
  title: string;
};

export default function Home({ todos }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Nextjs Testing App</title>
      </Head>
      <main className={`${inter.className} text-center`}>
        <h1 className="mt-12 text-5xl text-center">Hello Nextjs</h1>
        <h2 className="my-6 text-2xl">List of todos</h2>
        <ul>
          {todos.map((todo: Todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ todos: Todo[] }> = async () => {
  const res = await fetch("http://localhost:3000/api/todos");
  const todos = await res.json();

  return {
    props: {
      todos,
    },
  };
};
