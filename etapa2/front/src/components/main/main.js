import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./main.css";

function Main() {
  return (
    <>
      <div className="jumbotron bg-cover" id="banner">
        <div className="container py-5 text-center">
          <h1 className="display-4 font-weight-bold titulo">
            Bienvenido al clasificador de textos - UNFPA
          </h1>
          <p className="font-italic subtitulo">
            La siguiente aplicación se ha desarrollado en conjunto con la
            Universidad de los Andes y El Fondo de Poblaciones de las Naciones
            Unidas como estrategía de clasificación de texto. Esto, con el objetivo de
            mejorar los procesos de identificación de información textual.
          </p>
          <Button
            className="main-button"
            size="lg"
            href="/classifier"
            style={{ backgroundColor: "#E08145", borderColor: "#E08145" }}
          >
            ¡Comenzar!
          </Button>
        </div>
      </div>
      <Container style={{ paddingTop: "1rem" }}>
        <Row>
          <h1>¿Que va a encontrar en esta aplicación?</h1>
        </Row>
        <Row>
          <Col>
            <h2>Acerca de</h2>
            <p>
              En esta sección encontrara más información sobre el contexto del
              proyecto. Si no conoce el alcanze del proyecto o de lo que se
              trata, se recomienda que revise esta sección primero
            </p>
          </Col>
          <Col>
            <h2>Clasificador</h2>
            <p>En esta sección puede hacer uso del modelo de clasificación.</p>
          </Col>
        </Row>
      </Container>
      <Container style={{ paddingBottom: "3rem" }}>
        <Row>
          <h1>Nuestro objetivo</h1>
        </Row>
        <Row>
          <Col xs={12}>
            <p>
              El objetivo principal de esta aplicación es proporcionar a la
              empresa una herramienta efectiva para clasificar texto de manera
              rápida y precisa en función de su relevancia con respecto a tres
              Objetivos de Desarrollo Sostenible (ODS) clave: Agua limpia y
              saneamiento (ODS 6), Energía Asequible y no contaminante (ODS 7),
              y Paz, justicia e instituciones sólidas (ODS 16). Al permitir que
              la empresa clasifique textos en estas categorías, la aplicación
              busca facilitar la identificación de información relevante
              relacionada con estos ODS. Esto, a su vez, puede contribuir a la
              toma de decisiones informadas y estratégicas, ayudando a la
              empresa a enfocar sus esfuerzos en áreas específicas de interés y
              a alinear sus acciones con los objetivos de desarrollo sostenible,
              lo que es fundamental en la búsqueda de un impacto positivo tanto
              en la sociedad como en el medio ambiente.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button
              style={{ backgroundColor: "#E08145", borderColor: "#E08145", color: "white" }}
              href="/about-us"
            >
              ¡Conoce más!
            </Button>
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default Main;
