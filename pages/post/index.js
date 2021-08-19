
import Title from "../../components/Tittle";
import Layout from "../../components/Layout";
import React from "react";
import Link from "next/link";

export default function Post({posts}){
    //RENDERIZADO DESDE EL CLIENTE
    // const [posts, setPosts] = React.useState([])
    //
    // // Esto carga despues de cargar este componente
    // React.useState(() => {
    //     // Llamada api
    //     const fetchPosts = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //         const newPosts = await res.json()
    //         setPosts(newPosts)
    //     }
    //
    //     fetchPosts().then(r => console.log('done api posts'))
    // }, [])

    return(
        <Layout>
            <Title>Publicaciones</Title>
            <div className={'grid'}>
                {posts.map(post => {
                    return (
                        <Link href={`/post/[id]`} as={`/post/${post.id}`} key={post.id}>
                            <a className={'card'}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </a>
                        </Link>
                    )
                })}
            </div>
            <style jsx>
                {`
                  .grid {
                    display: flex;
                    flex-wrap: wrap;
                    max-width: 800px;
                    margin-top: 2rem;
                  }

                  .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    color: black;
                    text-decoration: none;
                    border: 2px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                  }

                  .card:hover,
                  .card:focus,
                  .card:active {
                    color: #0070f3;
                    border-color: #0070f3;
                  }

                  .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                  }

                  .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                  }
                `}
            </style>
        </Layout>
    )
}

//RENDERIZADO DEL LADO DEL SERVIDOR
// (la diferencia es que el JSX se muestra en el codigo fuente de la pagina y en el cliente no)
export async function getServerSideProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return {
        props: {
            posts
        }
    }
}
