import { FaRightToBracket, FaRightFromBracket } from '../../utils/Icons'
import styles from './loginButton.module.scss'
import { Button } from '../Button'

export const LoginButton = () => {
    return (
        <Button classname={styles.loginButton} onClick={() => {}}>
            <FaRightToBracket /> Sign Out
        </Button>
    )
}
