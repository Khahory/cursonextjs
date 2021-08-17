import { useRouter } from "next/router";

export default function post1(){
    const router = useRouter()

    return(
        <div>
            <h2>Detalles del post</h2>
            <p>ID del post: {router.query.post}</p>
        </div>
    )
}
