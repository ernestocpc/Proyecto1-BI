import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function Main() {
    return (
        <div>
            <Container>
                <Row>
                    <h1>Clasificador de textos - UNFPA</h1>
                </Row>
                <Row>
                    <p>La siguiente aplicación se ha desarrollado en conjunto entre la
                        universidad de los Andes y El Fondo de Poblaciones de las Naciones Unidas
                        como estrategía de clasificación de texto. Con el objetivo de mejorar los
                        procesos de identificación de información textual
                    </p>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h1>¿Que va a encontrar en esta aplicación?</h1>
                </Row>
                <Row>
                    <Col>
                        <h2>About Us</h2>
                        <p>En esta sección encontrara más información sobre el contexto del proyecto.
                            Si no conoce el alcanze del proyecto o de lo que se trata, se recomienda que revise esta
                            sección primero
                        </p>
                    </Col>
                    <Col>
                        <h2>Clasificador</h2>
                        <p>
                            En esta sección puede hacer uso del modelo de clasificación.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Button variant="primary" size="lg" href='/classifier'>¡Comenzar!</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Main