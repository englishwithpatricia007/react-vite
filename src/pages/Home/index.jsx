
import { useEffect, useState, useRef} from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'  // Import the API service

function Home() {
  const [users, setUsers] = useState([]) // Initialize state to hold users

  const inputName= useRef() // Create a ref for the name input
  const inputEmail= useRef() // Create a ref for the email input

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      email: inputEmail.current.value
    })
   getUsers() // Refresh the user list after creating a new user
  }

  useEffect(() => {
    getUsers()
  })


  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)
    getUsers() // Refresh the user list after deleting a user
  }

  return (

    <div className='container'>
      <form>
        <h1> Cadastro de Usuários </h1>
        <input placeholder="Name" name="name" type="text" ref={inputName}/>
        <input placeholder="E-mail" email="email" type="email" ref={inputEmail}/>
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='cards'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="trash" />
          </button>
        </div>
      ))}
    </div>
  )
}


export default Home
