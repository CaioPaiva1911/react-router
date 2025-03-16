import './Post.css';
import styles from './Post.module.css';

import { useParams } from "react-router";
import posts from 'json/posts.json';
import PostModel from "components/PostModel";
import ReactMarkdown from "react-markdown";
import NotFound from 'pages/NotFound';
import DefaultPage from 'components/DefaultPage';
import PostCard from 'components/PostCard';

export default function Post() {
    const params = useParams();

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    })

    if(!post) {
        return <NotFound />
    }

    const postsRecommendeds = posts
        .filter((post) => post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        // <Routes>
        //     <Route path="*" element={<DefaultPage />}>
        //         <Route index element={
        //             <PostModel
        //                 fotoCapa={`/assets/posts/${post.id}/capa.png`}
        //                 titulo={post.titulo}
        //             >
        //                 <div className="post-markdown-container">
        //                     <ReactMarkdown>
        //                         {post.texto}    
        //                     </ReactMarkdown>
        //                 </div>
        //             </PostModel>
        //         } />
        //     </Route>
        // </Routes>

        <DefaultPage>
            <PostModel
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h2 className={styles.tituloOutrosPosts}>
                    Anothers posts can you like: 
                </h2>

                <ul className={styles.postsRecomendados}>
                    {postsRecommendeds.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>

            </PostModel>
        </DefaultPage>
    )

}