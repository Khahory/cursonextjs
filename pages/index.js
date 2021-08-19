import Title from "../components/Tittle";
import Layout from "../components/Layout";

export default function Index(){
    return(
        <Layout>
            <Title>Inicio</Title>
            Index
            <style>
                {`
                  p {
                    color: darkgray;
                  }

                  p:hover {
                    color: darkred;
                  }
                `}
            </style>
        </Layout>
    )
}
