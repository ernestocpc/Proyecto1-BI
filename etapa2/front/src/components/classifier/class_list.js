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
                    <td>{u.predict}</td>
                    <td>{(u.prob6 * 100).toString() +'%'}</td>
                    <td>{(u.prob7 * 100).toString()+'%'}</td>
                    <td>{(u.prob16 * 100).toString()+'%'}</td>
                </tr>
            ))}
        </tbody>
        </Table>
    )
}


export default ClassList