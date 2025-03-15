import styles from "./AboutMe.module.css";
import PostModel from "components/PostModel";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function AboutMe() {
    return (
       <PostModel
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Caio!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto de perfil"
                className={styles.fotoSobreMim}
            />
       </PostModel>
    )
}