import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
<<<<<<< Updated upstream
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList } from 'recharts';

import "./classifier.css"
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";
import ClassList from "./class_list";
>>>>>>> Stashed changes


function Classifier() {
<<<<<<< Updated upstream
    const [formValues, setFormValues] = useState({ text: "", algorithm: "cnb" })
    const [label, setLabel] = useState(-1)
    const [chartData, setChartData] = useState([
        { category: 'ODS 6', probability: 0 },
        { category: 'ODS 7', probability: 0 },
        { category: 'ODS 16', probability: 0 },
=======
  const [formValues, setFormValues] = useState({ text: "", algorithm: "cnb" });
  const [label, setLabel] = useState(-1);
  const [chartData, setChartData] = useState([
    { category: "ODS 6", probability: 0 },
    { category: "ODS 7", probability: 0 },
    { category: "ODS 16", probability: 0 },
  ]);

  const[labelList, setLabelList] = useState([{predict:6, prob6:1, prob7:0, prob16:0}])

  const URL = "http://127.0.0.1:8000/predict";
  const URL_list = "http://127.0.0.1:8000/predict";

  async function handlePost() {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: { "Content-type": "application/json;charset=utf-8" },
    });
    const data = await response.json();
    setChartData([
      { category: "ODS 6", probability: data.probabilidades[6] || 0 },
      { category: "ODS 7", probability: data.probabilidades[7] || 0 },
      { category: "ODS 16", probability: data.probabilidades[16] || 0 },
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    const handleTextChange = (e) => {
        setFormValues({ ...formValues, text: e.target.value })
=======
  const formatPercentage = (value) => `${(value * 100).toFixed(2)}%`;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormValues({ ...formValues, file: selectedFile });
  };

  const handleFileSubmit = async () => {
    if (formValues.file) {
      const formData = new FormData();
      formData.append("file", formValues.file);
      const response = await fetch(URL_list, {
        method: "POST",
        body: formData,
      });
      // const data = await response.json();
      // Process the response as needed, just like with text input
      // setLabelList(data)
    } else {
      alert("No file selected!");
>>>>>>> Stashed changes
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
                        <option value='cnb'>Complement Naive Bayes</option>
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
<<<<<<< Updated upstream
    )
=======
      )}
      {(labelList.length !==0) && (
        <>
          <Container className='scrollable' style={{ paddingTop: "10px", paddingBottom: "10px"}}>
            <h2>Resultado clasificador de archivos</h2>
            <ClassList array={labelList}/>
          </Container>
        </>
      )

      }
    </>
  );
>>>>>>> Stashed changes
}


export default Classifier