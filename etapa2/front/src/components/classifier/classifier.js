import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList } from 'recharts';

import "./classifier.css"


function Classifier() {
    const [formValues, setFormValues] = useState({ text: "", algorithm: "" })
    const [label, setLabel] = useState(-1)
    const [chartData, setChartData] = useState([
        { category: 'ODS 6', probability: 0 },
        { category: 'ODS 7', probability: 0 },
        { category: 'ODS 16', probability: 0 },
    ]);


    const URL = 'http://127.0.0.1:8000/predict'

    async function handlePost() {
        const response = await fetch(URL,
            {
                method: "POST",
                body: JSON.stringify(formValues),
                headers: { "Content-type": 'application/json;charset=utf-8' }
            })
        const data = await response.json()
        setChartData([
            { category: 'ODS 6', probability: data.probabilidades[6] || 0 },
            { category: 'ODS 7', probability: data.probabilidades[7] || 0 },
            { category: 'ODS 16', probability: data.probabilidades[16] || 0 },
        ]);

        setLabel(data.resultado)
    }

    const handleTextChange = (e) => {
        setFormValues({ ...formValues, text: e.target.value })
    }

    const handleSelectChange = (e) => {
        setFormValues({...formValues, algorithm: e.target.value}) 
    } 

    const sendText = () => {
        if (formValues.text.length !== 0) {
            handlePost()
            console.log(formValues)
        } else {
            alert("No ha ingresado ningun texto!!!")
        }
    }

    const formatPercentage = (value) => `${(value * 100).toFixed(2)}%`;

    const returnLabel = () => {
        if (label === 6) {
            return (
                <div>
                    <Row><p>El texto ingresado se alinea con el <b className='text-wrap bg-6 rounded-2'>ODS 6. Agua limpia y saneamiento</b></p></Row>
                    <Row className='text-center'><a href='https://www.un.org/sustainabledevelopment/es/water-and-sanitation/'><img className='img-fluid rounded' alt='ODS 6. Agua limpia y saneamiento' src='https://www.unicef.org/sites/default/files/styles/crop_thumbnail/public/S-WEB-Goal-06.png?itok=GELGcmKf'/></a></Row>
                </div>
            )
        } else if (label === 7) {
            return (
                <div>
                    <Row><p>El texto ingresado se alinea con el <b className='text-wrap bg-7 rounded-2'>ODS 7. Energía Asequible y no contaminante</b> </p></Row>
                    <Row className='text-center'><a href='https://www.un.org/sustainabledevelopment/es/energy/'><img className='img-fluid rounded' alt='ODS 7. Energía asequible y no contaminante' src='https://www.unicef.org/sites/default/files/styles/crop_thumbnail/public/S-WEB-Goal-07.png?itok=0xptJrFs'/></a></Row>
                </div>
            )
        } else if (label === 16) {
            return (
                <div>
                    <Row><p>El texto ingresado se alinea con el <b className='text-wrap bg-16 rounded-2'>ODS 16. Paz, justicia e instituciones sólidas</b></p></Row>
                    <Row className='text-center'><a href='https://www.un.org/sustainabledevelopment/es/peace-justice/'><img className='img-fluid rounded' alt='ODS 16. Paz, justicia e instituciones solidas' src='https://www.unicef.org/sites/default/files/styles/crop_thumbnail/public/S-WEB-Goal-16.png?itok=zRRLXl8t'/></a></Row>
                </div>
            )
        }
    }

    const containerBg = () => {
        if (label===6) {
            return ('bg-6 rounded-3 text-white')
        } else if (label===7) {
            return ('bg-7 rounded-3 text-white')
        } else if (label===16){
            return ('bg-16 rounded-3 text-white')
        }
    }

    return (
        <>
            <Container style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                <h2>Ingrese su texto</h2>
                <Form.Text muted>
                    Ingresa tu texto en aquí y haz click en clasificar para poder ver con que ODS se alinea
                </Form.Text>
                <Form.Group style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <Form.Control as="textarea" onChange={handleTextChange} value={formValues.text} rows={8} />
                </Form.Group>
                <Form.Group>
                    <h3>Tipo de clasificador:</h3>
                    <Form.Select value={formValues.algorithm} onChange={handleSelectChange}>
                        <option value='cnc'>Complement Naive Bayes</option>
                        <option value='sdg'>SVM</option>
                        <option value='rfc'>Random Forest</option>
                    </Form.Select>
                </Form.Group>
                <p></p>
                <div className='text-center'>
                <Button variant='primary' onClick={sendText} >Clasificar</Button>
                </div>
            </Container>
            {label !== -1 && (
                <>
                    <Container className={containerBg()} style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        <h2>Resultado de la clasificación</h2>
                        {returnLabel()}
                    </Container>
                    <Container style={{ paddingTop: '10px', paddingBottom: '10px'}}>
                        <h2>Gráfico de Probabilidades</h2>
                            <BarChart width={500} height={300} data={chartData}>
                                <XAxis dataKey="category" />
                                <YAxis tickFormatter={formatPercentage} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="probability" fill="#8884d8">
                                    <LabelList
                                        dataKey="probability"
                                        position="top"
                                        formatter={(value) => `${(value * 100).toFixed(2)}%`}
                                    />
                                </Bar>
                            </BarChart>
                    </Container>
                </>

            )}
        </>
    )
}


export default Classifier