import profileImage from '../../../public/avatar1.png'
import styles from './userProfile.module.scss'

export const UserProfile = () => {
    return (
        <div className={styles.profile}>
            <img
                src={profileImage}
                alt="Profile image"
                className={styles.profile__image}
            />
            <p>Maclinz Maclinz</p>
        </div>
    )
}
