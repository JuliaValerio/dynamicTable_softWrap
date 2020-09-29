import React from "react"
import ItemList from '../components/ItemList'
import AddItemForm from '../components/AddItemForm'

export default function Home() {
return (
  <div>
    <h1>React-Table CRUD App </h1>
    <h2>Item List</h2>
    <ItemList />
    <AddItemForm />
  </div>
)

}
