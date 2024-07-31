'use client'

import { useState } from 'react'
import styles from '@/styles/Profile.module.css'

interface BioToggleProps {
  bio: string
}

const BioToggle = ({ bio }: BioToggleProps) => {
  const [showBio, setShowBio] = useState(true)

  return (
    <div>
      <button onClick={() => setShowBio(!showBio)}>
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      {showBio && <p className={styles.bio}>{bio}</p>}
    </div>
  )
}

export default BioToggle
