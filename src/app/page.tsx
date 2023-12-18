import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Name here</div>       
      <Header />
    </main>
  )
}
