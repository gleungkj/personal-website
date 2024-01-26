import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { clerkClient } from "@clerk/nextjs";

export default async function Home() {

  const adminList = await clerkClient.organizations.getOrganizationMembershipList({
    organizationId: "org_2bV5ItY4IrVWUVt71KDqm4ZjfLa"
  })

  console.log(adminList)

  const userList = await clerkClient.users.getUserList({
    orderBy: '-created_at',
    limit:500
  })

  console.log(userList)

  return (
    <main className={styles.main}>
      <h1>Hello, Dashboard Page!</h1>
    </main>
  );
}
