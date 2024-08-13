import Image from "next/image";
import styles from "./page.module.css";
import {useI18n} from "@/locales/client";

export default function Home() {
  const t = useI18n();
  return (
    <main className={styles.main}>
      <h1>{t('lastUpdate', {updatedAt: '2021-10-01'})}</h1>
    </main>
  );
}
