'use client'

import { useRouter } from 'next/navigation'
import styles from '@/styles/BackButton.module.css'

const BackButton = () => {
    const router = useRouter()

    return (
        <button className={styles.backButton} onClick={() => router.back()}>
            Back
        </button>
    )
}

export default BackButton