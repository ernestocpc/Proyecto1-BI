import Table from 'react-bootstrap/Table'


function ClassList(props) {

    const array = props.array


    return (
        <Table className='text-center'>
        <thead className='thead-dark'>
            <tr>
                <th>id</th>
                <th>ODS predicho</th>
                <th>Probabilidad ODS 6</th>
                <th>Probabilidad ODS 7</th>
                <th>Probabilidad ODS 16</th>
            </tr>
        </thead>
        <tbody>
            {array.map((u,i)=>(
                <tr>

                    <td>{i+1}</td>
                    <td>{u.resultado}</td>
                    <td>{(u.probabilidades['6'] * 100).toString() +'%'}</td>
                    <td>{(u.probabilidades['7'] * 100).toString()+'%'}</td>
                    <td>{(u.probabilidades['16'] * 100).toString()+'%'}</td>
                </tr>
            ))}
        </tbody>
        </Table>
    )
}


export default ClassList