import { LoginButton } from '../LoginButton/LoginButton'
import { TasksFilters } from '../TsaksFilters'
import { UserProfile } from '../UserProfile'
import styles from './sidebar.module.scss'

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <UserProfile />
            <TasksFilters />
            <LoginButton />
        </div>
    )
}
