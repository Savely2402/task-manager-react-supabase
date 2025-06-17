import { Sidebar } from '../Sidebar'
import styles from './layout.module.scss'

export const Layout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />
        </div>
    )
}
