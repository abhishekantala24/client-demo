'use client'

import { useState } from 'react'
import BioToggle from './BioToggle'
import SkillAdder from './SkillAdder'
import styles from '@/styles/Profile.module.css'

interface ClientProfileProps {
    name: string
    bio: string
    initialSkills: string[]
}

const ClientProfile = ({ name, bio, initialSkills }: ClientProfileProps) => {
    const [skills, setSkills] = useState(initialSkills)

    const handleAddSkill = (newSkill: string) => {
        setSkills([...skills, newSkill])
        setTimeout(() => {
            console.log(`New skill added: ${newSkill}`)
        }, 1000)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{name}</h1>
            <BioToggle bio={bio} />
            <h2 className={styles.skillsHeader}>Skills</h2>
            <ul className={styles.skillsList}>
                {skills.map((skill, index) => (
                    <li key={index} className={styles.skill}>{skill}</li>
                ))}
            </ul>
            <SkillAdder onAdd={handleAddSkill} />
        </div>
    )
}

export default ClientProfile
