import React, { useState } from "react"
import firebase from "firebase/app"
import ItemList from '../components/ItemList'
import AddItemForm from '../components/AddItemForm'
import UpdateItems from '../components/UpdateItems'

export default function Home() {

  const initialItemState = [
    { id: null, name: "", age: "", cpf: "", status: "", city: "", uf: "" },
  ]
  const [editing, setEditing] = useState(false)

  const [currentItem, setCurrentItem] = useState(initialItemState)
  
  const editItem = (item) => {
    setEditing(true)
    setCurrentItem({
      id:item.id,
      name: item.name,
      age: item.age,
      cpf: item.cpf,
      status: item.status,
      city: item.city,
      uf: item.uf,
    })
  }

  const updateItem = ({ currentItem }, updatedItem) => {
    console.log(
      "It sends the item to the updated item function:",
      updatedItem,
      currentItem.id
    );
    //When the Update button is pressed, it turns off editing
    setEditing(false)
    firebase
      .firestore()
      .collection("users")
      .doc(currentItem.id)
      .update(updatedItem);
  };

  return (
    <div className="container">
      <h1>React-Table CRUD App </h1>
      <h2>List</h2>
      <ItemList editItem={editItem} />
      {editing ? (
        <UpdateItems
          setEditing={setEditing}
          currentItem={currentItem}
          updateItem={updateItem}
        />
      ) : (
        <AddItemForm />
      )}
      
    </div>
  )

}
