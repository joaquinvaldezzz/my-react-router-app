import type { MetaDescriptor } from "react-router";
import type { Route } from "./+types/home";

import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs): MetaDescriptor[] {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
