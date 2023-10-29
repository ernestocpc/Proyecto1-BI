import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'

import "./context.css"

function Context(){
    return(
        <div>
            <Container className='GContainer bg-primary text-white rounded-3 '>
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
                    <p>haz click en las siguientes imagenes si quieres conocer más acerca de los objetivos de desarrollo sostenible:</p>
                    </Container>
                </Row>
                <Row>
                <Col className='text-center'><a href='https://www.un.org/sustainabledevelopment/es/water-and-sanitation/'><img className='img-fluid rounded' alt='ODS 6. Agua limpia y saneamiento' src='https://www.unicef.org/sites/default/files/styles/crop_thumbnail/public/S-WEB-Goal-06.png?itok=GELGcmKf'/></a></Col>
                <Col className='text-center'><a href='https://www.un.org/sustainabledevelopment/es/energy/'><img className='img-fluid rounded' alt='ODS 7. Energía asequible y no contaminante' src='https://www.unicef.org/sites/default/files/styles/crop_thumbnail/public/S-WEB-Goal-07.png?itok=0xptJrFs'/></a></Col>
                <Col className='text-center'><a href='https://www.un.org/sustainabledevelopment/es/peace-justice/'><img className='img-fluid rounded' alt='ODS 16. Paz, justicia e instituciones solidas' src='https://www.unicef.org/sites/default/files/styles/crop_thumbnail/public/S-WEB-Goal-16.png?itok=zRRLXl8t'/></a></Col>
                </Row>
            </Container>
            <Container className='GContainer bg-secondary text-white rounded-3'>
                <Row>
                    <h2>¿Que es un ODS?</h2>
                    <Col className='text-center'>
                        <img className='img-fluid rounded-3 m-4' alt='Logo de los ODS de las naciones unidas' src='https://www.iberdrola.com/documents/20125/40855/Agenda2030_ESP_746x419.jpg/57424b56-9f4c-70ef-190b-2fee7bf39f94?t=1627884739022'/>
                    </Col>
                    <p>
                    Los ODS (Objetivos de desarrollo sostenible), son 17 objetivos planteados 
                    por las naciones unidas. Estos están diseñados para proveer un plan para 
                    lograr un futuro sostenible y próspero para la gente del planeta. 
                    Estos fueron establecidos en el año 2015, y se busca que estos sean completados 
                    para el año 2030.
                    </p>
                    <p>Para más información puede visitar la pagina de las naciones unidas: <a href='https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/'>Objetivos de desarrollo sostenible - UN</a></p>
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