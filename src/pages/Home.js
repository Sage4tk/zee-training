import { useCollection } from "react-firebase-hooks/database";

//styles
import { Container } from "react-bootstrap"

export default function Home() {

    return (
        <>
        <Container className="bg-dark p-5 rounded" fluid>
            <h1 className="text-center" style={{color: "#DAA520", letterSpacing: "4px"}}>ZEE TRAINING</h1>
        </Container>
        <Container>
            <h2>LO</h2>
        </Container>
        </>
    )
}