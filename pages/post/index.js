
import Title from "../../components/Tittle";
import Layout from "../../components/Layout";
import React from "react";
import Link from "next/link";

export default function Index(){
    const [posts, setPosts] = React.useState([])

    // Esto carga despues de cargar este componente
    React.useState(() => {
        // Llamada api
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const newPosts = await res.json()
            setPosts(newPosts)
        }

        fetchPosts().then(r => console.log('done api posts'))
    }, [])

    return(
        <Layout>
            <Title>Publicaciones</Title>
            <div>
                {posts.map(post => {
                    return (
                        <Link href={`/post/[id]`} as={`/post/${post.id}`} key={post.id}>
                            <a>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </Layout>
    )
}
