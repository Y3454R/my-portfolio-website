import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");

  // The following JSX will not be rendered due to the redirect
  return <div>{/* This content will not be shown due to redirection */}</div>;
}
