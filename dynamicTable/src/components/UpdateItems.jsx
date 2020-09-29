import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const UpdateItem = ({ setEditing, currentItem, updateItem }) => {
    const [users, setItem] = useState(currentItem);

    useEffect(() => {
        setItem(currentItem);
        console.log("useEffect passes the currentItem: ", currentItem);
    }, [currentItem]);

    const onSubmit = e => {
        e.preventDefault();
        console.log("onSubmit passes the id and items", { users });
        updateItem({ currentItem }, users);
    };
    const onChange = e => {
        const { name, value } = e.target
        setItem({ ...users, [name]: value })
    }

    return (
        <>
            <Container variant='primary'>
                <h2>Atualize os Dados</h2>
                <Form onSubmit={onSubmit} className="container">
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            value={users.name}
                            name="name"
                            onChange={onChange}
                            type="text"
                            placeholder="Nome" />
                    </Form.Group>

                    <Form.Group controlId="formBasicIdade">
                        <Form.Label>Idade</Form.Label>
                        <Form.Control
                            placeholder="Idade"
                            value={users.age}
                            name="age"
                            onChange={onChange}
                            type="number" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                            placeholder="CPF"
                            value={users.cpf}
                            name="cpf"
                            onChange={onChange}
                            type="number" />
                    </Form.Group>

                    <Form.Group controlId="formBasicStatus">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                            placeholder="uf"
                            value={users.uf}
                            name="uf"
                            onChange={onChange}
                            type="text"
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicCity">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                            placeholder="Cidade"
                            value={users.city}
                            name="city"
                            onChange={onChange}
                            type="text" />
                    </Form.Group>

                    <Form.Group controlId="formBasicUf">
                        <Form.Label>Estado civil</Form.Label>
                        <Form.Control
                            placeholder="status"
                            value={users.status}
                            name="status"
                            onChange={onChange}
                            type="text"
                        />
                    </Form.Group>
                    <Container>
                        <Row>
                            <Col>
                                <Button
                                    variant="success" type="submit">
                                    Atualizar
            </Button>
                            </Col>
                            <Col>
                                <Button
                                    variant="Primary"
                                    onClick={() => setEditing(false)}>
                                    cancelar
            </Button>
                            </Col>
                        </Row>
                    </Container>
                </ Form >
            </Container>
        </>
    )
}
export default UpdateItem