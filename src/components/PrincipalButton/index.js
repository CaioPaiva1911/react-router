import styles from './PrincipalButton.module.css';

export default function PrincipalButton({ children, heigth }) {
    return (
        <button className={`
            ${styles.botaoPrincipal}
            ${styles[heigth]}`
        }>
            {children}
        </button>
    )
}