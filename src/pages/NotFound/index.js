import PrincipalButton from 'components/PrincipalButton';
import styles from './NotFound.module.css';
import erro404 from 'assets/erro_404.png';
import { useNavigate } from 'react-router';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Sorry! Page not found
                </h1>

                <p className={styles.paragrafo}>
                    The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
                </p>

                <div 
                    className={styles.botaoContainer}
                    onClick={() => navigate(-1)}
                >
                    <PrincipalButton heigth='lg'>
                        Return
                    </PrincipalButton>
                </div>
                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="Cachorro de óculos vestido como humano"
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )

}