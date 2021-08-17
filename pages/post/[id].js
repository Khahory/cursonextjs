import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

export default function Id(){
    const router = useRouter()

    return(
        <div>
            <Navbar />
            <h2>Detalles del post</h2>
            <p>ID del post: {router.query.id}</p>
        </div>
    )
}
