import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Context(){
    return(
        <div>
            <Container>
                <Row>
                    <h1>¿Que es esta aplicación?</h1>
                    <p>Esta aplicación contiene un modelo de clasificación basado en aprendizaje 
                        automático, que permite relacionar un texto con un ODS.
                    </p>
                    <p>Esta aplicación solo clasificara a un texto en tres posibles categorias:
                    </p>
                    <Container>
                        <ul>
                            <li>6. Agua limpia y saneamiento</li>
                            <li>7. Energía Asequible y no contaminante</li>
                            <li>16. Paz, justicia e instituciones sólidas</li>
                        </ul>
                    </Container>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h2>¿Que es un ODS?</h2>
                    <p>
                    Los ODS (Objetivos de desarrollo sostenible), son 17 objetivos planteados 
                    por las naciones unidas. Estos están diseñados para proveer un plan para 
                    lograr un futuro sostenible y próspero para la gente del planeta. 
                    Estos fueron establecidos en el año 2015, y se busca que estos sean completados 
                    para el año 2030.
                    </p>
                    <p>Para más informació puede visitar la pagina de las naciones unidas: <a href='https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/'>Objetivos de desarrollo sostenible - UN</a></p>
                </Row>
                <Row>
                    <h2>¿Por qué son importantes?</h2>
                    <p>
                        Sobre la situación actual referente al objetivo 6 y 7, en Colombia, se 
                        registra que el 93% de la población cuenta con acceso a agua, mientras 
                        que 96% cuenta con acceso a la electricidad y 70% con acceso a gas 
                        natural. Aunque estas cifras son altas para la región, aún hay alrededor 
                        de 3 millones de colombianos que no cuentan con acceso adecuado al agua, 
                        y casi 10 millones que no cuentan con acceso adecuado a cualquier tipo de energía, 
                        o su acceso no es el adecuado para su uso. Debido a esto, el atacar estos objetivos, 
                        directamente incrementaría la calidad de vida de casi 13 millones de colombianos.
                    </p>
                    <p>
                    Por otro lado, el objetivo 16 es de especial importancia para Colombia, en el marco del 
                    conflicto interno que se ha vivido desde más de 50 años. En donde las repercusiones de la violencia política 
                    y conflictos armados con guerrillas siguen estando vigente por todo el territorio nacional. 
                    De estos se resalta la ausencia de instituciones gubernamentales en territorios del país y la desaparición y 
                    desplazamiento forzado. Adicionalmente, este objetivo cobra importancia dentro del contexto del tratado de paz firmado en el 2016, 
                    en donde se busca poder revindicar a las víctimas del conflicto armado y aclarar lo sucedido para poder brindar justicia.
                    </p>
                </Row>
            </Container>
        </div>
    )
}

export default Context