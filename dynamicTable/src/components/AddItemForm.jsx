import React, { useState } from "react"
import firebase from "firebase"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AddItemForm = () => {
    //useState() hook captures the value from the input value
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [cpf, setCpf] = useState("")
    const [status, setStatus] = useState("")
    const [city, setCity] = useState("")
    const [uf, setUf] = useState("")
    /* The onSubmit function we takes the 'e'
      or event and submits it to Firebase
      */
    const onSubmit = e => {
        /* 
        preventDefault is important because it
        prevents the whole page from reloading
        */
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
            //.then will reset the form to nothing
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
                    name="type"
                    onChange={e => setAge(e.currentTarget.value)}
                    type="number" />
            </Form.Group>

            <Form.Group controlId="formBasicCpf">
                <Form.Label>cpf</Form.Label>
                <Form.Control
                    placeholder="cpf"
                    value={cpf}
                    name="qty"
                    onChange={e => setCpf(e.currentTarget.value)}
                    type="number" />
            </Form.Group>

            <Form.Group controlId="formBasicStatus">
                <Form.Label>Estado Civíl</Form.Label>
                <Form.Control
                    placeholder="status"
                    value={status}
                    name="status"
                    onChange={e => setStatus(e.currentTarget.value)}
                    type="text" />
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
                <Form.Label>UF</Form.Label>
                <Form.Control
                    placeholder="uf"
                    value={uf}
                    name="uf"
                    onChange={e => setUf(e.currentTarget.value)}
                    type="text" />
            </Form.Group>

            <Button
                variant="primary" type="submit">
                salvar
            </Button>
        </ Form >
    )
}
export default AddItemForm