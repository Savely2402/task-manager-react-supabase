import { Sidebar } from '../Sidebar'
import { TaskList } from '../TaskList'
import styles from './layout.module.scss'

export const Layout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <TaskList />
        </div>
    )
}
