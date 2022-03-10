import { Alert } from 'react-bootstrap'
function Add(props) {
    return (
        <h1>Hello From Add Component, Welcome {props.name}.</h1>,
        <Alert variant="success">From Add Component.</Alert>
    );
}

export default Add;