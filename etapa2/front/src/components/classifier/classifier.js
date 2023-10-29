import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList } from 'recharts';

import "./classifier.css"


function Classifier() {
    const [formValues, setFormValues] = useState({ text: "" })
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

    const sendText = () => {
        if (formValues.text.length !== 0) {
            handlePost()
            console.log("Se realiza el envio :D")
        } else {
            alert("No ha ingresado ningun texto!!!")
        }
    }

    const formatPercentage = (value) => `${(value * 100).toFixed(2)}%`;

    const returnLabel = () => {
        if (label === 6) {
            return (<p>El texto ingresado se alinea con el ODS 6. Agua limpia y saneamiento</p>)
        } else if (label === 7) {
            return (<p>El texto ingresado se alinea con el ODS 7. Energía Asequible y no contaminante </p>)
        } else if (label === 16) {
            return (<p>El texto ingresado se alinea con el ODS 16. Paz, justicia e instituciones sólidas</p>)
        }
    }

    return (
        <>
            <Container style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                <h2>Ingrese su texto</h2>
                <Form.Group style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <Form.Control as="textarea" onChange={handleTextChange} value={formValues.text} rows={8} />
                </Form.Group>
                <div className='text-center'>
                <Button variant='primary' onClick={sendText} >Clasificar</Button>
                </div>
            </Container>
            {label !== -1 && (
                <>
                    <Container style={{ paddingTop: '10px', paddingBottom: '10px' }}>
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