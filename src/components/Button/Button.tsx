import styles from './button.module.scss'

type ButtonProps = {
    classname: string
    onClick: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
    classname,
    onClick,
    children,
    ...rest
}) => {
    return (
        <button
            className={`${styles.button} ${classname}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}
