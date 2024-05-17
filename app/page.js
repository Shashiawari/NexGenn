import Image from "next/image";
import styles from "./page.module.css";
import Form from "@/components/Auth-Form";
import { getServerSession } from "next-auth";
import "bootstrap/dist/css/bootstrap.css";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import CustomCursor2 from "@/components/customcursor2";
export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/home");

  return (
    <>
    <CustomCursor2/>
      <Form />
    </>
  );
}
