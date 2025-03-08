import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.jpg';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Hello, World!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal!
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt='Círculo colorido'
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto de perfil'
                />
            </div>
        </div>
    )
}