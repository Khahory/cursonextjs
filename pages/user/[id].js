import { useRouter } from "next/router";

import Title from "../../components/Tittle";
import Layout from "../../components/Layout";

export default function Id(){
    const router = useRouter()

    return(
        <Layout>
            <Title>Usuario ID</Title>
            <h2>Detalles del usuario</h2>
            <p>ID del usuario: {router.query.id}</p>
        </Layout>
    )
}
