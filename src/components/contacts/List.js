import { Container, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react';

function List() {

    const [items, setItems] = useState();
    useEffect(() => {

        const fetchItems = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                // return setItems(data);
                console.log(data)
            }catch (err) {
                console.log(err)
            }

        }

        fetchItems();
    }, [])

    return (
        <>
            <Container className="mt-3">
                <Table responsive bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}


export default List;