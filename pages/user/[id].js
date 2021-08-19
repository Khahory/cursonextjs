import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

export default function Id(){
    const router = useRouter()

    return(
        <div>
            <Navbar />
            <h2>Detalles del usuario</h2>
            <p>ID del usuario: {router.query.id}</p>
        </div>
    )
}
