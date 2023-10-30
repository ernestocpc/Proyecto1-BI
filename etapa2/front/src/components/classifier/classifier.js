import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "rc-tooltip/assets/bootstrap.css";
import RcTooltip  from "rc-tooltip";
import { BarChart, Bar, XAxis, YAxis, Legend, LabelList, Tooltip } from "recharts";
import "./classifier.css";
import ClassList from "./classifierList";


function Classifier() {
  const [formValues, setFormValues] = useState({ text: "", algorithm: "cnb" });
  const [label, setLabel] = useState(-1);
  const [chartData, setChartData] = useState([
    { category: "ODS 6", probability: 0 },
    { category: "ODS 7", probability: 0 },
    { category: "ODS 16", probability: 0 },
  ]);
  const[labelList, setLabelList] = useState([]);

  const URL = "http://127.0.0.1:8000/predict";
  const URL_list = "http://127.0.0.1:8000/predict-list";
  async function handlePost() {
    const newFormValues = {text: formValues.text, algorithm: formValues.algorithm, data: []};

    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(newFormValues),
      headers: { "Content-type": "application/json;charset=utf-8" },
    });
    const data = await response.json();
    setChartData([
      { category: "ODS 6", probability: data.probabilidades[6] || 0 },
      { category: "ODS 7", probability: data.probabilidades[7] || 0 },
      { category: "ODS 16", probability: data.probabilidades[16] || 0 },
    ]);

    setLabel(data.resultado);
  }

  async function handleFilePost() {

    console.log(formValues);
    const response = await fetch(URL_list, {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: { "Content-type": "application/json;charset=utf-8" },
    }); 
    const data = await response.json();
    setLabelList(data);
    // TODO: Ganarle a la asincronía
  }



  const handleTextChange = (e) => {
    setFormValues({ ...formValues, text: e.target.value });
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, algorithm: e.target.value });
  };

  const sendText = () => {
    if (formValues.text.length !== 0) {
      handlePost();
    } else {
      alert("No ha ingresado ningun texto!!!");
    }
  };

  const formatPercentage = (value) => `${(value * 100).toFixed(2)}%`;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormValues({ ...formValues, file: selectedFile });
  };

  const handleFileSubmit = () => {
    if (formValues.file) {
      const reader = new FileReader();
      reader.readAsText(formValues.file);
  
      reader.onload = (e) => {
        const text = e.target.result;
        const lines = text.split(";");
        const data = [];
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          const row = line.split(",");
          data.push(row);
        }
  
        // Use a temporary variable for the updated state
        const updatedFormValues = { ...formValues, data: data };
  
        // Update the state and trigger the post request in a useEffect
        setFormValues(updatedFormValues);
      };
    } else {
      alert("No file selected!");
    }
  };
  
  useEffect(() => {
    if (formValues.data) {
      handleFilePost();
    }
  }, [formValues.data]);
  
  // Rest of your component code...
  

  const returnLabel = () => {
    if (label === 6) {
      return (
        <div>
          <Row>
            <p>
              El texto ingresado se alinea con el{" "}
              <b className="text-wrap bg-6 rounded-2">
                ODS 6. Agua limpia y saneamiento
              </b>
            </p>
          </Row>
          <Row className="text-center">
            <a href="https://www.un.org/sustainabledevelopment/es/water-and-sanitation/">
              <img
                className="img-fluid rounded"
                alt="ODS 6. Agua limpia y saneamiento"
                src="https://www.unicef.org/sites/default/files/styles/crop_thumbnail/public/S-WEB-Goal-06.png?itok=GELGcmKf"
              />
            </a>
          </Row>
        </div>
      );
    } else if (label === 7) {
      return (
        <div>
          <Row>
            <p>
              El texto ingresado se alinea con el{" "}
              <b className="text-wrap bg-7 rounded-2">
                ODS 7. Energía Asequible y no contaminante
              </b>{" "}
            </p>
          </Row>
          <Row className="text-center">
            <a href="https://www.un.org/sustainabledevelopment/es/energy/">
              <img
                className="img-fluid rounded"
                alt="ODS 7. Energía asequible y no contaminante"
                src="https://www.unicef.org/sites/default/files/styles/crop_thumbnail/public/S-WEB-Goal-07.png?itok=0xptJrFs"
              />
            </a>
          </Row>
        </div>
      );
    } else if (label === 16) {
      return (
        <div>
          <Row>
            <p>
              El texto ingresado se alinea con el{" "}
              <b className="text-wrap bg-16 rounded-2">
                ODS 16. Paz, justicia e instituciones sólidas
              </b>
            </p>
          </Row>
          <Row className="text-center">
            <a href="https://www.un.org/sustainabledevelopment/es/peace-justice/">
              <img
                className="img-fluid rounded"
                alt="ODS 16. Paz, justicia e instituciones solidas"
                src="https://www.unicef.org/sites/default/files/styles/crop_thumbnail/public/S-WEB-Goal-16.png?itok=zRRLXl8t"
              />
            </a>
          </Row>
        </div>
      );
    }
  };

  const containerBg = () => {
    if (label === 6) {
      return "bg-6 rounded-3 text-white";
    } else if (label === 7) {
      return "bg-7 rounded-3 text-white";
    } else if (label === 16) {
      return "bg-16 rounded-3 text-white";
    }
  };
  const renderTooltip = (
    <span>
      Estos representan 3 algoritmos diferentes disponibles para realizar la
      clasificacion. Se recomienda usar Naive Bayes que tiene la mayor
      precision (experimental).
    </span>
  );

  return (
    <>
      <Container style={{ paddingTop: "10px", paddingBottom: "10px" }}>
      <Form.Group className="margin-bottom">
          <div className="form-group-header">
            <h2 className="margin-right">Algoritmo de clasificación:</h2>
            <RcTooltip  placement="right" overlay={renderTooltip}>
              <FontAwesomeIcon icon={faCircleInfo} />
            </RcTooltip >
          </div>
          <Form.Select
            value={formValues.algorithm}
            onChange={handleSelectChange}
          >
            <option value="cnb">Complement Naive Bayes</option>
            <option value="sdg">SVM</option>
            <option value="rfc">Random Forest</option>
          </Form.Select>
        </Form.Group>
        <h2 style={{ paddingTop: "1rem"}}>Ingrese su texto a clasificar</h2>
        <Form.Text muted>
          Ingresa tu texto en aquí y haz click en clasificar para poder ver con
          que ODS se alinea
        </Form.Text>
        <Form.Group style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <Form.Control
            as="textarea"
            onChange={handleTextChange}
            value={formValues.text}
            rows={8}
          />
        </Form.Group>

        <Button
          style={{ backgroundColor: "#E08145", borderColor: "#E08145" }}
          onClick={sendText}
          className="margin-bottom"
        >
          Clasificar texto
        </Button>
      </Container>

      <Container>
        <Form.Group>
          <h2>Clasificador de archivo</h2>
          <Form.Text muted>
          Adjunta un archivo para clasificar varios textos a la vez. Separalos con ";" para poder distinguirlos.
        </Form.Text>
          <p></p>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        <p></p>
        <Button
          style={{ backgroundColor: "#E08145", borderColor: "#E08145" }}
          onClick={handleFileSubmit}
          className="margin-bottom"
        >
          Clasificar CSV
        </Button>
      </Container>
      {label !== -1 && (
        <>
          <Container
            className={containerBg()}
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          >
            <h2>Resultado de la clasificación</h2>
            {returnLabel()}
          </Container>
          <Container style={{ paddingTop: "10px", paddingBottom: "10px" }}>
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
      {labelList.length !== 0 && (
        <Container className='scrollable' style={{ paddingTop: "10px", paddingBottom: "10px"}}>
          <h2>Resultado clasificador de archivos</h2>
          <ClassList array={labelList}/>
        </Container>
      )}
    </>
  );
}
export default Classifier;
