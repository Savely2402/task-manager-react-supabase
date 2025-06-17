import { LoginButton } from '../LoginButton/LoginButton'
import { TaskFilters } from '../TaskFilters'
import { UserProfile } from '../UserProfile'
import styles from './sidebar.module.scss'

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <UserProfile />
            <TaskFilters />
            <LoginButton />
        </div>
    )
}
