import type { MetaDescriptor } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs): MetaDescriptor[] {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
    { name: "og:title", content: "New React Router App" },
    {
      name: "og:description",
      content: "Welcome to React Router!",
    },
    {
      name: "twitter:title",
      content: "New React Router App",
    },
    {
      name: "twitter:description",
      content: "Welcome to React Router!",
    },
  ];
}

export default function Home() {
  return (
    <main className="max-w-prose px-4 pt-4">
      <h1 className="mb-2 text-2xl font-semibold tracking-tight">Home</h1>
      <p className="leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic praesentium eum nostrum atque
        magnam, modi, est ut cumque iste, voluptate animi ipsum. Accusamus dolorem eos nesciunt
        labore culpa animi consequatur.
      </p>
    </main>
  );
}
