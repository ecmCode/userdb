import { useState, useEffect } from 'react'
import { database } from './firebase-config';
import {collection, getDocs, addDoc, deleteDoc} from '@firebase/firestore'
import './App.css'


function App() {
  
  const [users,setUsers] = useState([])
  const [name,setName] = useState(null)
  const [age,setAge] = useState(null)
  
  const usersCollectionRef = collection(database,'user')

  const clearInput = () => {
    document.getElementById('name').value = ''
    document.getElementById('age').value = ''
    setAge(null)
    setName(null)
  }
  
  const addUser = async () => {
    
    if(name && age){
      if(name.length >= 2 && age > 0){
        await addDoc(usersCollectionRef,{user: name, age: age})
      }
    }
    setAge(null)
    setName(null)
    clearInput()
  }

  const deleteUser = async (id) => {
    await deleteDoc(usersCollectionRef, {id: id} )
  }

  
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }
    getUsers()
  }, [users]);
  
  return (
    <div className="App">
      <h1>Users</h1>

      <input placeholder='name' id="name" onChange={e => setName(e.target.value)}/>
      <input placeholder='age' id="age" onChange={e => setAge(e.target.value)}/>
      <button onClick={addUser}>submit </button>

      <ul>
        {users.map(u => <li>Name: {u.user} Age:{u.age}</li>)}
      </ul>
    </div>
  )
}

export default App
