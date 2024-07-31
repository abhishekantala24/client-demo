import { notFound } from 'next/navigation'
import { professionals } from '@/data/professionals'
import styles from '@/styles/Profile.module.css'
import BackButton from '@/app/components/BackButton'
import ClientProfile from '@/app/components/ClientProfile'

interface ProfilePageProps {
    params: {
        id: string
    }
}

const ProfilePage = ({ params }: ProfilePageProps) => {
    const professional = professionals.find(pro => pro.id === params.id)

    if (!professional) {
        notFound()
        return null
    }

    return (
        <div className={styles.container}>
            <BackButton />
            <ClientProfile
                name={professional.name}
                bio={professional.bio}
                initialSkills={professional.skills}
            />
        </div>
    )
}

export default ProfilePage