import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";


function Classifier() {
    const [formValues, setFormValues] = useState({text:""})
    const [label, setLabel] = useState(6)

    const URL = ''

    async function handlePost() {
        const response = await fetch(URL, {method:"POST", body: JSON.stringify(formValues),  headers: {"Content-type":'application/json;charset=utf-8'}})
        const data = await response.json()
        setLabel(data)
    }

    const handleTextChange = (e) => {
        setFormValues({...formValues, text: e.target.value})
    }

    const sendText = () => {
        if (formValues.text.length !== 0) {
            //handlePost()
            console.log("Se realiza el envio :D")
        } else {
            alert("No ha ingresado ningun texto!!!")
        }
    }

    const returnLabel = () => {
        if(label===6){
            return(<p>El texto ingresado se alinea con el ODS 6. Agua limpia y saneamiento</p>)
        } else if (label === 7){
            return(<p>El texto ingresado se alinea con el ODS 7. Energía Asequible y no contaminante </p>)
        } else if (label ===16){
            return(<p>El texto ingresado se alinea con el ODS 16. Paz, justicia e instituciones sólidas</p>)
        }
    }

    return(
        <div>
            <Container>
                <Form>
                    <Form.Group className='mb-2'>
                        <Form.Label><h2>Ingrese su texto</h2></Form.Label>
                        <Form.Control as ="textarea" onChange={handleTextChange} value={formValues.text}/>
                    </Form.Group>
                    <Button variant='primary' onClick={sendText}>Clasificar</Button>
                </Form>
            </Container>
            <Container>
                <h2>Resultado de la clasificación</h2>
                {(label != -1) && 
                    returnLabel()}
            </Container>
        </div>
    )
}


export default Classifier