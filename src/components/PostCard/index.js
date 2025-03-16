import { Link } from "react-router";
import styles from "./PostCard.module.css";
import PrincipalButton from "components/PrincipalButton";

export default function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img 
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do Post"
                />

                <h2 className={styles.titulo}>
                    {post.title}
                </h2>

                <PrincipalButton>Ler</PrincipalButton>
            </div>
        </Link>
    )
}