import { useRouter } from "next/router";

export default function Id(){
    const router = useRouter()

    return(
        <div>
            <h2>Detalles del usuario</h2>
            <p>ID del usuario: {router.query.id}</p>
        </div>
    )
}
