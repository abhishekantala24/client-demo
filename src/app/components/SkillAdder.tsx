'use client'

import { useState } from 'react'
import styles from '@/styles/SkillAdder.module.css'

interface SkillAdderProps {
    onAdd: (skill: string) => void
}

const SkillAdder = ({ onAdd }: SkillAdderProps) => {
    const [skill, setSkill] = useState('')

    const handleAdd = () => {
        if (skill.trim()) {
            onAdd(skill)
            setSkill('')
        }
    }

    return (
        <div className={styles.container}>
            <input
                type="text"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                placeholder="Add a new skill"
                className={styles.input}
            />
            <button onClick={handleAdd} className={styles.button}>
                Add Skill
            </button>
        </div>
    )
}

export default SkillAdder
