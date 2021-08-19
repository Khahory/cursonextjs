import { useRouter } from "next/router";
import Title from "../../components/Tittle";
import Layout from "../../components/Layout";

export default function Id(){
    const router = useRouter()

    return(
        <Layout>
            <Title>Post ID</Title>
            <h2>Detalles del post</h2>
            <p>ID del post: {router.query.id}</p>
        </Layout>
    )
}
