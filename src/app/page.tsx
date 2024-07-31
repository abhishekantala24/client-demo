import { professionals } from '@/data/professionals'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Professional Profiles</h1>
      <ul className={styles.list}>
        {professionals.map(pro => (
          <li key={pro.id} className={styles.listItem}>
            <Link href={`/professionals/${pro.id}`} className={styles.link}>
              {pro.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
