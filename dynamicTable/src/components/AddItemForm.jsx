import React, { useState } from "react"
import firebase from "firebase"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AddItemForm = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [cpf, setCpf] = useState("")
    const [status, setStatus] = useState("")
    const [city, setCity] = useState("")
    const [uf, setUf] = useState("")

    const onSubmit = e => {
        e.preventDefault()
        firebase
            .firestore()
            .collection("users")
            .add({
                name,
                age,
                cpf,
                status,
                city,
                uf,
            })
            .then(() => setName(""), setAge(""), setCpf(""), setStatus(""), setCity(""), setUf(""))
    }

    return (
        <Form className="container" onSubmit={onSubmit} >
            <h2>Adicione um novo Usuario :)</h2>
            <Form.Group controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    value={name}
                    name="name"
                    onChange={e => setName(e.currentTarget.value)}
                    type="text"
                    placeholder="Nome" />
            </Form.Group>

            <Form.Group controlId="formBasicIdade">
                <Form.Label>Idade</Form.Label>
                <Form.Control
                    placeholder="Idade"
                    value={age}
                    name="age"
                    onChange={e => setAge(e.currentTarget.value)}
                    type="number" />
            </Form.Group>

            <Form.Group controlId="formBasicCpf">
                <Form.Label>cpf</Form.Label>
                <Form.Control
                    placeholder="cpf"
                    value={cpf}
                    name="cpf"
                    onChange={e => setCpf(e.currentTarget.value)}
                    type="number" />
            </Form.Group>

            <Form.Group controlId="formBasicStatus">
                <Form.Label>Estado</Form.Label>
                <Form.Control
                 placeholder="uf"
                 value={uf}
                 name="uf"
                 onChange={e => setUf(e.currentTarget.value)}
                 type="text"
                 />
            </Form.Group>

            <Form.Group controlId="formBasicCity">
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                    placeholder="Cidade"
                    value={city}
                    name="city"
                    onChange={e => setCity(e.currentTarget.value)}
                    type="text" />
            </Form.Group>

            <Form.Group controlId="formBasicUf">
                <Form.Label>Estado civil</Form.Label>
                <Form.Control
                 placeholder="status"
                 value={status}
                 name="status"
                 onChange={e => setStatus(e.currentTarget.value)}
                 type="text"
                    />
            </Form.Group>

            <Button
                variant="primary" type="submit">
                salvar
            </Button>
        </ Form >
    )
}
export default AddItemForm