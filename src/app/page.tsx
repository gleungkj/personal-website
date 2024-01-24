import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello, Dashboard Page!</h1>
    </main>
  );
}
