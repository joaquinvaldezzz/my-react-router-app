import type { MetaDescriptor } from "react-router";
import type { Route } from "./+types/home";

import { Welcome } from "../welcome/welcome";

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
  return <Welcome />;
}
