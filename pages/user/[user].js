import { useRouter } from "next/router";

export default function user1(){
    const router = useRouter()

    return(
        <div>
            <h2>Detalles del usuario</h2>
            <p>ID del usuario: {router.query.user}</p>
        </div>
    )
}
