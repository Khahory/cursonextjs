import { useRouter } from "next/router";
import Title from "../../components/Tittle";
import Layout from "../../components/Layout";

export default function Id({post}){
    const router = useRouter()

    return(
        <Layout>
            <Title>Post ID</Title>
            <div className='card'>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <style jsx>
                {`
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
                `}
            </style>
        </Layout>
    )
}

//RENDERIZADO DEL LADO DEL SERVIDOR
// (la diferencia es que el JSX se muestra en el codigo fuente de la pagina y en el cliente no)
export async function getServerSideProps(context){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await res.json()
    return {
        props: {
            post
        }
    }
}
