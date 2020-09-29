import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const useItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection("users")
            .onSnapshot(snapshot => {

                const listItems = snapshot.docs.map(doc => ({

                    id: doc.id,
                    ...doc.data()
                }));
                setItems(listItems);
            });
        return () => unsubscribe();

    }, []);
    return items
};

const deleteItem = (id) => {
    firebase
        .firestore()
        .collection("users")
        .doc(id)
        .delete()
}

const ItemList = ({ editItem }) => {
    const listItem = useItems();

    return (

        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td className="tg-ycr8">Nome</td>
                    <td className="tg-ycr8">Idade</td>
                    <td className="tg-i81m">CPF</td>
                    <td className="tg-i81m">Estado Civil</td>
                    <td className="tg-i81m">Cidade</td>
                    <td className="tg-a02x">UF</td>
                    <td colum="1" className="tg-a02x">Ações</td>
                    <td className="tg-a02x"></td>
                </tr>
            </tbody>
            {listItem.map((item) => (
                <tbody key={item.id}>
                    <tr>
                        <td className="tg-ycr8">{item.name}</td>
                        <td className="tg-ycr8">{item.age}</td>
                        <td className="tg-i81m">{item.cpf}</td>
                        <td className="tg-i81m">{item.status}</td>
                        <td className="tg-i81m">{item.city}</td>
                        <td className="tg-a02x">{item.uf}</td>
                        <td className="tg-ycr8">
                            <Button
                                variant="danger"
                                onClick={() => deleteItem(item.id)}>
                                Remover
                            </Button></td>
                        <td className="tg-ycr8">
                            <Button
                                variant="warning"
                                onClick={() => editItem(item)}
                            >
                                Editar
                            </Button></td>

                    </tr>
                </tbody>
            ))}
        </Table>
    );
};
export default ItemList;